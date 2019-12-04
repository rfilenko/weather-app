import React from "react";
import styled from "styled-components";

const Wrappr = styled.section`
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: #edf2f7;
  min-height: 400px;
`;
const InfoWrappr = styled(Wrappr)`
  justify-content: flex-start;
`;

export const Wrapper = ({ children }) => {
  return <Wrappr>{children}</Wrappr>;
};
export const InfoWrapper = ({ children }) => {
  return <InfoWrappr>{children}</InfoWrappr>;
};
