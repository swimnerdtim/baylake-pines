import './Feature.css'

function Beach() {
  return (
    <div className="feature-page">
      <div className="feature-header">
        <h1>The Beach</h1>
        <p className="feature-subtitle">Our Own Slice of Paradise</p>
      </div>

      <div className="feature-content">
        <div className="content-block">
          <h2>Sandy Shores, Right Here at Home</h2>
          <p>
            You don't have to drive to the ocean when you've got Baylake Pines Beach.
            Our private sandy beach is where families spend entire summer days—no
            traffic, no parking fees, no strangers. Just neighbors, sunshine, and
            the sound of kids laughing in the water.
          </p>
        </div>

        <div className="content-block">
          <h2>Beach Life</h2>
          <ul className="feature-list">
            <li>Soft sandy beach maintained year-round</li>
            <li>Shallow entry perfect for young swimmers</li>
            <li>Beach volleyball and sandcastle competitions</li>
            <li>Picnic areas and shade structures</li>
            <li>Lifeguard on duty during peak summer hours</li>
            <li>Night swimming under the stars</li>
          </ul>
        </div>

        <div className="content-block">
          <h2>More Than Just a Beach</h2>
          <p>
            This is where kids build their first sandcastles and learn to swim.
            Where parents relax while keeping an eye on the action. Where summer
            traditions are born and carried on year after year. It's not the
            ocean—it's better, because it's ours.
          </p>
        </div>

        <div className="placeholder-notice">
          <p>📸 Photos coming soon!</p>
        </div>
      </div>
    </div>
  )
}

export default Beach
