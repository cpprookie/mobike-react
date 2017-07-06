import React, { Component } from 'react'

class HeaderDownload extends Component {
  render () {
    return (
      <div className="header-download">
        <a href="https://itunes.apple.com/app/id1044535426" target="_blank">
          <img src="http://mobike.com/global/public/home__download_ios.png" alt="ios"/>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.mobike.mobikeapp" target="_blank">
          <img src="http://mobike.com/global/public/home__download_android.png" alt="Android"/>
        </a>
      </div>
    )
  }
}

export default HeaderDownload