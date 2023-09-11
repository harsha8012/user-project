import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState('');
  const [timeRemaining, setTimeRemaining] = useState({});
  const [timerID, setTimerID] = useState(null);

  useEffect(() => {
    if (targetDate === '') return;
    
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();

      const timeDiff = target - now;

      if (timeDiff <= 0) {
        // If the target date has passed, stop the countdown
        clearInterval(timerID);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    };

    // Call the calculateTimeRemaining function initially
    calculateTimeRemaining();

    // Set up an interval to update the countdown
    const intervalID = setInterval(calculateTimeRemaining, 1000);

    // Save the interval ID to state so we can clear it later
    setTimerID(intervalID);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalID);
  }, [targetDate, timerID]);

  const handleDateChange = (event) => {
    setTargetDate(event.target.value);
  };

  return (
    <div>
      <h1 className='gradient-text'>Countdown Timer</h1>
      <p>Enter a target date and time:</p>
      <input type="datetime-local" value={targetDate} onChange={handleDateChange} />
      <div>
        <p>Time Remaining:</p>
        <p>
          {timeRemaining.days} days, {timeRemaining.hours} hours, {timeRemaining.minutes} minutes,{' '}
          {timeRemaining.seconds} seconds
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
