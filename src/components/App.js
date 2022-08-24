import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [delta, setDelta] = useState(5);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });

  const reset = () => {
    setRenderBall(false);
  };
  const start = () => {
    setRenderBall(true);
  };
  const renderChoice = () => {};

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);

    // return document.removeEventListener("keydown", detectKeyDown, true);
  }, [x]);

  const detectKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setX(x - delta);
      setBallPosition({
        ...ballPosition,
        left: `${x}-${delta}px`,
      });
    } else if (e.key === "ArrowDown") {
      setY(y - delta);
      setBallPosition({
        ...ballPosition,
        top: `${y}-${delta}px`,
      });
    } else if (e.key === "ArrowUp") {
      setY(y + delta);
      setBallPosition({
        ...ballPosition,
        top: `${y}+${delta}px`,
      });
    } else if (e.key === "ArrowRight") {
      setX(x + delta);
      setBallPosition({
        ...ballPosition,
        left: `${x}+${delta}px`,
      });
    }
  };
  return (
    <div className="playground">
      {renderBall ? (
        <div
          className="ball"
          style={{ position: "absolute", top: `${y}px`, left: `${x}px` }}
        ></div>
      ) : (
        <button onClick={start} className="start">
          start
        </button>
      )}
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
