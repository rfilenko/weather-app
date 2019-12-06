import React from "react";
import styled from "styled-components";

import WeatherInfo from "./WeatherInfo";
import { WeatherButton } from "./Button";
import { InfoButton } from "./Button";
import Input from "./Input";
import Label from "./Label";

const Form = styled.form`
  width: 100%;
  max-width: 20rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding-top: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-bottom: 1rem;
  background-color: #fff;
  align-self: flex-start;
  position: absolute;
  top: 0;
  left: 2rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const FormComponent = props => {
  const { inputValue, isDisabled, handleInput, fetchData, infoData } = props;
  return (
    <>
      <Form onSubmit={handleInput}>
        <Label htmlFor="location" text="Search location" />
        <Input
          id="location"
          type="text"
          placeholder="Enter a location"
          inputValue={inputValue}
          handleInput={handleInput}
        />
        <WeatherButton
          primary
          text="Check weather"
          fetchData={fetchData}
          isDisabled={isDisabled}
        />
        <InfoButton inputWidth="50px" text="Country Info" infoData={infoData} />
      </Form>
      <WeatherInfo {...props} fetchData={fetchData} />
    </>
  );
};
export default FormComponent;
