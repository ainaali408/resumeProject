import Home from '../pages/Home';
import Skills from '../pages/skills/Skills';
import Experiences from '../pages/experiences/Experiences';
import Educations from '../pages/educations/Educations'
import Portfolios from '../pages/portfolios/Portfolios'

import {  Route, Routes } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

function Routing() {
  return (
    <>

    <Routes>
      <Route path="/skills" element={<Skills/>} />
      <Route path="/experiences" element={<Experiences/>} />
      <Route path="/educations" element={<Educations/>} />
      <Route path="/portfolios" element={<Portfolios/>} />
    </Routes>
    </>
  )
}

export default Routing