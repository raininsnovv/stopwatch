import React, { useEffect, useRef, useState } from "react";
import PauseButton from "./PauseButton";
import StartButton from "./StartButton";
import StopButton from "./StopButton";
import styled from "styled-components";
import { BreakContext } from "../providers/BreakProvider";

const TimerWrapper = styled.div`
  display: flex;
  width: 480px;
  height: 311px;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  background: ${(props) =>
    props.relax ? "#453C67" : "teal" && props.longRelax ? "#820000" : "teal"};
  border-radius: 8px;
  margin-top: 0;
  padding-top: 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  margin-right: 30px;
  margin-left: 30px;
`;

const BreakButtons = styled(ButtonsWrapper)`
  justify-content: space-around;
  padding-left: 40px;
  padding-right: 40px;
`;

const StyledButton = styled.button`
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.relax
      ? "#251749"
      : "#175d60" && props.longRelax
      ? "#630606"
      : "#175d60"};
  font-size: 20px;
  border-color: #c58940;
`;

const StyledButtonHead = styled(StyledButton)`
  padding: 5px;
  font-size: 17px;
`;

const Timer = ({
  count,
  setCount,
  AppWrapper,
  relax2,
  setRelax2,
  longRelax2,
  setLongRelax2,
}) => {
  const [second, setSecond] = useState(20);
  const [timerId, setTimerId] = useState("");
  const [clicked, setClicked] = useState(false);
  const [relax, setRelax] = useState(false);
  const [longRelax, setLongRelax] = useState(false);
  const [title, setTitle] = useState("Work");

  useEffect(() => {
    if (second < 1) {
      setCount(count + 1);
      clearInterval(timerId);
      setClicked(false);
      if (count >= 2 && count % 3 === 0) {
        handleLongRelax();
      } else handleRelax();
    }
  }, [second]);
  useEffect(() => {
    if (relax && second < 1) {
      handleWork();
      setCount(count);
    }
  }, [second]);

  useEffect(() => {
    if (longRelax && second < 1) {
      handleWork();
      setCount(count);
    }
  }, [second]);

  const handleRelax = () => {
    setRelax2((prevState) => !prevState);
    setRelax((prevState) => !prevState);
    setSecond(5);
    setTitle("Break");
  };

  const handleWork = () => {
    setRelax(false);
    setRelax2(false);
    setLongRelax(false);
    setLongRelax2(false);
    setSecond(20);
    setTitle("Work");
  };

  const handleLongRelax = () => {
    setLongRelax((prevState) => !prevState);
    setLongRelax2((prevState) => !prevState);
    setRelax(false);
    setRelax2(false);
    setSecond(10);
    setTitle("Long break");
  };

  return (
    <>
      <TimerWrapper relax={relax} longRelax={longRelax}>
        <BreakButtons>
          <StyledButtonHead
            relax={relax}
            longRelax={longRelax}
            onClick={handleWork}
            disabled={relax || longRelax ? false : true}
            style={{
              cursor:
                relax || longRelax
                  ? "pointer"
                  : "not-allowed" ||
                    (!relax && !longRelax ? "pointer" : "not-allowed"),
            }}
          >
            Hard Work
          </StyledButtonHead>
          <StyledButtonHead
            relax={relax}
            longRelax={longRelax}
            disabled={relax ? true : false}
            onClick={handleRelax}
            style={{ cursor: relax ? "not-allowed" : "pointer" }}
          >
            Short Break
          </StyledButtonHead>
          <StyledButtonHead
            onClick={handleLongRelax}
            longRelax={longRelax}
            relax={relax}
            disabled={longRelax ? true : false}
            style={{ cursor: longRelax ? "not-allowed" : "pointer" }}
          >
            Long Break
          </StyledButtonHead>
        </BreakButtons>
        <h1>{title}</h1>
        <h1 style={{ fontSize: 100 }}>{second}</h1>
        <ButtonsWrapper>
          <StartButton
            handleRelax={handleRelax}
            count={count}
            setCount={setCount}
            relax={relax}
            setRelax={setRelax}
            longRelax={longRelax}
            StyledButton={StyledButton}
            second={second}
            setSecond={setSecond}
            setTimerId={setTimerId}
            clicked={clicked}
            setClicked={setClicked}
          />
          <PauseButton
            relax={relax}
            longRelax={longRelax}
            StyledButton={StyledButton}
            timerId={timerId}
            clicked={clicked}
            setClicked={setClicked}
          />
          <StopButton
            handleWork={handleWork}
            count={count}
            setCount={setCount}
            relax={relax}
            longRelax={longRelax}
            StyledButton={StyledButton}
            second={second}
            setSecond={setSecond}
            timerId={timerId}
            clicked={clicked}
            setClicked={setClicked}
          />
        </ButtonsWrapper>
      </TimerWrapper>
    </>
  );
};

export default Timer;
