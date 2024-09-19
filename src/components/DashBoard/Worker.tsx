import { useState, useEffect } from 'react';

const Worker = () => {
  const [workerName, setWorkerName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setWorkerName(storedName);
    } else {
      setWorkerName('작업자');
    }
  }, []);

  return (
    <section className="work-wrapper">
      <div className="work-wrapper__main">
        안녕하세요,
        <div className="work-wrapper__name">{workerName} 작업자님</div>
      </div>
    </section>
  );
};

export default Worker;
