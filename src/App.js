import logo from './logo.svg';
import './App.css';

import ButtonPanel from './Components/ButtonPanel';
import Display from './Components/Display';
import Calculate from './Logic/Calculate';
import { useState } from 'react';

function App() {

  const [calState,setCalState] = useState({
    sign:"",
    num1:"",
    num2:"",
    total:""
  });

  const [result,setResult] = useState("")
  let displayValue = 0;

  const clearClickHandler =(e) => {
    if(e.target.value === "AC"){
      setResult(Calculate(e.target.value,result))
    }else if(e.target.value === "C"){
      setResult(Calculate(e.target.value,result))
    }
  }
  
  const handleClick = (e) =>{
    // e.preventDefault();
    if(e.target.value === "="){
      setResult(Calculate(e.target.value,result))
    }else{
      setResult(result.toString().concat(e.target.value))
    }

    
  }
  displayValue = result


  return (
    <div className="App">
      <header className="App-header">
        Calculator
      </header>
      <div className='App-component'>
        <Display value={displayValue==0 ? 0 : displayValue} />
        <ButtonPanel clickHandler={handleClick} clearClickHandler={clearClickHandler} />
      </div>
    </div>
  );
}

export default App;

