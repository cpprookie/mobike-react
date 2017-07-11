import React ,{Component} from 'react'
import HeaderDownload from '../common/HeaderDownload' 
import Navigation from './Navigation'
 
class  Header extends Component {
  render () {
    return (
      <div className="header">
        <div className="header-wrapper header-wrapper-normal" 
          style={ this.props.style}>
          <div className="header-childern">
            <div className="header-body">
              <div className="home-header-title">{this.props.title}</div>
              {this.props.isIndex ? <div className="home-header-subtitle">The Perfect First & Last Mile Solution</div>: null }
              {this.props.isIndex ? <HeaderDownload /> : null}
            </div>
          </div>
        </div>
        <div className={this.props.headerFix ? "navigation-fixed" : ""}>
          <Navigation />
        </div>
      </div>
    )
  }
}

export default Header