import './styles.css';
import LOGO from './react-logo.png';

const App = () => {
  return (
    <>
      <h1>
        hello from app - {process.env.NODE_ENV} - {process.env.name}{' '}
      </h1>
      <img src={LOGO} alt='react logo' width='300' height='300' />
    </>
  );
};

export default App;
