import React from "react";
import "./Main.css";
import { Link } from 'react-router-dom'; // For navigation
import bgimage from  './image/bgimage.png'; // Adjust the path to the correct folder
import mensphysique from './image/mp.png'; // Import the new image
import cardio from './image/cardio.png'
import cardioVideo from './video/cardio.mp4';
import flexibility from './image/flexibility.png';
import speed from './image/speed.png';

const Main = () => {
    return (
        <div>
            <section id="navigation">
                <nav className="nav bg-white d-flex justify-content-end p-2 sticky-top navbar-separator mb-4">
                    <a href="/Explore" className="text-dark nav-link ms-5">Explore</a>
                    <a href="/contact" className="text-dark nav-link ms-5">Contact</a>
                  
                </nav>
            </section>

            <section
        id="cont-bg"
        style={{
          position: 'relative',
          height: '100vh', // Make sure the section covers the full viewport height
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Ensure the video covers the whole section
            zIndex: '-1', // Send the video behind the content
          }}
        >
          <source src={cardioVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </section>
            <section 
        id="mens-physique-image" 
        style={{
          position: 'absolute',   // Makes it out of the normal flow so we can position it specifically
          left: '20%',  // Adjust this to place the image on the left side
          top: '40%',  // Vertically center it (you can adjust this value)
          transform: 'translateY(-50%)',  // Adjust for true centering (optional)
          zIndex: '1',  // Ensure image appears above background if needed
        }}
      >
                <Link to="/menphysique">  {/* Wrapping the image with the Link */}
                    <img 
                        src={mensphysique} 
                        alt="Mens Physique" 
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', cursor: 'pointer' }} 
                    />
                </Link>
            </section>
             {/* cardio session */}
            <section 
        id="cardio-image" 
        style={{
          position: 'absolute',   // Makes it out of the normal flow so we can position it specifically
          right: '20%',  // Adjust this to place the image on the left side
          top: '40%',  // Vertically center it (you can adjust this value)
          transform: 'translateY(-50%)',  // Adjust for true centering (optional)
          zIndex: '1',  // Ensure image appears above background if needed
        }}
      >
               <Link to="/cardio">  
                    <img 
                        src={cardio} 
                        alt="Cardio" 
                        style={{ 
                            maxWidth: '150px',  // Set the same maxWidth for cardio image to match mensphysique
                            height: 'auto', 
                            borderRadius: '10px', 
                            cursor: 'pointer' 
                        }} 
                    />
                </Link>
            </section>

            <section id="flexibility-page"
            style={{
              position:'absolute' ,
              right:"20%",
              top:"80%",
              transform:'translateY(-50%)',
              zIndex:"1",

            }}
            >
              <Link to="/flexibility">
                <img src={flexibility}
                alt="flexibility"
                style={{
                  maxWidth: '150px',  // Set the same maxWidth for cardio image to match mensphysique
                  height: 'auto', 
                  borderRadius: '10px', 
                  cursor: 'pointer' 

                }}/>
                </Link>
             
              </section>
              <section
               id="speed-page"
                style={{
                  position:'absolute',
                  left:"20%",
                  top:"80%",
                  transform:'translateY(-50%)',
                  zIndex:"1",

                }}
                >
                  <Link to="/speed">
                  <img src={speed}
                  alt="speed"
                  style={{
                  maxWidth: '150px',  // Set the same maxWidth for cardio image to match mensphysique
                  height: 'auto', 
                  borderRadius: '10px', 
                  cursor: 'pointer' 
                }}/>
                  </Link>

               </section>
                </div>
           
       
    );
};

export default Main;
