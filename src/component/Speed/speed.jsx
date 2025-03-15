import React from "react";
import sspeed1 from '../image/sspeed1.png';
import sspeed2 from '../image/sspeed2.png';

function speed()
{
    const handledietplan=()=>{
           window.location = sspeed1;
       };
       const handleworkoutplan=()=>{
           window.location= sspeed2;
       }
   
       return (
           <div className="container">
               <h1>Speed workout start here</h1>
               <p>Your journey towards boost your speed starts here!</p>
               <div className="button-container">
                   <button className="diet-button" onClick={handledietplan}>workout plan 1 </button>
                   <button className="workout-button" onClick={handleworkoutplan}>Workout Plan 2</button>
                  
               </div>
              
           </div>
       );
   }
   
export default speed;