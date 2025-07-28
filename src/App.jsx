import React from 'react';
import BreakControl from './components/BreakControl';
import SessionControl from './components/SessionControl';
import TimerDisplay from './components/TimerDisplay';
import Controls from './components/Controls';
import './App.css';

function App() {

  return (
    <div className='App'>
      <BreakControl />
      <SessionControl />
      <TimerDisplay />
      <Controls />
    </div>
  );
}

export default App;
