import React from "react";
import styled from "styled-components";

const PageContent = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Fira+Sans:400,600|Merriweather&display=swap");

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p span {
    font-family: "Fira Sans", sans-serif;
  }

  width: 100vw;
  min-height: 100vh;
  font-family: Merriweather, serif;
  background-position: center center;
  background-size: cover;
  /* background-image: url(https://images.unsplash.com/photo-1562664348-2188b99b5157?ixlib=rb-1.2.1&q=…m=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhc); */

  &:before {
    background: rgba(0, 0, 0, 0.53);
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const Content = props => {
  return <PageContent className="page-content"> {props.children} </PageContent>;
};

export default Content;
