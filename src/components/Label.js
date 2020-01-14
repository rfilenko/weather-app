import React from "react";
import styled from "styled-components";

const Labl = styled.label`
  font-size: 0.875rem;
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-weight: 700;
  display: block;
`;

const Label = ({ htmlFor, text }) => {
  return <Labl htmlFor={htmlFor}>{text}</Labl>;
};
export default Label;
