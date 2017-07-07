import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/global" component={Home} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
