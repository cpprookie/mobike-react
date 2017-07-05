import React ,{Component} from 'react'

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <a href="/">
          <img src="http://mobike.com/global/public/footer_logo.jpg" className="footer-logo" alt="logo_bike"/>
        </a>
        <div className="footer-social">
          <a href="https://www.facebook.com/mobikesgp/">
            <img src="http://mobike.com/global/public/facebook.svg" alt="social icon" />
          </a>
          <a href="https://www.instagram.com/mobikeglobal">
            <img src="http://mobike.com/global/public/instagram.svg" alt="social icon" />
          </a>
          <a href="https://twitter.com/mobike">
            <img src="http://mobike.com/global/public/twitter.svg" alt="social icon" />
          </a>
          <a href="https://www.youtube.com/channel/UCXi2VQIAMWMSD3mk4a7DN4g">
            <img src="http://mobike.com/global/public/YouTube.svg" alt="social icon" />
          </a>
        </div>
        <div className="footer-text">
          <p>© 2017 Mobike Pte Ltd</p>
          <p>
            All Rights Reserved | 
            <a href="mailto:contact@mobike.com">contact@mobike.com</a> | 
            <a href="/sg/privacy">Privacy</a> | 
            <a href="/sg/terms">Terms</a>
          </p>
        </div>
      </div>
    )
  }
} 


export default Footer