// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import User from './User';


function App() {
let HandleClick = () => {
    alert("Button Clicked");
  }
let Add5 = (num) =>{
  alert(num + 5);
}  
  return (
    <>
      <User></User>
      <h1>React Core Concept</h1>
      <button onClick={HandleClick}>Click Me!</button>
      <button onClick={()=> Add5(4)}>AddTo5</button>
      <Counter></Counter>
      
    </>
  )
}

export default App
