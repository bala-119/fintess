// Cardio.jsx
import React from 'react';
import "./cardio.css";
import ccardio from "../image/ccardio.png";
function cardio()
{
  const workouthandle=()=>{
    window.location=ccardio;
  }
  return(
    <div className="container">
      <h1> You're in cardio </h1>
      <p> It's good the time to start</p>
      <div className="buttpn-container">
        <button className="workout-button" onClick={workouthandle}>Workout</button>
      </div>


    </div>

  )
}

export default cardio;
