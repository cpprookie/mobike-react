import React ,{ Component } from 'react'

class AboutContent extends Component {
  render ()　{
    return (
      <section className="about-content">
        <div>
          <h1>What is Mobike?</h1>
          <p>Imagine a world where you can pick up and leave a bike at your convenience. Enter Mobike: a bike sharing service to fulfil urban short trips - anytime, to any legal parking destination - by combining innovation and today’s IoT (Internet of Things) technology. Mobike is green, reduces congestion, and continually strives to improve the quality of city life.</p>
          <br />
          <h1>Mobike's Mission</h1>
          <p>Mobike provides an affordable means of shared transportation for convenient short urban trips, while reducing congestion, and our city's carbon footprint. These combined - Mobike improves the quality of city life.social icon</p>
        </div>
        <div className="about-content-social">
          <a href="https://www.facebook.com/mobikesgp/" target="_blank" rel="noopener noreferrer">
            <img src="https://mobike.com/global/public/about__social_icon_1.svg" alt="social icon" />
          </a>
          <a href="https://www.instagram.com/mobikeglobal" target="_blank" rel="noopener noreferrer">
            <img src="https://mobike.com/global/public/about__social_icon_2.svg" alt="social icon" />
          </a>
        </div>
      </section>
    )
  }
}

export default AboutContent