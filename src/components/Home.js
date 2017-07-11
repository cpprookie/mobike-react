import React, { Component } from 'react';
import SlideShow from '../components/slideshow/SlideShow'
import Header from '../components/common/Header'
import Feature1 from '../components/home/Feature1'
import Feature2 from '../components/home/Feature2'
import Feature3 from '../components/home/Feature3'
import Feature4 from '../components/home/Feature4'

class Home extends Component {
  constructor() {
    super()
    this.state = {headerFix : false}
  }

  handleScroll (e) {
    if(window.scrollY > 600) {
      this.setState({headerFix : true})
    } else {
      this.setState({headerFix : false})
    }
  }

  componentDidMount () {
    window.addEventListener("scroll", this.handleScroll.bind(this))
  }

  render() {
    const indexStyle = {
      backgroundImage: "url(https://mobike.com/global/public/hero.jpg)",
      height: "600px",
      paddingTop: "600px"
    }
    return (
      <section>
        <Header isIndex={true} style={indexStyle} title="Let's Mobike!" headerFix={this.state.headerFix} />
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
