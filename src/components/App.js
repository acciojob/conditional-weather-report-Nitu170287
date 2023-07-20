
import React from "react";
import './../styles/App.css';

const App = () => {

let threshold = 20;
let weatherData ={
  temperature: 25,
  Conditions: "Sunny"
}
const temperatureColor = weatherData.temperature > threshold ? "red" : "blue" ;

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Weather app</h1>
        <p >Temperature: <span style={{color:temperatureColor}}>{weatherData.temperature}</span></p>
        <p>Condition: { weatherData.Conditions}</p>
       
    </div>
  )
}

export default App
