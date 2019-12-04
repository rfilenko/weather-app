import React from "react";

import styled from "styled-components";
// import { InfoButton } from "./Button";
import Table from "./Table";
const CountryInfo = styled.div`
  img {
    width: 30px;
    height: 30px;
    display: inline-block;
    border-radius: 50 %;
    margin-right: 5px;
  }
`;

const Info = props => {
  const { cityInfo, infoData } = props;
  return (
    <CountryInfo>
      {/* <InfoButton text="Country Info" infoData={infoData} /> */}
      <br />
      {props.cityInfo ? (
        <Table>
          <tbody>
            <tr className="">
              <td>
                <img src={cityInfo.flag} alt="flag" />{" "}
              </td>
              <td id="">
                {cityInfo.nativeName}, {cityInfo.alpha3Code}
              </td>
            </tr>
            <tr className="">
              <td>Time</td>
              <td id="">
                <span> {cityInfo.region}</span>,{cityInfo.timezones[0]}
              </td>
            </tr>
            <tr className="">
              <td>Area</td>
              <td id="">
                {" "}
                {cityInfo.area} km<sup>2</sup>
              </td>
            </tr>
            <tr className="">
              <td>Population</td>
              <td id=""> {cityInfo.population} mln. </td>
            </tr>
            <tr className="">
              <td>Currency</td>
              <td id="">
                {cityInfo.currencies[0].name},{" "}
                <i>{cityInfo.currencies[0].symbol}</i>
              </td>
            </tr>
          </tbody>
        </Table>
      ) : (
        " "
      )}
    </CountryInfo>
  );
};

export default Info;
