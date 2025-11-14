import React from 'react'
import Header from './component/Header.jsx'
import { Route, Router, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs.jsx'
import GreenLouts from './pages/GreenLouts.jsx'
import Careers from './pages/Careers.jsx'
import Hero from './pages/Hero.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import WorkFolio from './pages/WorkFolio.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/header" element={<Header />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/work" element={<WorkFolio />} />
      <Route path="/green" element={<GreenLouts />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<WorkFolio />} />
    </Routes>
  )
}

export default App