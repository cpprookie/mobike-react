import React, {Component} from 'react' 
import Text from '../common/Text'

class Feature1 extends Component {
  render () {
    return (
      <section className="home-feature-1">
        <div className="home-feature-1-wrap">
          <div className="home-feature-1-text">
            <Text wrapperClass="home-feature-1-text-wrap" 
                  titleClass="home-feature-title home-feature-1-title"  
                  subtitleClass="home-feature-subtitle home-feature-1-subtitle"
                  title="Mobike takes you there!"
                  subtitle="Thousands of bikes available around you. End your ride in any bicycle parking space, near to your destination!"/>
          </div>
          <div className="home-feature-1-image">
            <img src="http://mobike.com/global/public/home__feature_1_image.jpg" alt="feature-1" />
          </div>
        </div>
      </section>
    )
  }
}

export default Feature1