import React, { useContext } from "react";
import { TimerContext } from '../context/TimerContext.jsx'; 
// import './BreakControl.css';

const BreakControl = () => {
    const { breakLength, incrementBreak, decrementBreak } = useContext(TimerContext);

    return (
        <div>
            <h2 id="break-label">Break Length</h2>
            <button id="break-decrement" onClick={decrementBreak}>-</button>
            <span id="break-length">{breakLength}</span>
            <button id="break-increment" onClick={incrementBreak}>+</button>
        </div>
    );
}

export default BreakControl;