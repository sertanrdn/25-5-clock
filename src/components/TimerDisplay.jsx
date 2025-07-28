import React, { useContext } from "react";
import { TimerContext } from "../context/TimerContext.jsx";
// import './TimerDisplay.css';

const TimerDisplay = () => {
    const { mode, timeLeft } = useContext(TimerContext);
    return (
        <div>
            <h2 id="timer-label">{mode}</h2>
            <div id="time-left">{timeLeft}</div>
            <audio
                id="beep"
                preload="auto"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
            />
        </div>
    );
}

export default TimerDisplay;