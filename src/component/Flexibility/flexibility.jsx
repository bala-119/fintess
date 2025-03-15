import React from 'react';
import fflex from '../image/fflex.png';

function flexibility()
{
    
      
       const handleworkoutplan=()=>{
           window.location= fflex;
       }
   
       return (
           <div className="container">
               <h1>Flexibility training start here</h1>
               <p>Your journey towards boost your flexibility starts here!</p>
               <div className="button-container">
                   
                   <button className="workout-button" onClick={handleworkoutplan}>plan</button>
                  
               </div>
              
           </div>
       );
   }
export default flexibility;