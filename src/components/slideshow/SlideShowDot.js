import React, {Component} from 'react'

class SlideShowDot extends Component {
  handleClick (e) {
    e.target.className = "slick-active"
    console.log('e.target.textContent----->' + e.target.textContent)
    this.props.handleDotClick(parseInt(e.target.textContent , 10))
  }
  render ()  {
    return <li className={this.props.className}>
              <button onClick={this.handleClick.bind(this)}>{this.props.index}</button>
          </li>
  }
}

export default SlideShowDot