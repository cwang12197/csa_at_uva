import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import './App.css';
import ThisWeekInCSA from '../ThisWeekInCSA/ThisWeekInCSA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
        <ThisWeekInCSA />
      </header>
    </div>
  );
}

export default App;
