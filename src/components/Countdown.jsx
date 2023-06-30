import React from "react";
import { useState, useRef, useEffect } from "react";

const Countdown = () => {
  const [days, setDays] = useState("0");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");

  let interval = useRef();

  const start = () => {
    const date = new Date('Dec 25 ,2024 ').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const remaining = date - now;

      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      if (remaining < 0) {
        clearTimeout(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  const parsing = (data)=>{
    return data <= 9 ? 0+data.toString() : data
  }

  useEffect(() => {
    start();
    return () => {
      clearInterval(interval.current);
    };
  });

  
  return (
    <div className="container-countdown">
      <div className="container-item">
        <div className="item">{parsing(days)}</div>
        <p>Days</p>
      </div>
      <div className="container-item">
        <div className="item">{parsing(hours) }</div>
        <p>Hours</p>
      </div>
      <div className="container-item">
        <div className="item">{parsing(minutes)}</div>
        <p>Minutes</p>
      </div>
      <div className={`container-item ${start() && 'flip'}`}>
        <div className="item">{parsing(seconds)}</div>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
