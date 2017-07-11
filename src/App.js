import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer'
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Request from './components/Request'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/'  component={Home} />
        <Route path="/about" component={About} />
        <Route path="/request-form" component={Request} />
        <Footer />
      </div>
    )
  }
}

export default App;
