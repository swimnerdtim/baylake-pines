import './Feature.css'

function Lake() {
  return (
    <div className="feature-page">
      <div className="feature-header">
        <h1>The Lake</h1>
        <p className="feature-subtitle">Crystal Clear Waters, Endless Summer Days</p>
      </div>

      <div className="feature-content">
        <div className="content-block">
          <h2>Our Private Paradise</h2>
          <p>
            At the heart of Baylake Pines lies our pristine private lake—a
            shimmering centerpiece that defines neighborhood life from May through
            September. This isn't just a body of water; it's where memories are made,
            where kids learn to swim, where neighbors become family.
          </p>
        </div>

        <div className="content-block">
          <h2>Activities & Amenities</h2>
          <ul className="feature-list">
            <li>Swimming and floating on warm summer days</li>
            <li>Kayaking and paddleboarding across calm waters</li>
            <li>Fishing for bass and bluegill</li>
            <li>Private sandy beach area</li>
            <li>Dock access for all residents</li>
            <li>Sunset views that never get old</li>
          </ul>
        </div>

        <div className="content-block">
          <h2>A Community Gathering Place</h2>
          <p>
            The lake is where you'll find neighbors catching up while kids play,
            where summer evenings stretch into night, where the annual Fourth of
            July celebration kicks off with boat parades and water games. It's the
            beating heart of Baylake Pines.
          </p>
        </div>

        <div className="placeholder-notice">
          <p>📸 Photos coming soon!</p>
        </div>
      </div>
    </div>
  )
}

export default Lake
