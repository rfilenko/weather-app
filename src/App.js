import React, { Component } from "react";
import styled from "styled-components";
import FormComponent from "./components/FormComponent";
import Info from "./components/Info";
import { Wrapper, InfoWrapper } from "./components/Wrapper";
import weatherIcon from "./images/weatherIcon.png";

const imgStyles = {
  display: "inline-block",
  verticalAlign: "middle",
  marginRight: ".5rem"
};

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: #4a5568;
  flex-basis: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      code: null,
      cityInfo: null,
      inputValue: "Prague",
      imgIcon: "",
      isVisible: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.infoData = this.infoData.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  getWeather() {
    const key = "1e27d6d230adcdad18474cb51e03fa54";
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      this.state.inputValue +
      "&units=metric&appid=" +
      key;
    fetch(url)
      .then(res => res.json())
      .then(dataJson => {
        const { weather, sys } = dataJson;
        this.setState({
          data: dataJson,
          imgIcon: weather.icon,
          code: sys.country,
          isVisible: true
        });
      });
  }
  //get info
  getInfo() {
    fetch("https://restcountries.eu/rest/v2/alpha/" + this.state.code)
      .then(response => response.json())
      .then(data => {
        this.setState({ cityInfo: data });
      })
      .catch(err => console.log(err));
  }
  fetchData() {
    this.getWeather();
  }

  // get data
  infoData() {
    if (this.state.data) {
      this.getInfo();
    }
  }
  //handle input
  handleInput(e) {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Title>
            <img src={weatherIcon} width="50" style={imgStyles} />
            weather app
          </Title>
          <FormComponent
            data={this.state.data}
            inputValue={this.state.inputValue}
            fetchData={this.fetchData}
            handleInput={this.handleInput}
          />
        </Wrapper>
        <InfoWrapper>
          {this.state.isVisible ? (
            <Info
              cityInfo={this.state.cityInfo}
              infoData={this.infoData}
              fetchData={this.fetchData}
            />
          ) : null}
        </InfoWrapper>
      </div>
    );
  }
}
export default App;
