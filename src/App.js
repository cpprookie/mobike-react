import React, { Component } from 'react';
import './App.css';
import SlideShow from './components/slideshow/SlideShow'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div>
        <SlideShow />
        <Footer />
      </div>
    )
  }
}

export default App;
