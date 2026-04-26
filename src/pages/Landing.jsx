import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const images = [
  '/baylake-pines/aerial.jpg',
  '/baylake-pines/aerial2.jpg',
  '/baylake-pines/aerial3.jpg',
  '/baylake-pines/aerial4.jpg'
]

function Landing() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="landing">
      {images.map((image, index) => (
        <div
          key={image}
          className={`landing-bg ${index === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="landing-overlay">
        <h1 className="landing-title">BAYLAKE PINES</h1>
        <p className="landing-subtitle">COUNTRY CLUB</p>
        <Link to="/home" className="welcome-button">
          WELCOME
        </Link>
      </div>
    </div>
  )
}

export default Landing
