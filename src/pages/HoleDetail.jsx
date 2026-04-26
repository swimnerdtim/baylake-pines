import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import courseData from '../data/course.json'
import './HoleDetail.css'

function HoleDetail() {
  const { holeNumber } = useParams()
  const hole = courseData.holes.find(h => h.number === parseInt(holeNumber))
  const [currentPhoto, setCurrentPhoto] = useState(0)

  if (!hole) {
    return <div className="hole-detail"><p>Hole not found</p></div>
  }

  if (hole.status === 'coming_soon') {
    return (
      <div className="hole-detail">
        <div className="coming-soon-detail">
          <h1>Hole {hole.number}</h1>
          <p>Coming Soon</p>
          <Link to="/course" className="back-link">← Back to Course</Link>
        </div>
      </div>
    )
  }

  const photos = hole.photos || []
  const hasPhotos = photos.length > 0

  return (
    <div className="hole-detail">
      <Link to="/course" className="back-link">← Back to Course</Link>
      
      {/* Hole Title */}
      <div className="hole-title-section">
        <span className="hole-number-label">Hole {hole.number}</span>
        <h1 className="hole-title">{hole.name || hole.address}</h1>
      </div>

      {/* Hero Image */}
      {hasPhotos && (
        <div className="hole-hero">
          <img src={`/baylake-pines/${photos[currentPhoto]}`} alt={hole.name || `Hole ${hole.number}`} />
        </div>
      )}

      {/* Stats Grid */}
      <div className="hole-stats-section">
        <div className="stat-box">
          <div className="stat-label">Par</div>
          <div className="stat-value">{hole.par}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Yards</div>
          <div className="stat-value">{Math.round(hole.distance / 3)}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Feet</div>
          <div className="stat-value">{hole.distance}</div>
        </div>
      </div>

      {/* Story Section */}
      {hole.story && (
        <div className="hole-story">
          <div className="story-icon">"</div>
          <p className="story-text">{hole.story}</p>
        </div>
      )}

      {/* Behind the Name */}
      {hole.name && (
        <div className="behind-the-name">
          <h2>Behind The Name</h2>
          <h3>{hole.name}</h3>
          <p>{hole.nameStory || hole.story}</p>
        </div>
      )}

      {/* Photo Gallery */}
      {hasPhotos && photos.length > 1 && (
        <div className="photo-gallery">
          <h2>Photo Gallery</h2>
          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={`/baylake-pines/${photo}`}
                alt={`Hole ${hole.number} view ${index + 1}`}
                className={`gallery-photo ${index === currentPhoto ? 'active' : ''}`}
                onClick={() => setCurrentPhoto(index)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Course Details */}
      <div className="hole-details-grid">
        <div className="detail-item">
          <h3>Location</h3>
          <p>{hole.address}</p>
        </div>
        {hole.homeowner && (
          <div className="detail-item">
            <h3>Hosted By</h3>
            <p>{hole.homeowner}</p>
          </div>
        )}
        {hole.description && (
          <div className="detail-item full-width">
            <h3>About This Hole</h3>
            <p>{hole.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default HoleDetail
