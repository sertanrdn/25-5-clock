import React from "react";
// import './BreakControl.css';

const BreakControl = ({ breakLength, onIncrement, onDecrement }) => {
    return (
        <div>
            <h2 id="break-label">Break Length</h2>
            <button id="break-decrement" onClick={onDecrement}>-</button>
            <span id="break-length">{breakLength}</span>
            <button id="break-increment" onClick={onIncrement}>+</button>
        </div>
    );
}

export default BreakControl;