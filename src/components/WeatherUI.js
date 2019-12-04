import React from "react";
import styled from "styled-components";
import Table from "./Table";

const WeatherInfo = styled.div`
  flex-basis: 50%;
`;

const Weather = props => {
  const { data } = props;
  return (
    <WeatherInfo>
      {data && (
        <Table>
          <tbody>
            <tr>
              <td>Weather in: </td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td>Conditions:</td>
              <td>
                <img
                  width="40"
                  src={
                    "https://openweathermap.org/img/wn/" +
                    data.weather[0].icon +
                    "@2x.png"
                  }
                  alt={data.weather[0].description + " weather icon"}
                />
                {data.weather[0].description}
              </td>
            </tr>
            <tr>
              <td>Temperature: </td>
              <td>
                {data.main.temp} °C
                <span>
                  ( min {data.main.temp_min}°C/max {data.main.temp_max}°C)
                </span>
              </td>
            </tr>
            <tr>
              <td>Humidity:</td>
              <td>{data.main.humidity} %</td>
            </tr>
            <tr>
              <td> Pressure:</td>
              <td>{data.main.pressure} hpa</td>
            </tr>
            <tr>
              <td> Geo coordinates:</td>
              <td>
                <span>{data.coord.lat}</span>, <span>{data.coord.lon}</span>
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </WeatherInfo>
  );
};
export default Weather;
