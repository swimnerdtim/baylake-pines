import './About.css'

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Baylake Pines Country Club</h1>
        <p className="tagline">A Tradition Unlike Any Other</p>
      </div>

      <div className="about-content">
        <section className="heritage-section">
          <img src="/logo-vintage.jpg" alt="Baylake Pines Heritage Logo" className="heritage-logo" />
          <p className="heritage-text">Est. 1960s • A lakefront community tradition</p>
        </section>

        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Baylake Pines Country Club is more than just a disc golf course—it's a 
            neighborhood tradition in the making. What started with a few neighbors 
            sharing a love of disc golf has evolved into a full 9-hole course winding 
            through our community.
          </p>
          <p>
            Each hole is hosted by a resident who has graciously opened their front 
            yard to install a disc golf basket. Together, we're building something 
            unique: a course that brings our community closer, one throw at a time.
          </p>
        </section>

        <section className="about-section">
          <h2>How It Works</h2>
          <div className="rules-grid">
            <div className="rule-item">
              <h3>🎯 Respect the Property</h3>
              <p>Each hole is on someone's property. Stay on designated paths and be mindful of landscaping.</p>
            </div>
            <div className="rule-item">
              <h3>👋 Be Friendly</h3>
              <p>You'll likely see homeowners while playing. Wave, say hi, and thank them for hosting a hole.</p>
            </div>
            <div className="rule-item">
              <h3>🚶 Walk, Don't Drive</h3>
              <p>The course is designed for walking. Enjoy the stroll between holes.</p>
            </div>
            <div className="rule-item">
              <h3>🗑️ Pack It Out</h3>
              <p>Keep our neighborhood clean. Take any trash with you.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Course Etiquette</h2>
          <ul className="etiquette-list">
            <li>Play during reasonable hours (8am - 8pm recommended)</li>
            <li>Let faster groups play through</li>
            <li>Replace divots and repair any damage</li>
            <li>Keep noise levels respectful</li>
            <li>No alcohol or smoking on the course</li>
            <li>Dogs must be on leash and cleaned up after</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Want to Join?</h2>
          <p>
            If you're a Baylake Pines resident interested in hosting a hole or 
            helping expand the course, we'd love to hear from you. The more holes 
            we add, the better the course becomes for everyone.
          </p>
          <p className="contact-note">
            Contact the course organizers through the neighborhood association.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About
