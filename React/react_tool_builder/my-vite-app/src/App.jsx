import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent.jsx'  // here we imported the MyComponent file 
import Display from './Display.jsx'
import ConditionalRendering from './ConditionalRendering.jsx'


function App() {
  /*      Counter app 
 //   const fruits = ["Apple","mango","orange","papaya"]
 //   const profile = {name:'Arman',profile: 'dev'}

  // we add counter app decremetn and increment button 
  // and below we are setting button name counter and we are using useState 
  let [counter, setCounter]  = useState(0); "setCounter" here we use "set" with "counter"  because we have set the variable first
  //here this function is handling the decrement of count
  const handleIncrement = () =>{   
    setCounter(counter +1);
  }
  // here this function is handling the decrement of count 
  const handleDecrement = () =>{  
    setCounter(counter - 1);
  }*/
 
     
  return (
    <>
      
      {/* <MyComponent message = "I am new" />  here we are calling it 
      <MyComponent message = "I am going to learn react " /> here we are calling it 
      <MyComponent message = "Hey is my changes visible" /> here we are calling it */}
      {/* <h2> Props example with arrays</h2>
      <Display fruits ={fruits} profile ={profile} /> */}
      {/* <ConditionalRendering isloggedin ={false} usename = {'Amman'} /> */}
      {/* <Button text='props clicked' handleClick={handleClick} /> */}

      {/* <h1>Counter app.</h1>  here we give it a name counter app  */}
      {/* <p>Count: {counter}</p>   and this will show the count as we using count variable here */}
      {/* <button onClick={handleIncrement}>Increment</button> // here we made this increment button and using function on clik to increment  */}
      {/* <button onClick={handleDecrement} >Decrement</button> // here we made this increment button and using function on clik to Decrement */}
      
        
    </>
  )

}

export default App
