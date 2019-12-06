import React, { Component } from "react";
import "./App.css";

import FormComponent from "./components/FormComponent";
import Info from "./components/Info";
import CityTitle from "./components/CityTitle";
import { Wrapper, InfoWrapper } from "./components/Wrapper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      code: null,
      cityInfo: null,
      inputValue: "Prague",
      cityCountry: "",
      imgIcon: "",
      isVisible: false,
      isDisabled: true,
      imgs: [],
      one: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.infoData = this.infoData.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.getWeather();
    this.getPhotos();
    // clear input value
    this.setState({ inputValue: "" });
  }

  getWeather() {
    const KEY = "1e27d6d230adcdad18474cb51e03fa54";
    let URL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      this.state.inputValue +
      "&units=metric&appid=" +
      KEY;
    fetch(URL)
      .then(res => res.json())
      .then(dataJson => {
        const { weather, sys } = dataJson;
        this.setState({
          data: dataJson,
          cityCountry: `${dataJson.name}, ${dataJson.sys.country}`,
          imgIcon: weather.icon,
          code: sys.country,
          isVisible: false
        });
      })
      .catch(err => console.log(err));
  }

  //get country information data
  getInfo() {
    fetch("https://restcountries.eu/rest/v2/alpha/" + this.state.code)
      .then(response => response.json())
      .then(data => {
        this.setState({ cityInfo: data, isVisible: true });
      })
      .catch(err => console.log(err));
  }
  fetchData() {
    //get weather data
    this.getWeather();
    //fetch new images
    this.getPhotos();
    //changes background
    this.changeBg();
  }

  // get data
  infoData() {
    if (this.state.data) {
      this.getInfo();
    }
  }

  //fetch images
  getPhotos() {
    const { inputValue } = this.state;
    const APP_ID =
      "73009d35e19e1e1cea3441634004ccc2b145aede7c07d7998b17bf95430a95dc";
    let URL = `https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${inputValue}&client_id=${APP_ID}`;
    fetch(URL)
      .then(res => res.json())
      .then(dataJson => {
        this.setState({
          imgs: dataJson.results
        });
        //get random image
        const imagesLength = this.state.imgs.length;
        const randomImage = this.state.imgs[
          Math.floor(Math.random() * imagesLength)
        ];
        this.setState({
          one: randomImage.urls.regular
        });
        this.changeBg();
      })
      .catch(err => console.log(err));
  }

  //changing body background
  changeBg() {
    let body = document.querySelector("body");
    body.style.backgroundImage = `url(${this.state.one})`;
  }

  //handle input
  handleInput(e) {
    e.preventDefault();
    this.setState({
      inputValue: e.target.value,
      isVisible: false,
      isDisabled: false
    });
  }

  render() {
    const {
      data,
      cityInfo,
      cityCountry,
      inputValue,
      isDisabled,
      isVisible
    } = this.state;
    return (
      <div className="App">
        <CityTitle data={data} city={cityCountry} />
        <Wrapper>
          <FormComponent
            data={data}
            inputValue={inputValue}
            isDisabled={isDisabled}
            fetchData={this.fetchData}
            infoData={this.infoData}
            handleInput={this.handleInput}
          />
        </Wrapper>
        <InfoWrapper>
          {isVisible && (
            <Info
              cityInfo={cityInfo}
              infoData={this.infoData}
              fetchData={this.fetchData}
            />
          )}
        </InfoWrapper>
      </div>
    );
  }
}
export default App;
