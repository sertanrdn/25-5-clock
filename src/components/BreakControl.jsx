import React, { useContext } from "react";
import { TimerContext } from '../context/TimerContext.jsx'; 
import '../styles/BreakControl.css';

const BreakControl = () => {
    const { breakLength, incrementBreak, decrementBreak } = useContext(TimerContext);

    return (
        <div className="break-control">
            <h2 id="break-label">Break Length</h2>
            <div className="controls">
                <button id="break-decrement" onClick={decrementBreak}>-</button>
                <span id="break-length">{breakLength}</span>
                <button id="break-increment" onClick={incrementBreak}>+</button>
            </div>
        </div>
    );
}

export default BreakControl;