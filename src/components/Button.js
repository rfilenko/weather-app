import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "#4299e1" : "white")};
  color: ${props => (props.primary ? "white" : "#4299e1")};

  font-size: 1em;
  margin: 1em 0;
  padding: 0.25em 1em;
  border: 2px solid #4299e1;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 700;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.25s ease-in;

  &:hover {
    opacity: 0.95;
  }
  //alignment
  align-self: ${props => (props.alignSelf ? "center" : "flex-start")};
  width: ${props => props.inputWidth || "100%"};
`;
export const Button = ({ text }) => {
  return <Btn>{text}</Btn>;
};
export const WeatherButton = ({ text, fetchData }) => {
  return (
    <Btn primary onClick={fetchData}>
      {text}
    </Btn>
  );
};
export const InfoButton = ({ text, infoData }) => {
  return (
    <Btn alignSelf inputWidth onClick={infoData}>
      {text}
    </Btn>
  );
};
