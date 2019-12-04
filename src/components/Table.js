import React from "react";
import styled from "styled-components";

const Tabl = styled.table`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 15px;
  td {
    padding: 0.5rem 1rem;
    text-align: left;
  }
  tr:nth-child(even) {
    background: #ccc;
  }
  tr:nth-child(odd) {
    background: #fff;
  }
`;

const Table = ({ children }) => {
  return <Tabl>{children}</Tabl>;
};

export default Table;
