import React, { Component } from 'react';

class Navigation extends Component {
  render () {
    return (
      <div>
        <div className="header-navigation">
          <div className="navigation-logo">
            <a href="/global">
              <img className="navigation-image-normal" src="http://mobike.com/global/public/header__logo_white.png" alt="logo" />
              <img className="navigation-image-fixed" src="http://mobike.com/global/public/header__logo_dark.png" alt="fixed" />
            </a>
          </div>
          <div className="navigation-items">
            <a href="http://mobike.com/global/" className="navigation-item">Home</a>
            <a href="http://mobike.com/global/about" className="navigation-item">About</a>
            <a href="http://mobike.com/global/blog" className="navigation-item">Blog</a>
            <a href="http://mobike.com/global/faq" className="navigation-item">Faq</a>
            <a href="http://mobike.com/global/request-form" className="navigation-item">Request Mobike</a>
            <a href="http://mobike.com/download" className="navigation-item navigation-download">Download App</a>
          </div>
        </div>
      </div>
    ) 
  }
}