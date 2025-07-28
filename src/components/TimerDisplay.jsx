import React, { useContext } from "react";
import { TimerContext } from "../context/TimerContext";
// import './TimerDisplay.css';

const TimerDisplay = () => {
    const { mode, timeLeft } = useContext(TimerContext);
    return (
        <div>
            <h2 id="timer-label">{mode}</h2>
            <div id="time-left">{timeLeft}</div>
            <audio id="beep" src="/beep.mp3" />
        </div>
    );
}

export default TimerDisplay;