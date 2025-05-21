import React, { useState, useEffect, useCallback, useRef } from "react";
import unsplash from "./api/unsplash";
import bg from "./images/defaultBg.jfif";

import CityTitle from "./components/CityTitle";
import FormComponent from "./components/FormComponent";
import Info from "./components/Info";
import PageContent from "./components/PageContent";
import { InfoWrapper, Wrapper } from "./components/Wrapper";
import { fetchCountryData, fetchWeatherData } from "./utils/fetchData";

const App = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("Prague");
  const [cityInfo, setCityInfo] = useState(null);
  const [code, setCode] = useState(null);
  const [, setTemp] = useState(null);
  const [imgInfo, setImgInfo] = useState(null);
  const [defaultBg, setDefaultBg] = useState("");
  const [cityCountry, setCityCountry] = useState("");
  const [, setImgIcon] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const isMounted = useRef(true);

  //get country information data
  const getInfo = useCallback(async () => {
    if (!code) return;

    try {
      if (isMounted.current) {
        setCityInfo(await fetchCountryData(code));
        setIsVisible(prev => !prev);
      }
    } catch (err) {
      console.error('Error fetching country info:', err);
    }
  }, [code]);

  const infoData = useCallback(() => {
    if (data) {
      getInfo();
    }
  }, [data, getInfo]);

  const handleInput = useCallback((e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    setIsDisabled(false);
  }, []);

  const closeInfo = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  const getWeather = useCallback(async () => {
    if (!inputValue) return;

    try {
      const weatherData = await fetchWeatherData(inputValue);

      if (isMounted.current) {
        const { weather, sys, name, main } = weatherData;
        setData(weatherData);
        setCityCountry(`${name}, ${sys.country}`);
        setIsVisible(false);
        setImgIcon(weather[0]?.icon || '');
        setCode(sys.country);
        setTemp(main?.temp);
      }
    } catch (err) {
      console.error('Error fetching weather:', err);
      throw err; // Re-throw to be caught by the caller
    }
  }, [inputValue]);

  //changing body background
  const changeBg = useCallback(() => {
    const pageContent = document.querySelector(".page-content");
    if (pageContent) {
      pageContent.style.backgroundImage = defaultBg
        ? `url(${defaultBg})`
        : `url(${bg})`;
    }
  }, [defaultBg]);

  const getPhotos = useCallback(async () => {
    if (!inputValue) return;

    try {
      const res = await unsplash.get(`/photos/random/?query=${inputValue}`);
      if (res?.data?.urls?.regular && isMounted.current) {
        setDefaultBg(res.data.urls.regular);
        setImgInfo(res.data.location?.title || '');
      }
    } catch (err) {
      console.error("Error fetching photos:", err);
    }
  }, [inputValue]);

  const fetchData = useCallback(async () => {
    if (!isMounted.current) return;

    try {
      await getWeather();
      await getPhotos();
    } catch (error) {
      console.error("Error in fetchData:", error);
      // Consider adding user feedback here
    }
  }, [getWeather, getPhotos]);

  // Initialize data on component mount
  useEffect(() => {
    isMounted.current = true;
    const init = async () => {
      try {
        await fetchData();
        setInputValue("");
      } catch (error) {
        console.error("Initialization error:", error);
      }
    };

    init();

    return () => {
      isMounted.current = false;
    };
  }, []);

  // Update background when defaultBg changes
  useEffect(() => {
    changeBg();
  }, [changeBg]);

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
