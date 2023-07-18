
import React from "react";
import './../styles/App.css';

const App = () => {

let threshold = 20;
let weatherData ={
  temperature: 25,
  condition:"sunny"
}
const temperatureColor = weatherData.temperature > threshold ? "red" : "blue" ;

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Weather app</h1>
        <p style={{color:temperatureColor}}>Temperture: { weatherData.temperature }deg</p>
        <p>Condition: { weatherData.condition}</p>
       
    </div>
  )
}

export default App
