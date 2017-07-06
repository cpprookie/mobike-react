import React, {Component} from 'react'

class Text extends Component {
  render () {
    return (
      <div className={this.props.wrapperClass}>
        <div className={this.props.titleClass}>{this.props.title}</div>
        <div className={this.props.subtitleClass}>{this.props.subtitle}</div>
      </div>
    )  
  }
}

export default Text