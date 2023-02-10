import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Projects from './routes/Projects';
import Home from "./routes/Home";
import AboutMe from './routes/AboutMe';

/**
 * imagens
https://images.pexels.com/photos/13640959/pexels-photo-13640959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
https://images.pexels.com/photos/2395251/pexels-photo-2395251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
*/

function App() {
  return (
    <div className='
    bg-background-light text-dark-blue
    dark:bg-background-dark dark:text-background-light 
    
    '>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        {/* <Route path="" element={<Container />} />
        <Route path="/" element={<Container />} />
        <Route path="/" element={<Container />} />
        <Route path="/" element={<Container />} /> */}
      </Routes>

    </div>
  );
}

export default App;
