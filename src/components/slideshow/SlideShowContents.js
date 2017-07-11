import React, {Component} from 'react'
import SlideShowText from './SlideShowText'

class SlideShowContents extends Component {
  render () {
    return (
      <div className="slick-slider">
        <div className="slick-list">
          <div className="slick-track" style= {{transform: `translate3d(${0 - this.props.count * 750}px, 0px, 0px)`, width: `3000px`,opacity: 1}}>
            {this.props.contents.map((content, index) => 
              <SlideShowText key={index} text={content.text}
                            author={content.author} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default SlideShowContents