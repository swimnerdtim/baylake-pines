import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
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
