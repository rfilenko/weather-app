import React from "react";

import styled from "styled-components";
const CountryInfo = styled.div`
  div {
    background: #fff;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    position: absolute;
    bottom: 0;
    right: 2rem;
    width: 300px;

    @media screen and (max-width: 768px) {
      right: 0;
      width: 100%;
    }

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
  p {
    padding: 0 1.5rem;
    margin: 0;
    margin-bottom: 0.5rem;

    span {
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
  .flag-wrap {
    padding: 1rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-weight: normal;
    }
    img {
      width: 30px;
      height: 30px;
      display: inline-block;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }
  button {
    right: 0.5rem;
    position: absolute;
    top: -10px;
    background: #4299e1;
    color: #fff;
    border: none;
    width: 2rem;
    height: 2rem;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3em;
    cursor: pointer;
    transition: transform 0.25s cubic-bezier(0.39, 0.58, 0.57, 1);
    &:hover {
      transform: scale(1.025) rotate(80deg);
      opacity: 0.85;
    }
  }
`;

const Info = props => {
  const { cityInfo, closeInfo } = props;
  return (
    <>
      <CountryInfo>
        {props.cityInfo && (
          <div>
            <button onClick={closeInfo}>&times;</button>
            <p className="flag-wrap">
              <img src={cityInfo.flag} alt="flag" />
              <span>
                {cityInfo.nativeName},{cityInfo.alpha3Code}
              </span>
            </p>
            <p>
              <span>Time</span>
              {cityInfo.region},{cityInfo.timezones[0]}
            </p>
            <p>
              <span>Area: </span>
              {cityInfo.area} km<sup>2</sup>
            </p>
            <p>
              <span>Population: </span> {cityInfo.population} mln.
            </p>
            <p>
              {" "}
              <span> Currency: </span> {cityInfo.currencies[0].name},
              <i>{cityInfo.currencies[0].symbol}</i>
            </p>
          </div>
        )}
      </CountryInfo>
    </>
  );
};

export default Info;
