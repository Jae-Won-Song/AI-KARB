import { useState } from 'react';
import './App.css';
import './styles/main.scss';
import Pagination from './components/Pagination';

const App = () => {
  const [count, setCount] = useState(0);

  return <Pagination />;
};

export default App;
