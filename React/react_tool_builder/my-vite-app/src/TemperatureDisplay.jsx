import React,{useState} from "react";

const TemperatureDisplay = (props) => {
    const { temperature } = props; // Destructure temperature prop
    const fahrenheit = (temperature * 9/5) + 32;
    return (
      <div>
        <p>Temperature in Celsius:{temperature} </p>
        <p>Temperature in Farhenheit:{fahrenheit} </p>
      </div>
    );
  }
  

export default TemperatureDisplay;