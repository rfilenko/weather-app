import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

const Form = styled.form`
  width: 100%;
  max-width: 20rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding-bottom: 2rem;
  padding-top: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  background-color: #fff;
`;

const FormComponent = () => {
  return (
    <Form>
      <Label htmlFor="location" text="Search location" />
      <Input id="location" type="text" placeholder="Enter a location" />
      <Button primary text="Check weather" />
    </Form>
  );
};
export default FormComponent;
