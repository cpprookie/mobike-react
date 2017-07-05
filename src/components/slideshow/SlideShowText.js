import React, {Component} from 'react'

class SlideShowText extends Component {
  render () {
    return (
      <div>
        <div className="slick-slide home-reviews-review">
          <div className="home-reviews-text">{this.props.text}</div>
          <div className="home-reviews-author">{this.props.author}</div>
        </div>
      </div>
    )
  }
}

export default SlideShowText