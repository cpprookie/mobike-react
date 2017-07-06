import React , {Component} from 'react'
import Text from './common/Text'

class Feature4 extends Component {
  render() {
    return (
      <section className="home-feature-4"> 
        <div className="home-feature-4-wrap">
          <Text wrapperClass="home-feature-4-text" 
                    titleClass="home-feature-title home-feature-4-title" 
                    subtitleClass="home-feature-subtitle home-feature-4-subtitle" 
                    title="Easy & Secure Payment"
                    subtitle="Top-up your in-App wallet anytime within from the app!" /> 
          <div className="home-feature-4-image">
            <img src="http://mobike.com/global/public/home__feature_4_image.png" alt="homefeature 4" />
          </div>
        </div>
      </section>
    )
  }
}

export default Feature4