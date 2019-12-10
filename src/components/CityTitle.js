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

  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
    margin: 0;
    width: 100%;
  }
`;

const CityTitle = ({ city }) => {
  return <Title> {city}</Title>;
};

export default CityTitle;
