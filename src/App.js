import React, { Component } from 'react';
import './App.css';
import SlideShow from './components/slideshow/SlideShow'
import Footer from './components/Footer'
import Header from './components/Header'
import Feature1 from './components/Feature1'
import Feature2 from './components/Feature2'
import Feature3 from './components/Feature3'
import Feature4 from './components/Feature4'

class App extends Component {
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
    return (
      <div>
        <section>
          <Header isIndex={true} title="Let's Mobike!" headerFix={this.state.headerFix} />
          <Feature1 />
          <Feature2 />
          <Feature3 />
          <Feature4 />
          <SlideShow />
        </section>
        <Footer />
      </div>
    )
  }
}

export default App;
