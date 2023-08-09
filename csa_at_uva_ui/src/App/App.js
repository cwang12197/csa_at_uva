import { Route, Router, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Events from '../Events/Events';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/events" element = {<Events />} />
          </Routes>
      </header>
    </div>
  );
}

export default App;
