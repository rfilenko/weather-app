import React, { Component } from "react";
import styled from "styled-components";
import FormComponent from "./components/FormComponent";

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: #4a5568;
  flex-basis: 100%;
`;
const Wrapper = styled.section`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: #edf2f7;
  min-height: 50vh;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      code: null,
      cityInfo: null,
      inputValue: "Prague",
      imgIcon: ""
    };
    this.handleInput = this.handleInput.bind(this);
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
          code: sys.country
        });
      });
  }
  fetchData() {
    this.getWeather();
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
          <Title>weather app</Title>
          <FormComponent
            data={this.state.data}
            inputValue={this.state.inputValue}
            fetchData={this.fetchData}
            handleInput={this.handleInput}
          />
        </Wrapper>
      </div>
    );
  }
}
export default App;
