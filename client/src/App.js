// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <Router>
    {/* // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    // </div> */}
        <Navbar />
        </Router>
  );
}

export default App;
