import React , {Component} from 'react'
import Text from '../common/Text'

class Feature3 extends Component {
  render() {
    return (
      <section className="home-feature-3">
        <div className="home-feature-3-image">
          <img src="http://mobike.com/global/public/home__feature_3_image.jpg" alt="feature 3" />
        </div>
        <div className="home-feature-3-wrap">
          <div className="home-feature-3-empty"></div>
          <div className="home-feature-3-text">
            <Text wrapperClass="home-feature-3-text-wrap" 
                    titleClass="home-feature-title home-feature-3-title" 
                    subtitleClass="home-feature-subtitle home-feature-3-subtitle" 
                    title="Getting you there - fast!"
                    subtitle="No more lugging around your personal bicycle or squeezing in transfer buses. Just Mobike to your destination!" /> 
          </div>
        </div>
      </section>
    )
  }
}

export default Feature3