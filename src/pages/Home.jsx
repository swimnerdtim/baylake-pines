import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Baylake Pines</h1>
        <p className="hero-subtitle">The Greatest Neighborhood in the World</p>
      </div>

      <div className="intro-section">
        <h2>A Community Like No Other</h2>
        <p>
          Nestled in Virginia Beach, Baylake Pines is more than a neighborhood—it's
          a way of life. From the pristine private lake to our sandy beach, from
          legendary Fourth of July celebrations to our one-of-a-kind disc golf course,
          this is where memories are made and traditions run deep.
        </p>
        <p>
          Whether you're a resident or a visitor, you'll quickly understand why those
          who live here know they've found something special.
        </p>
      </div>

      <div className="features-grid">
        <Link to="/lake" className="feature-card">
          <h3>The Lake</h3>
          <p>Crystal clear waters, private beaches, and endless summer days</p>
        </Link>
        <Link to="/beach" className="feature-card">
          <h3>The Beach</h3>
          <p>Our own slice of paradise, right in the neighborhood</p>
        </Link>
        <Link to="/course" className="feature-card">
          <h3>The Course</h3>
          <p>A 9-hole disc golf tradition unlike any other</p>
        </Link>
        <Link to="/fourth" className="feature-card">
          <h3>4th of July</h3>
          <p>Where patriotism meets neighborhood pride</p>
        </Link>
      </div>
    </div>
  )
}

export default Home
