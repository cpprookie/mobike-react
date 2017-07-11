import React , { Component } from 'react'
import Header from './common/Header'
import AboutContent from './about/AboutContent'
import ColorImage from './about/ColorImage'
import ImageSlide from './about/ImageSlide'

class About extends Component {
  render () {
    const commonStyle = {
      backgroundImage: "url(https://mobike.com/global/public/hero.jpg)"
    }
    return (
      <section className="about">
        <Header isIndex={false} style={commonStyle} title="ABOUT" />
        <AboutContent />
        <ColorImage />
        <ImageSlide />
      </section>
    )
  }
}

export default About