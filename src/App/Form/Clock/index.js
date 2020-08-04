import React, { useState, useEffect } from 'react';

const dateTemplate = {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};


const Clock = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            const date = new Date();
            setCurrentTime(date);
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return (
        <p>Dzisiaj jest {currentTime.toLocaleDateString(undefined, dateTemplate)}</p>
    );
};



export default Clock;