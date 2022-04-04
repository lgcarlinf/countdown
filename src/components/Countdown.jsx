import React from "react";
import { useState, useRef, useEffect } from "react";

const Countdown = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const start = () => {
    const date = new Date('Apr 20 ,2022 ').getTime();

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