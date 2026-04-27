import { Link } from 'react-router-dom'
import courseData from '../data/course.json'
import './Course.css'

function Course() {
  const activeHoles = courseData.holes.filter(h => h.status === 'active')
  const comingSoon = courseData.holes.filter(h => h.status === 'coming_soon')
  const totalPar = activeHoles.reduce((sum, h) => sum + h.par, 0)
  const totalDistance = activeHoles.reduce((sum, h) => sum + h.distance, 0)

  return (
    <div className="course">
      <div className="course-header">
        <h1>Welcome to Baylake Pines</h1>
        <p className="course-subtitle">A Neighborhood Disc Golf Tradition</p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">{activeHoles.length}</span>
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
      </div>

      <div className="holes-grid">
        {courseData.holes.map(hole => (
          <Link
            key={hole.number}
            to={hole.status === 'active' ? `/hole/${hole.number}` : '#'}
            className={`hole-card ${hole.status === 'coming_soon' ? 'coming-soon' : ''}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="hole-header">
              <span className="hole-number-badge">Hole {hole.number}</span>
              {hole.status === 'coming_soon' && (
                <span className="status-badge">Coming Soon</span>
              )}
            </div>
            
            {hole.status === 'active' ? (
              <>
                {hole.image && (
                  <img 
                    src={`/${hole.image}`} 
                    alt={`Hole ${hole.number}`} 
                    className="hole-image"
                  />
                )}
                <h3 className="hole-address">{hole.address}</h3>
                {hole.homeowner && (
                  <p className="homeowner">Hosted by: {hole.homeowner}</p>
                )}
                <div className="hole-stats-grid">
                  <div className="stat-item">
                    <span className="stat-label">Distance</span>
                    <span className="stat-value">{hole.distance} ft</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Par</span>
                    <span className="stat-value">{hole.par}</span>
                  </div>
                </div>
                <p className="hole-description">{hole.description}</p>
              </>
            ) : (
              <div className="coming-soon-content">
                <p className="coming-soon-text">Course expansion in progress</p>
              </div>
            )}
          </Link>
        ))}
      </div>


    </div>
  )
}

export default Course
