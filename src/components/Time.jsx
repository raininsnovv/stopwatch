import React, { useEffect, useState } from "react";

const Time = () => {
  const [second, setSecond] = useState(60);
  const [pause, setPause] = useState(true);

  const onStart = () => {
    setPause(false);
    // setSecond(second - 1);
  };

  const onPause = () => {
    setPause(true);
  };

  const onStop = () => {
    setSecond(60);
    setPause(true);
  };

  useEffect(() => {
    let interval = null;
    if (!pause) {
      interval = setInterval(() => {
        if (second > 0 && !pause) {
          setSecond(second - 1);
          clearInterval(interval);
        }
        if (second < 0) {
          onPause();
          clearInterval(interval);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <h1>{second}</h1>
      <div className="buttons">
        <button onClick={onStart}>Start</button>
        <button onClick={onPause}>Pause</button>
        <button onClick={onStop}>Stop</button>
      </div>
    </div>
  );
};

export default Time;
