import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet name="Debu" heroName="Debojyoti Dutta">
        <p>This is children</p>
      </Greet>
      <Greet name="Debu" heroName="Debojyoti Dutta">
        <button>Submit</button>
      </Greet>
      <Greet name="Debu" heroName="Debojyoti Dutta">
      </Greet>
      <Welcome/>
    </div>
  );
}

export default App;
