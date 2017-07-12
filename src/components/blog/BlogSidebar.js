import React from 'react'

const SidebarItem = (props) => (
  <div className="sidebar-blog-post">
    <a className="sidebar-blog-post-title" href="">{props.sidebarItem.title}</a>
    <span className="sidebar-blog-post-date">{props.sidebarItem.date}</span>
  </div>
)


const Sidebar = (props) => (
  <section className="blog-sidebar">
    <section className="sidebar">
    <div className="sidebar-blog-title">Rencent Articles</div>
      {props.sidebar.map(item => <SidebarItem sidebarItem={item} key={item.id} />)}
    </section>
  </section>
)

export default Sidebar