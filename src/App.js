import React, { useState, useEffect } from "react";
import unsplash from "./api/unsplash";
import bg from "./images/defaultBg.jfif";

import CityTitle from "./components/CityTitle";
import FormComponent from "./components/FormComponent";
import Info from "./components/Info";
import PageContent from "./components/PageContent";
import { InfoWrapper, Wrapper } from "./components/Wrapper";

const App = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("Prague");
  const [cityInfo, setCityInfo] = useState(null);
  const [code, setCode] = useState(null);
  const [temp, setTemp] = useState(null);
  const [imgInfo, setImgInfo] = useState(null);
  const [defaultBg, setDefaultBg] = useState("");
  const [cityCountry, setCityCountry] = useState("");
  const [imgIcon, setImgIcon] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  //get country information data
  const getInfo = async () => {
    try {
      const res = await fetch("https://restcountries.eu/rest/v2/alpha/" + code);
      const json = await res.json();
      const data = await json;
      setCityInfo(data);
      setIsVisible(!isVisible);
    } catch (err) {
      console.log(err);
    }
  };

  // get data
  const infoData = () => {
    if (data) {
      getInfo();
    }
  };

  //handle input
  const handleInput = e => {
    e.preventDefault();
    setInputValue(e.target.value);
    setIsDisabled(false);
  };

  const closeInfo = () => {
    setIsVisible(!isVisible);
  };
  const fetchData = () => {
    //get weather data
    getWeather();
    getPhotos();
  };
  const getWeather = () => {
    let URL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue +
      "&units=metric&appid=" +
      process.env.REACT_APP_WEATHER_KEY;
    fetch(URL)
      .then(res => res.json())
      .then(dataJson => {
        const { weather, sys } = dataJson;
        setData(dataJson);
        setCityCountry(`${dataJson.name}, ${dataJson.sys.country}`);
        setIsVisible(false);
        setImgIcon(weather.icon);
        setCode(sys.country);
        setTemp(dataJson.main.temp);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    fetchData();
    setInputValue("");
  }, []);

  //changing body background
  const changeBg = () => {
    const pageContent = document.querySelector(".page-content");
    pageContent.style.backgroundImage = `url(${bg})`;

    if (defaultBg.length > 0) {
      pageContent.style.backgroundImage = `url(${defaultBg})`;
    }
  };

  const getPhotos = async () => {
    try {
      const res = await unsplash.get(`/photos/random/?query=${inputValue}`);
      if (res) {
        setDefaultBg(res.data.urls.regular);
        setImgInfo(res.data.location.title);

        //changes background
        changeBg();
        console.log(res.data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="App">
      <PageContent>
        <CityTitle data={data} city={cityCountry} imgInfo={imgInfo} />
        <Wrapper>
          <FormComponent
            data={data}
            inputValue={inputValue}
            isDisabled={isDisabled}
            isVisible={isVisible}
            fetchData={fetchData}
            infoData={infoData}
            closeInfo={closeInfo}
            handleInput={handleInput}
          />
        </Wrapper>
        <InfoWrapper>
          {isVisible && (
            <Info
              data={data}
              cityInfo={cityInfo}
              infoData={infoData}
              fetchData={fetchData}
              closeInfo={closeInfo}
            />
          )}
        </InfoWrapper>
      </PageContent>
    </div>
  );
  // }
};
export default App;
