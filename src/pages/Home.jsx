import { Link } from 'react-router-dom'
import courseData from '../data/course.json'
import './Home.css'

function Home() {
  const activeHoles = courseData.holes.filter(h => h.status === 'active').length
  const totalPar = courseData.holes
    .filter(h => h.par !== null)
    .reduce((sum, h) => sum + h.par, 0)

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Baylake Pines</h1>
        <p className="hero-subtitle">A Neighborhood Disc Golf Tradition</p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">{activeHoles}</span>
            <span className="stat-label">Holes Open</span>
          </div>
          <div className="stat">
            <span className="stat-number">9</span>
            <span className="stat-label">Total Holes</span>
          </div>
          <div className="stat">
            <span className="stat-number">Par {totalPar || '?'}</span>
            <span className="stat-label">Current Par</span>
          </div>
        </div>
      </div>

      <div className="intro-section">
        <h2>The Course</h2>
        <p>
          Baylake Pines Country Club is a neighborhood disc golf course where
          residents have opened their front yards to create a unique 9-hole layout.
          Each hole offers its own challenge, from tight approaches to open drives.
        </p>
        <p>
          The course is currently under development, with new holes being added
          as more baskets are installed throughout the neighborhood.
        </p>
        <Link to="/course" className="cta-button">
          View Course Details →
        </Link>
      </div>

      <div className="featured-hole">
        <h2>Featured Hole</h2>
        <div className="hole-showcase">
          <div className="hole-number">Hole 1</div>
          <div className="hole-details">
            <h3>2309 Trelawney Road</h3>
            <div className="hole-stats">
              <span className="distance">65 feet</span>
              <span className="par">Par 2</span>
            </div>
            <p className="hole-description">
              The opening hole at Baylake Pines. A short approach shot to get you started.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
