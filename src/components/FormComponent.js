import React from "react";
import styled from "styled-components";

import WeatherUI from "./WeatherUI";
import { WeatherButton } from "./Button";
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
  border-radius: 0.25rem;
  background-color: #fff;
  align-self: flex-start;
`;

const FormComponent = props => {
  const { data, inputValue, handleInput, fetchData } = props;
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
        <WeatherButton primary text="Check weather" fetchData={fetchData} />
      </Form>
      <WeatherUI
        data={data}
        inputValue={props.inputValue}
        fetchData={props.fetchData}
        handleInput={props.handleInput}
      />
    </>
  );
};
export default FormComponent;
