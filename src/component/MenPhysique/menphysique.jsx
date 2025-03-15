import React from 'react';
import './MenPhysique.css';
 // Include a CSS file for styles
import mdietplan from '../image/mdietplan.png';
import msplit from '../image/msplit.png';
import mvideo from '../video/mvideo.mp4';

function MenPhysique() {
    const handledietplan=()=>{
        window.location = mdietplan;
    };
    const handleworkoutplan=()=>{
        window.location= msplit;
    }

    return (
        <div className="container">
            <h1>Welcome to Men Physique</h1>
            <p>Your journey towards a healthier body starts here!</p>
            <div className="button-container">
                <button className="diet-button" onClick={handledietplan}>Explore Diet Plan </button>
                <button className="workout-button" onClick={handleworkoutplan}>Check Workout Plan</button>
               
            </div>
            <div className="video-container">
                <video  autoPlay loop muted  width="100px">
                    <source src={mvideo}  type='video/mp4'/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default MenPhysique;
