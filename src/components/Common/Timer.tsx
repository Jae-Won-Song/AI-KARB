import { useState, useEffect } from 'react';

const Timer = () => {
  const minutesInMs = 3 * 60 * 1000;
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
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return (
    <span>
      {minutes}:{second}
    </span>
  );
};

export default Timer;
