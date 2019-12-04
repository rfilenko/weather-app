import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  color: #4a5568;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.25;
  border: 0 solid #e2e8f0;
  border-radius: 0.25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

const Button = ({ id, type, placeholder }) => {
  return <Input id={id} type={type} placeholder={placeholder} />;
};
export default Button;
