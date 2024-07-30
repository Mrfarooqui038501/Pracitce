import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent.jsx'  // here we imported the MyComponent file 
import Display from './Display.jsx'
import ConditionalRendering from './ConditionalRendering.jsx'
import FormSimple from './FormSimple.jsx'
import AdvancedFrom from './AdvancedFrom.jsx'
import Temperature from './Temperature.jsx'
import TemperatureDisplay from './TemperatureDisplay.jsx'


function App() {
   const [temperature, setTemperature] = useState('');
   const handleTemperatureChange = (newTemp) => {
      setTemperature(newTemp);
   }
   return (
    <>
       {/* <FormSimple/> */}
       {/* <AdvancedFrom/> */}
       <Temperature 
       temperature ={temperature}
       handleTemperatureChange= {handleTemperatureChange} />

       <TemperatureDisplay temperature={temperature}/>

        </>
  )

}

export default App
