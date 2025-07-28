import React, { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';
// import './Controls.css';

const Controls = () => {
  const { handleStartStop, handleReset } = useContext(TimerContext);
  return (
    <div>
      <button id="start_stop" onClick={handleStartStop}>Start/Stop</button>
      <button id="reset" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Controls;
