import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './component/Main'; // Import the Main component
import MensPhysique from './component/MenPhysique/menphysique'; // Import the MensPhysique component
import Cardio from './component/Cardio/cardio';
import Flexibility from './component/Flexibility/flexibility';
import Speed from './component/Speed/speed';
import Explore from './component/Explore';
import Contact from './component/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} /> {/* Main page */}
        <Route path="/menphysique" element={<MensPhysique />} /> {/* Mens Physique page */}
        <Route path="/cardio" element={<Cardio />} /> {/* Cardio page */}
        <Route path="/flexibility" element={< Flexibility />} /> {/*flexibility page */}
        <Route path="/speed" element={<Speed />} /> {/* speed page */}
        <Route path="/Explore" element={<Explore />} /> {/* Explore page */}
        <Route path="/Contact" element={<Contact />} /> {/* Contact page */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
