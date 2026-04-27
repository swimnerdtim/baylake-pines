import './Feature.css'

function Lake() {
  return (
    <div className="feature-page">
      <div className="feature-header">
        <h1>Lake Joyce</h1>
        <p className="feature-subtitle">Freshwater Paradise with a Pirate Legend</p>
      </div>

      <div className="feature-content">
        <div className="content-block">
          <h2>Our Private Freshwater Lake</h2>
          <p>
            Lake Joyce is the crown jewel of Baylake Pines—a rare freshwater lake 
            in Virginia Beach that allows electric-powered watercraft, making it one 
            of the most unique private lakes in the area. Surrounded by 336 homes in 
            our historic bayfront community, it's where neighborhood life centers from 
            May through September.
          </p>
        </div>

        <div className="content-block">
          <h2>Blackbeard's Island</h2>
          <p>
            Legend has it that about 300 years ago, Blackbeard the Pirate and his men 
            cut a channel approximately 500 feet long and 70 feet wide, transforming 
            2.5 acres of wilderness into what's now known as "Blackbeard's Island" 
            (also called "Treasure Island"). The island sits in the middle of Lake Joyce, 
            and local lore suggests the infamous pirate may have buried treasure there.
          </p>
          <p>
            In 2025, a local attorney purchased the island and is funding an archaeological 
            survey to uncover its secrets. Whether pirate gold lies beneath or not, the 
            mystery adds to the unique character of our lake.
          </p>
        </div>

        <div className="content-block">
          <h2>Activities & Amenities</h2>
          <ul className="feature-list">
            <li>Swimming in crystal-clear freshwater</li>
            <li>Electric-powered boats, kayaks, and paddleboards</li>
            <li>Fishing for bass and bluegill</li>
            <li>Private sandy beach area with lifeguard</li>
            <li>Dock access for all residents</li>
            <li>Maintained walkway and bike path to beach</li>
            <li>Sunset views over the water</li>
            <li>Annual boat parade and water games on July 4th</li>
          </ul>
        </div>

        <div className="content-block">
          <h2>A Hub of Recreation</h2>
          <p>
            More than just a body of water, Lake Joyce is where neighbors connect, 
            kids learn to swim, and summer traditions are born. From early morning 
            kayak sessions to evening boat rides, from fishing off the dock to the 
            legendary Fourth of July boat parade, the lake is the beating heart of 
            Baylake Pines.
          </p>
          <p>
            Once part of the Lynnhaven River outlet, Lake Joyce was developed from 
            lands that belonged to the former Baylake Pines private school. Today, 
            it's a privately maintained recreational paradise exclusive to our community.
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
