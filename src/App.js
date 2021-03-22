import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  
  let tab =['a','b','c','d']
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello react</p>
        <p>count</p>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>click me icrease</button>
        <button onClick={() => setCounter(counter - 1)}>click me decrease</button>
        <p>alphabet</p>
        <p>{tab[counter2]}</p>
        <p>{counter2}</p>
        <button onClick={() => tab[setCounter2((counter2 + 1)%4)]}>click me icrease</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
