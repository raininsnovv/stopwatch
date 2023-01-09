import React from "react";

const StopButton = ({
  handleWork,
  setCount,
  relax,
  longRelax,
  StyledButton,
  setSecond,
  timerId,
  clicked,
  setClicked,
  second,
}) => {
  const onStop = () => {
    setSecond(20);
    handleWork();
    clearInterval(timerId);
    setClicked(false);
    setCount(0);
  };

  return (
    <div>
      <StyledButton
        relax={relax}
        longRelax={longRelax}
        disabled={
          (clicked && second > 0) || (!clicked && second <= 60) ? false : true
        }
        onClick={onStop}
      >
        {`Stop `}
      </StyledButton>
    </div>
  );
};

export default StopButton;
