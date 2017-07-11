import React, {Component} from 'react'

class SlideShowText extends Component {
  render () {
    return (
      <div className="slick-slide home-reviews-review" style={{ width: `750px`}}>
        <div className="home-reviews-text">{this.props.text}</div>
        <div className="home-reviews-author">{this.props.author}</div>
      </div>
    )
  }
}

export default SlideShowText