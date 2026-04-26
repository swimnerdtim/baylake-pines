import { Link } from 'react-router-dom'
import courseData from '../data/course.json'
import './Course.css'

function Course() {
  const activeHoles = courseData.holes.filter(h => h.status === 'active')
  const comingSoon = courseData.holes.filter(h => h.status === 'coming_soon')

  return (
    <div className="course">
      <div className="course-header">
        <h1>The Course</h1>
        <p className="course-subtitle">
          {courseData.courseName} • {activeHoles.length} of 9 Holes Open
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
                    src={`/baylake-pines/${hole.image}`} 
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

      <div className="course-summary">
        <h2>Course Stats</h2>
        <div className="summary-grid">
          <div className="summary-item">
            <span className="summary-label">Total Holes</span>
            <span className="summary-value">9</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Holes Open</span>
            <span className="summary-value">{activeHoles.length}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Total Par</span>
            <span className="summary-value">
              {activeHoles.reduce((sum, h) => sum + h.par, 0) || 'TBD'}
            </span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Total Distance</span>
            <span className="summary-value">
              {activeHoles.reduce((sum, h) => sum + h.distance, 0) || 0} ft
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course
