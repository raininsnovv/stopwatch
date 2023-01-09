import React, { useState, useContext } from "react";
import styled from "styled-components";
import { BreakContext } from "../providers/BreakProvider";
import "./styles.css";

const StartButton = ({
  count,
  setCount,
  handleRelax,
  relax,
  setRelax,
  longRelax,
  StyledButton,
  second,
  setSecond,
  setTimerId,
  clicked,
  setClicked,
}) => {
  const onStart = () => {
    if (second > 0) {
      setClicked(true);
    }
    setTimerId(
      setInterval(() => {
        setSecond((prevState) => prevState - 1);
      }, 1000)
    );
  };
 
  return (
    <div>
      <StyledButton
        onClick={onStart}
        disabled={clicked ? true : false}
        relax={relax}
        longRelax={longRelax}
      >
        Start
      </StyledButton>
    </div>
  );
};

export default StartButton;
