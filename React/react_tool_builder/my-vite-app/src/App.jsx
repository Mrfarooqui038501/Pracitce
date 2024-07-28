import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent.jsx'  // here we imported the MyComponent file 
import Display from './Display.jsx'
import ConditionalRendering from './ConditionalRendering.jsx'

function App() {
  const fruits = ["Apple","mango","orange","papaya"]
  const profile = {name:'Arman',profile: 'dev'}
  
  return (
    <>
      
      {/* <MyComponent message = "I am new" />  here we are calling it 
      <MyComponent message = "I am going to learn react " /> here we are calling it 
      <MyComponent message = "Hey is my changes visible" /> here we are calling it */}
      {/* <h2> Props example with arrays</h2>
      <Display fruits ={fruits} profile ={profile} /> */}
      <ConditionalRendering isloggedin ={false} usename = {'Amman'} />
      

        
    </>
  )
}

export default App
