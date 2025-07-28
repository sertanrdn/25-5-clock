import React from 'react';
import './SessionControl.css';

function SessionControl({ sessionLength, onIncrement, onDecrement }) {
  return (
    <div>
      <h2 id="session-label">Session Length</h2>
      <button id="session-decrement" onClick={onDecrement}>-</button>
      <span id="session-length">{sessionLength}</span>
      <button id="session-increment" onClick={onIncrement}>+</button>
    </div>
  );
}

export default SessionControl;