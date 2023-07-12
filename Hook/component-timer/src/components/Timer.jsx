import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          return 10; // Reset the countdown to 10
        } else {
          return prevTimer - 1; // Continue counting down
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      alert("Time's up");
    }
  }, [timer]);

  return (
    <div className="timer">
      <h2>Count down from {timer}</h2>
    </div>
  );
};

export default Timer;

