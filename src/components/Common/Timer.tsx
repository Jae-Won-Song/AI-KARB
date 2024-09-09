import { useState, useEffect, ReactNode } from 'react';

type TimerProps = {
  onTimeUp?: () => void;
};

const Timer = ({ onTimeUp }: TimerProps): ReactNode => {
  const minutesInMs = 0.5 * 60 * 1000;
  const interval = 1000;
  const [timeLeft, setTimeLeft] = useState(minutesInMs);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - interval);
    }, interval);

    if (timeLeft <= 0) {
      clearInterval(timer);
      if (onTimeUp) {
        onTimeUp();
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, onTimeUp]);

  return (
    <span>
      {minutes}:{second}
    </span>
  );
};

export default Timer;
