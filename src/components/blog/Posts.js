import React from 'react'

const Post = (props) => (
  <div className="blog-post">
    <div className="blog-post-title">
      <a href={props.post.link} className="blog-post-title-link">{props.post.title}</a> 
    </div>
    <div className="blog-post-info">
      <span className="blog-post-info-author">
        {props.post.author}
      </span>
      <span className="blog-post-info-date">{props.post.date}</span>
    </div>
    <div className="blog-post-image">
      <a href= {props.post.link}>
        <img src={props.post.img} alt="post" />
      </a>
    </div>
    <div className="blog-post-body">
      {props.post.body}
    </div>
    <div className="blog-post-more">
      <a href={props.post.link} className="blog-post-more-link">More</a>
    </div>
  </div>
)

const Posts = props => (
  <section className="blog-posts">
    {props.posts.map(item => <Post key={item.id} post={item} />)}
  </section>
)

export default Posts