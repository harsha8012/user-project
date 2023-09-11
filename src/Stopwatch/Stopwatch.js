import React, { useEffect, useState } from 'react';

const Stopwatch = () => {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [recordedTimes, setRecordedTimes] = useState([]);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const reset = () => {
    setTime(0);
    setRecordedTimes([])
  } 

  const StartandStop = () => {
    setIsRunning(!isRunning)
  }

  const Recording = () => {
    if(isRunning){
      setRecordedTimes([
        ...recordedTimes,
        time
      ])
    }
  }
  
  return (
    <div className='stopwatch-container'> 
      <p className="stopwatch-time">
        {formatTime(time)}
      </p>
      <div>
        <button onClick={StartandStop}>
          {isRunning ? "stop" : "start"}
        </button>
        <button onClick={reset}>Reset</button>
        <button onClick={Recording} disabled={!isRunning}>Record</button>
      </div>
      <div>
        <h1>Recordings :</h1>
        <ul>
          {
            recordedTimes.map((record, index) =>(
              <li key={index}>
                {formatTime(record)}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
const formatTime = (timeInCentiseconds) => {
  const centiseconds = (timeInCentiseconds % 100).toString().padStart(2, '0');
  const seconds = (Math.floor(timeInCentiseconds / 100) % 60).toString().padStart(2, '0');
  const minutes = (Math.floor(timeInCentiseconds / 6000) % 60).toString().padStart(2, '0');
  const hours = Math.floor(timeInCentiseconds / 360000).toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}.${centiseconds}`;
};

export default Stopwatch;
