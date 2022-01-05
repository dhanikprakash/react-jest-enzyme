
import './App.css';
import { useState } from "react";
import { Button } from 'react-bootstrap'


function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header>
        <h2>Counter App</h2>
     
      </header>
      <div>
      <Button id="increment-button" onClick={()=> setCounter(counter+1)}>Increment</Button>&nbsp;&nbsp;
      <Button id="decrement-button" onClick={()=> setCounter(counter-1)}>Decrement</Button>
      </div>
      <br/>
      <div id="counter">
       <b>{counter}</b>
      </div>
    </div>
  );
}

export default App;
