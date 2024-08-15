import './App.css';
import './styles/main.scss';
import Button from './components/Button';

const App = () => {
  return (
    <div className="button__wrapper">
      <Button state="default" type="button">
        Button
      </Button>
      <Button state="disabled" type="button">
        Button
      </Button>
      <Button state="default_white" type="button">
        Button
      </Button>
      <Button state="default_gray" type="button">
        Button
      </Button>
    </div>
  );
};

export default App;
