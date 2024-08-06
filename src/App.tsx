import './App.css';
import './styles/main.scss';
import Button from './components/Button';

const App = () => {
  return (
    <div className="button__wrapper">
      <Button type="button" size="medium" color="">
        midium
      </Button>
      <Button type="button" size="large" color="">
        large
      </Button>
      <Button type="button" size="small" color="">
        small
      </Button>
    </div>
  );
};

export default App;
