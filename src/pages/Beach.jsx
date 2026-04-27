import './Feature.css'

function Beach() {
  return (
    <div className="feature-page">
      <div className="feature-header">
        <h1>The Beach</h1>
        <p className="feature-subtitle">Private Chesapeake Bay Access</p>
      </div>

      <div className="feature-content">
        <div className="content-block">
          <h2>Your Private Gateway to the Chesapeake</h2>
          <p>
            Baylake Pines residents enjoy exclusive access to a private beach on the 
            Chesapeake Bay—the largest estuary in North America. No traffic, no parking 
            fees, no strangers. Just neighbors, sunshine, and the gentle waves of the Bay.
          </p>
        </div>

        <div className="content-block">
          <h2>Born from a Meteor Strike</h2>
          <p>
            The Chesapeake Bay you're swimming in? It exists because a massive meteor 
            slammed into Earth 35 million years ago. A comet or asteroid 2-3 miles wide 
            blasted a 25-mile-diameter crater into the continental shelf during the late 
            Eocene epoch. That ancient impact crater now lies buried beneath the mouth of 
            the Chesapeake Bay near Cape Charles, Virginia.
          </p>
          <p>
            The impact fundamentally shaped the geography of the region, influencing 
            everything from groundwater flow to the formation of the Bay itself. You're 
            not just enjoying a beach—you're standing on one of North America's most 
            significant geological features.
          </p>
        </div>

        <div className="content-block">
          <h2>More Than Just Sand and Surf</h2>
          <p>
            This is where kids build their first sandcastles, where families spend 
            entire summer days without leaving the neighborhood, where you can launch 
            a kayak before breakfast and be back in time for coffee. The beach is 
            monitored, maintained, and exclusive to Baylake Pines residents and their 
            guests.
          </p>
          <p>
            Our location on the Chesapeake Bay gives us access to brackish waters teeming 
            with blue crabs, spot, croaker, and flounder. Summer evenings bring incredible 
            sunsets, and on clear nights, you can see across the Bay. It's not the ocean—it's 
            better, because it's ours, and it's built on 35 million years of cosmic history.
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
