import React, { Component } from 'react';

class Navigation extends Component {
  render () {
    return (
      <div>
        <div className="header-navigation">
          <div className="navigation-logo">
            <a href="/">
              <img className="navigation-image-normal" src="http://mobike.com/global/public/header__logo_white.png" alt="logo" />
              <img className="navigation-image-fixed" src="http://mobike.com/global/public/header__logo_dark.png" alt="fixed" />
            </a>
          </div>
          <div className="navigation-items">
            <a href="/" className="navigation-item">Home</a>
            <a href="/about" className="navigation-item">About</a>
            <a href="/blog" className="navigation-item">Blog</a>
            <a href="/faq" className="navigation-item">Faq</a>
            <a href="/request-form" className="navigation-item">Request Mobike</a>
            <a href="/download" className="navigation-item navigation-download">Download App</a>
          </div>
          <input type="checkbox" id="navigation-trigger" className="navigation-trigger" />
          <label className="navigation-humburger" htmlFor="navigation-trigger">
            <div className="navigation-humburger-icon"></div>
          </label>
          <div className="navigation-mobile">
            <label className="navigation-close" htmlFor="navigation-trigger">
              <div className="navigation-close-icon"></div>
            </label>
            <div className="navigation-mobile-items">
              <label htmlFor="navigation-trigger">
                <img src="https://mobike.com/global/public/footer_logo_mobike_navigation.jpg" className="navigation-mobile-logo" alt="mobile-logo" />
              </label>
              <a className="navigation-mobile-item" href="/">HOME</a>
              <a className="navigation-mobile-item" href="/about">ABOUT</a>
              <a className="navigation-mobile-item" href="blog">BLOG</a>
              <a className="navigation-mobile-item" href="/faq">FAQ</a>
              <a className="navigation-mobile-item" href="/requst-form">REQUEST MOBIKE</a>
              <a className="navigation-mobile-item">DOWNLOAD APP</a>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}

export default Navigation