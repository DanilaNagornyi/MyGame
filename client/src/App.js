import logo from './logo.svg';
import './App.css';
import Themes from './components/Themes&Quest/Themes&Quest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Themes />
      </header>
    </div>
  );
}

export default App;
