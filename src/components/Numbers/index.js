import React from "react";
import styled from "styled-components";

const CardContainer = styled.button`
  width: 100px;
  height: 150px;
  background: white;
  display: flex;
  box-shadow: 1px 3px #888888;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  border: none;
  color: red;
`;

const NumberList = ({ number, onClick }) => {
  return <CardContainer onClick={onClick}>{number}</CardContainer>;
};

export default NumberList;
