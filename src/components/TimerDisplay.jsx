import React from "react";
// import './TimerDisplay.css';

const TimerDisplay = ({ timerLabel, timeLeft }) => {
    return (
        <div>
            <h2 id="timer-label">{timerLabel}</h2>
            <div id="time-left">{timeLeft}</div>
            <audio id="beep" src="/beep.mp3" />
        </div>
    );
}

export default TimerDisplay;