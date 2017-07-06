import React ,{Component} from 'react'
import HeaderDownload from './common/HeaderDownload' 

class  Header extends Component {
  render () {
    return (
      <div>
        <div className="header">
          <div className="header-wrapper">
            <div className="header-childern">
              <div className="header-body">
                <div className="header-title">{this.props.title}</div>
                {this.props.isIndex ? <div className="header-subtitle">The Perfect First & Last Mile Solution</div>: null }
                {this.props.isIndex ? <HeaderDownload /> : null}
              </div>
            </div>
          </div>
          <div className={this.props.headerFix ? "navigation-fixed" : ""}>
            <div className="header-navigation">
              <div className="navigation-logo">
                <a href="/global">
                  <img className="navigation-image-normal" src="http://mobike.com/global/public/header__logo_white.png" alt="logo" />
                  <img className="navigation-image-fixed" src="http://mobike.com/global/public/header__logo_dark.png" alt="fixed" />
                </a>
              </div>
              <div className="navigation-items">
                <a href="/global/" className="navigation-item">Home</a>
                <a href="/global/about" className="navigation-item">About</a>
                <a href="/global/blog" className="navigation-item">Blog</a>
                <a href="/global/faq" className="navigation-item">Faq</a>
                <a href="/global/request-form" className="navigation-item">Request Mobike</a>
                <a href="/global/download" className="navigation-item navigation-download">Download App</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header