import React, {Component} from 'react'
import SlideShowDots from './SlideShowDots'
import SlideShowContents from './SlideShowContents'

class SlideShow extends Component {
  constructor () {
    super()
    this.state = {count: 0}
    this.contents = [
      { text: "I think Mobikes look really cool! The first time I saw one I downloaded the app straight away and started riding that same day. I like how easy it is to use, just pick it up and drop it off at any public bicycle parking! It's also really cool to cycle around and rediscover the city and its hidden gems & locations!", 
        author: "Mobiker: Alex" },
      { text: "After my bike got stolen twice last year, I gave up having my own bicycle. Personally, I like Mobike simply because I can access it anytime through the app. There is no need to return the bike to the original location. Regardeless of where I go, I just need to turn on the app and there will be an available bike nearby.", 
        author:"Mobiker: Tan Kim Keh"},
      { text: "After trying Mobike for 2 days, the greatest benefit was that I could park the bike at any public parking area. This is a strong advantage as compared to other public bicycle services in operation.", 
        author:"Mobiker: Tian Jin Huo"},
      { text: "I usually use Mobike during lunch time, I'll grab a Mobike and cycle around to go to my favorite food court. It's really convenient!", 
        author:"Mobiker: Wu Jai Hui"}
    ]
  }

  componentDidMount () {
    this.interval = setInterval( ()=> {
      this.setState (prevState => {
        if (prevState.count === 3) return {count: 0}
        return {count: ++prevState.count}
      })
    } ,5000)
  }

  handleDotClick (index) {
    console.log('handler called!')
    console.log(index)
    this.setState({count: index})
  }

  render () {
    return (
      <section className="home-reviews">
        <div className="home-reviews-title">
          See what other Mobikers are raving about:
        </div>
        <div className="home-reviews-slider">
          <SlideShowContents contents={this.contents} count={this.state.count} />
          <SlideShowDots contents={this.contents} count={this.state.count} 
                        handleDotClick={this.handleDotClick.bind(this)} />
        </div>
      </section>
    )
  }
}

export default SlideShow