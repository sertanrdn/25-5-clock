import React, { useContext } from "react";
import { TimerContext } from "../context/TimerContext.jsx";
import '../styles/TimerDisplay.css';

const TimerDisplay = () => {
    const { mode, timeLeft } = useContext(TimerContext);
    return (
        <div className="timer">
            <div className="timer-wrapper">
                <h2 id="timer-label">{mode}</h2>
                <div id="time-left">{timeLeft}</div>
                <audio
                    id="beep"
                    preload="auto"
                    src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
                />
            </div>
        </div>
    );
}

export default TimerDisplay;