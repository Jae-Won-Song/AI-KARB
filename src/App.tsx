import { useState } from 'react';
import './App.css';
import './styles/main.scss';
import Spinner from './components/Spinner';

const App = () => {
  const [count, setCount] = useState(0);

  return <Spinner />;
};

export default App;
