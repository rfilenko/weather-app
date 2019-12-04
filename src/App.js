import React from "react";
import styled from "styled-components";
import FormComponent from "./components/FormComponent";

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: #4a5568;
`;
const Wrapper = styled.section`
  padding: 2rem 4rem;
  background: #edf2f7;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>weather app</Title>
        <FormComponent />
      </Wrapper>
    </div>
  );
}

export default App;
