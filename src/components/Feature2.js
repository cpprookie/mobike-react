import React, { Component } from 'react' 
import Text from './common/Text'

class Feature2 extends Component {
  render () {
    return (
      <section className="home-feature-2">
        <div className="home-feature-2-overlay">
          <div className="home-feature-2-wrap">
            <div className="home-feature-2-empty"></div>
            <div className="home-feature-2-text">
              <Text wrapperClass="home-feature-2-text-wrap" 
                    titleClass="home-feature-title home-feature-2-text-title" 
                    subtitleClass="home-feature-subtitle" 
                    title="Convenient & Simple"
                    subtitle="After downloading the App and registering, simply scan the QR code on the bike and ride away. Simply close the lock once you've parked in a bicycle parking area!" /> 
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Feature2