import React from 'react';
import BreakControl from './components/BreakControl';
import SessionControl from './components/SessionControl';
import TimerDisplay from './components/TimerDisplay';
import Controls from './components/Controls';
import './App.css';

function App() {

  return (
    <div className='App'>
      <div className="top-controls">
        <BreakControl />
        <SessionControl />
      </div>
      <div className="timer-display-container">
        <TimerDisplay />
      </div>
      <div className="controls-container">
        <Controls />
      </div>
    </div>
  );
}

export default App;
