import React from 'react';
import './Controls.css';

function Controls({ onStartStop, onReset }) {
  return (
    <div>
      <button id="start_stop" onClick={onStartStop}>Start/Stop</button>
      <button id="reset" onClick={onReset}>Reset</button>
    </div>
  );
}

export default Controls;
