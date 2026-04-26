import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Course from './pages/Course'
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
              <Link to="/course">The Course</Link>
              <Link to="/about">About</Link>
            </nav>
          </div>
        </header>
      )}

      <main className={isLanding ? "main-landing" : "main"}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/hole/:holeNumber" element={<HoleDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {!isLanding && (
        <footer className="footer">
          <p>Baylake Pines Country Club © 2026</p>
          <p className="tagline">A Tradition Unlike Any Other</p>
        </footer>
      )}
    </div>
  )
}

function App() {
  return (
    <Router basename="/baylake-pines">
      <AppContent />
    </Router>
  )
}

export default App
