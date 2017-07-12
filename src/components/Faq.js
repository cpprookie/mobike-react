import React from 'react'
import Header from './common/Header'
import Menu from './faq/Menu'
import Data from './faq/Data'

const Faq = (props) => {
  const commonStyle = {
    backgroundImage: "url(https://mobike.com/global/public/hero.jpg)"
  }
  const menu = [
    {"id":"#faq0","title":"What is Mobike?"},
    {"id":"#faq1","title":"Registration & Account"},
    {"id":"#faq2","title":"Bike Reservation and Lock Problem"},
    {"id":"#faq4","title":"Fares"},
    {"id":"#faq5","title":"Best Parking Practices"},
    {"id":"#faq8","title":"Mobike Credits"}
  ]

  return (
    <section className="faq">
      <Header isIndex={false} style={commonStyle} title="FAQ" headerFix={props.headerFix} />
      <section className="faq-content">
        <Menu sections={menu} />
        <Data />
      </section>
    </section>
  )
}

export default Faq