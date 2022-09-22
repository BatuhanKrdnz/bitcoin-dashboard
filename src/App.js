import './App.css';
import React, { useEffect, useRef, useState} from 'react';
import Clock from './Components/Clock';
import Bitcoin from './Components/Bitcoin';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("May 30,2021 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      let distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        ((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);


      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });

 

  return (
    <div className="App">
      <Clock
      timerHours={timerHours}
      timerMinutes={timerMinutes}
      timerSeconds={timerSeconds}
      />

      <Bitcoin/>
    </div>
  );
}

export default App;
