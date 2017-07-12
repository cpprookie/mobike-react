import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Request from './components/Request'
import Blog from './components/Blog' 
import Faq from './components/Faq'

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
        <Route exact path='/'  render={() => <Home headerFix={this.state.headerFix} />} />
        <Route path="/about"  render={() => <About headerFix={this.state.headerFix} />} />
        <Route path="/request-form" render={() => <Request headerFix={this.state.headerFix} />} />
        <Route path="/blog"  render={() => <Blog headerFix={this.state.headerFix} />} />
        <Route path="/faq"  render={() => <Faq headerFix={this.state.headerFix} />} />
        <Footer />
      </div>
    )
  }
}

export default App;
