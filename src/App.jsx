import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Course from './pages/Course'
import Lake from './pages/Lake'
import Beach from './pages/Beach'
import Fourth from './pages/Fourth'
import About from './pages/About'
import HoleDetail from './pages/HoleDetail'
import './App.css'

function AppContent() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <div className="app">
      {!isLanding && (
        <header className="header">
          <div className="header-content">
            <Link to="/" className="logo">
              <h1>BAYLAKE PINES</h1>
              <p className="subtitle">COUNTRY CLUB</p>
            </Link>
            <nav className="nav">
              <Link to="/home">Home</Link>
              <Link to="/lake">The Lake</Link>
              <Link to="/beach">The Beach</Link>
              <Link to="/course">The Course</Link>
              <Link to="/fourth">4th of July</Link>
              <Link to="/about">About</Link>
            </nav>
          </div>
        </header>
      )}

      <main className={isLanding ? "main-landing" : "main"}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lake" element={<Lake />} />
          <Route path="/beach" element={<Beach />} />
          <Route path="/course" element={<Course />} />
          <Route path="/fourth" element={<Fourth />} />
          <Route path="/hole/:holeNumber" element={<HoleDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {!isLanding && (
        <footer className="footer">
          <p>Baylake Pines Country Club © 2026</p>
          <p className="tagline">POWERED BY THE #1 NEIGHBORHOOD IN VIRGINIA BEACH</p>
        </footer>
      )}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
