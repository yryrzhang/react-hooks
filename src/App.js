import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import IndexRoute from './router/router';

function App() {
  return (
    <BrowserRouter>
      <IndexRoute/>
    </BrowserRouter>
  );
}

export default App;
