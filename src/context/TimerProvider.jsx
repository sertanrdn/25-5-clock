import React, { useEffect, useState, useRef } from "react";
import { TimerContext } from "./TimerContext";

export const TimerProvider = ({ children }) => {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [mode, setMode] = useState('Session');
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    // Transition between Session and Break
    useEffect(() => {
        if (!isRunning) return;

        intervalRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev === 0) {
                    const beep = document.getElementById("beep");
                    if (beep) beep.play();
    
                    if (mode === 'Session') {
                        setMode('Break');
                        return breakLength * 60;
                    } else {
                        setMode('Session');
                        return sessionLength * 60;
                    }
                }
                return prev - 1;
            });
        }, 1000);
    
        return () => clearInterval(intervalRef.current);
    }, [isRunning, breakLength, sessionLength, mode]);

    // Format time as MM:SS
    const formatTime = (time) => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    // Handle resetting
    const handleReset = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setBreakLength(5);
        setSessionLength(25);
        setTimeLeft(25 * 60);
        setMode('Session');
        const beep = document.getElementById('beep');
        if (beep) {
            beep.pause();
            beep.currentTime = 0;
        }
    }

    // Start/Stop handler
    const handleStartStop = () => {
        setIsRunning(prev => !prev);
    }

    // Increment/Decrement
    const incrementBreak = () => {
        if (breakLength < 60) setBreakLength(prev => prev + 1);
    }

    const decrementBreak = () => {
        if (breakLength > 1) setBreakLength(prev => prev - 1);
    }

    const incrementSession = () => {
        if (sessionLength < 60) {
            setSessionLength(prev => prev + 1);
            if (!isRunning && mode === 'Session') setTimeLeft((sessionLength + 1) * 60);
        }
    }

    const decrementSession = () => {
        if (sessionLength > 1) {
            setSessionLength(prev => prev - 1);
            if (!isRunning && mode === 'Session') setTimeLeft((sessionLength - 1) * 60);
        }
    }

    return (
        <TimerContext.Provider value={{
            breakLength, sessionLength, timeLeft: formatTime(timeLeft), 
            mode, isRunning, incrementBreak, decrementBreak,
            incrementSession, decrementSession, handleStartStop, handleReset
        }}>
            {children}
        </TimerContext.Provider>
    );
}