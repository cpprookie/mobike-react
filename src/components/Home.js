import React, { Component } from 'react';
import SlideShow from '../components/slideshow/SlideShow'
import Header from '../components/common/Header'
import Feature1 from '../components/home/Feature1'
import Feature2 from '../components/home/Feature2'
import Feature3 from '../components/home/Feature3'
import Feature4 from '../components/home/Feature4'

class Home extends Component {
  render() {
    const indexStyle = {
      backgroundImage: "url(https://mobike.com/global/public/hero.jpg)",
      height: "600px",
      paddingTop: "600px"
    }
    return (
      <section>
        <Header isIndex={true} style={indexStyle} title="Let's Mobike!" headerFix={this.props.headerFix} />
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <Feature4 />
        <SlideShow />
      </section>
    )
  }
}

export default Home;
