import React from "react";

const PauseButton = ({
  relax,
  longRelax,
  StyledButton,
  timerId,
  clicked,
  setClicked,
}) => {
  const onPause = () => {
    clearInterval(timerId);
    setClicked(false);
  };

  return (
    <div>
      <StyledButton
        relax={relax}
        longRelax={longRelax}
        disabled={!relax || !longRelax ? false : true}
        onClick={onPause}
      >
        Pause
      </StyledButton>
    </div>
  );
};

export default PauseButton;
