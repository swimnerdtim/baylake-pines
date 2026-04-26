import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <Link to="/" className="logo">
              <h1>BAYLAKE PINES</h1>
              <p className="subtitle">COUNTRY CLUB</p>
            </Link>
            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/course">The Course</Link>
              <Link to="/about">About</Link>
            </nav>
          </div>
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>Baylake Pines Country Club © 2026</p>
          <p className="tagline">A Tradition Unlike Any Other</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
