import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 5rem;
  text-align: center;
  color: #e2e8f0;
  flex-basis: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(250, 235, 215, 0.41);
  padding: 0.5rem 2rem;
  border-radius: 5px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);

  span {
    display: block;
    font-size: 1.25rem;
    color: darkslategray;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
    margin: 0;
    width: 100%;
  }
`;

const CityTitle = ({ city, imgInfo }) => {
  return (
    <>
      <Title>
        {city}
        {imgInfo && <span>Image - {imgInfo} </span>}
      </Title>
    </>
  );
};

export default CityTitle;
