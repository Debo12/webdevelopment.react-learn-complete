import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter';
import PropDestructuring from './components/PropDestructuring'

function App() {
  return (
    <div className="App">
      <PropDestructuring name="Debo" heroName="Debojyoti Dutta" />
    </div>
  );
}

export default App;
