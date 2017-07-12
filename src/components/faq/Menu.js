import React from 'react'

const MenuSection = props => (
  <div className="faq-menu-section">
    <a href={props.section.id}>{props.section.title}</a>
  </div>
) 

const Menu = props => (
  <section className="faq-menu">
    {props.sections.map(item => <MenuSection section={item} key={item.id} />)}
  </section>
)

export default Menu