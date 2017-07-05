import React, {Component} from 'react'
import SlideShowDot from './SlideShowDot'

class SlideShowDots extends Component {
  render () {
    return (
      <ul className="slick-dots">
        {this.props.contents.map( (item, index) => {
          return <SlideShowDot key={index} index={index}
            className={ index === this.props.count ? 'slick-active': ''} 
            handleDotClick = {this.props.handleDotClick}/>
        })}
      </ul>
    )
  }
}

export default SlideShowDots