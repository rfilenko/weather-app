import React from "react";

import styled from "styled-components";
const WeatherInfoBlock = styled.section`
  background: #fff;
  position: absolute;
  top: 0;
  right: 2rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding-bottom: 2rem;
  width: 300px;

  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
    width: 100%;
    border-radius: 0;
    right: inherit;
    bottom: 0;
    top: inherit;
  }
  > p {
    margin: 0;
    font-style: italic;
    font-weight: bold;
    padding: 0.5rem 1rem;
    background: #cccccc70;
  }
  .additional,
  .coords {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0 20px;
    p {
      margin: 0 0 0.5rem;
      span {
        font-weight: bold;
        margin-right: 0.5rem;
      }
    }
  }
  .conditions {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 1rem;
    h3 {
      font-size: 4rem;
      padding: 0 20px;
      margin: 0;
      color: orange;
    }
    p {
      color: #13022c;
      margin: 0;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
const WeatherInfo = props => {
  const { data } = props;
  return (
    <WeatherInfoBlock>
      {data ? (
        <>
          <p>
            {data.name}, {data.sys.country}
          </p>
          <div className="conditions">
            <h3>{data.main.temp.toFixed(0)}°</h3>
            <p>
              <img
                width="45"
                src={
                  "https://openweathermap.org/img/wn/" +
                  data.weather[0].icon +
                  "@2x.png"
                }
                alt={data.weather[0].description + " weather icon"}
              />
              <span>{data.weather[0].description}</span>
            </p>
          </div>
          <div className="additional">
            <p>
              <span>Humidity:</span>
              {data.main.humidity} %
            </p>
            <p>
              <span>Pressure:</span>
              {data.main.pressure} hpa
            </p>
          </div>
          <div className="coords">
            <p>
              <span>Geo coordinates:</span>"{data.coord.lat}, {data.coord.lon}"
            </p>
          </div>
        </>
      ) : null}
    </WeatherInfoBlock>
  );
};

export default WeatherInfo;
