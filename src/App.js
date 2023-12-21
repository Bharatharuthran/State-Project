import logo from './logo.svg';
import './App.css';
import {useState}from 'react';

function App(){
  const [value,setvalue] =useState([]);

  let handleClick =() => {
    setvalue([...value,"New Item "])

  }

  let a =[3,4,5]

  let newA =[...a,6,7,8]
  return (
    <div className="App">
      <ul>
        { 
        
          value.map((item) => <li>{item}</li>)
        }
      </ul>
     
      <button onClick={handleClick}>Click Me</button>
      
    </div>
  );
}

export default App;
