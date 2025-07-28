import React, { useContext } from 'react';
import { TimerContext } from '../context/TimerContext.jsx';
import '../styles/SessionControl.css';

const SessionControl = () => {
  const { sessionLength, incrementSession, decrementSession } = useContext(TimerContext);

  return (
    <div className='session-control'>
      <h2 id="session-label">Session Length</h2>
      <div className='controls'>
        <button id="session-decrement" onClick={decrementSession}>-</button>
        <span id="session-length">{sessionLength}</span>
        <button id="session-increment" onClick={incrementSession}>+</button>
      </div>
    </div>
  );
}

export default SessionControl;