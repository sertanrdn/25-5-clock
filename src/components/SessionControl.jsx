import React, { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';
// import './SessionControl.css';

const SessionControl = () => {
  const { sessionLength, incrementSession, decrementSession } = useContext(TimerContext);

  return (
    <div>
      <h2 id="session-label">Session Length</h2>
      <button id="session-decrement" onClick={decrementSession}>-</button>
      <span id="session-length">{sessionLength}</span>
      <button id="session-increment" onClick={incrementSession}>+</button>
    </div>
  );
}

export default SessionControl;