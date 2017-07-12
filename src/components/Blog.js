import React from 'react'
import Header from './common/Header'
import Posts from './blog/Posts'
import Sidebar from './blog/BlogSidebar'

const Blog = (props) => {
  // post list
  const posts = [
    {"id":0,"title":"Manchester Welcomes Mobike","link":"https://mobike.com/global/blog/post/manchester-launch","author":"Author: Mobike UK","date":"Date: 29th June","img":"http://www.mobike.com/global/public/MOBIKE_JPEG-4.jpg","body":"Mobike, the world’s first and largest smart bike-share, has launched in Manchester and Salford, with Mancunians and Salfordians now able to download the Mobike app and get cycling."},
    {"id":1,"title":"‘Mobike Japan’ in Fukuoka","link":"https://mobike.com/global/blog/post/mobike-japan","author":"Author: Mobike Global","date":"Date: 22nd June","img":"http://www.mobike.com/global/public/MobikeJapan.jpg","body":"Today Mobike announced the establishment of Japanese subsidiary “Mobike Japan Ltd”, in Fukuoka city alongside plans to begin services in the city later this year."},
    {"id":2,"title":"Mobike Raises Over $600 Million in Series E Financing Led by Tencent","link":"https://mobike.com/global/blog/post/mobike-raises-600millionusd","author":"Author: Mobike UK","date":"Date: 16th June","img":"http://www.mobike.com/global/public/MobikeImg.png","body":"Mobike has raised over 600 million USD in a new round of financing, the largest ever financing round in the bike-sharing industry, globally."},
    {"id":3,"title":"Manchester is Mobike’s 100th city","link":"https://mobike.com/global/blog/post/mobike-in-manchester","author":"Author: Mobike UK","date":"Date: 12th June","img":"http://mobike.com/global/public/manchestermobike.png","body":"This June Mobike will launch in Manchester in partnership with Manchester City Council, Salford City Council, and Transport for Greater Manchester. Manchester will become the 100th Mobike city and the first outside of Asia, initiating our European expansion. "},
    {"id":4,"title":"WWF Awards Mobike the first ‘Climate Solver Sustainable Urban Mobility Special Award’","link":"https://mobike.com/global/blog/post/wwf-sustainable-award","author":"Author: MobikeGlobal","date":"Date: 8th June","img":"http://mobike.com/global/public/WWF%20Mobike%20.jpg","body":"Sustainability and responsible mobility are at the heart of the Mobike mission. The award goes to honor the steps taken so far and will act as a catalyst to keep reaching the necessary milestones "},
    {"id":5,"title":"Mobike Partners with Dow Chemical","link":"https://mobike.com/global/blog/post/dow-partners-mobike","author":"Author: Mobike Global","date":"Date: 25th May","img":"http://mobike.com/global/public/DowandMobike.jpg","body":"Mobike partners with Dow Chemical to design a lighter and more eco-friendly bicycle. Official Press Release"},
    {"id":6,"title":"Mobike, Qualcomm and the China Mobile Research Institute – The Future of IoT Technology","link":"https://mobike.com/global/blog/post/future-of-iot","author":"Author: Mobike Global","date":"Date: 25th May 2017","img":"http://mobike.com/global/public/Mobike&Qualcomm.jpg","body":"Mobike announce the launch of an innovative research initiative with Qualcomm Technologies and the China Mobile Research Institute to trial a new generation of IoT technologies."},
    {"id":7,"title":"The Mobike White Paper: Bike-Share in the City","link":"https://mobike.com/global/blog/post/mobike-white-paper","author":"Author: Mobike Global","date":"Date: 19th May 2017","img":"http://mobike.com/global/public/whitepaperbackground.png","body":"Mobike releases the first white paper on bike-share with the support of Tsinghua University’s China New Urbanization Research Institute and the Beijing Tsinghua Tongheng Design & Research Institute"}
  ]
  // sidebar list
  const sidebar = [
    {id: 0, "title":"Manchester Welcomes Mobike","date":"29th June"},
    {id: 1, "title":"‘Mobike Japan’ in Fukuoka","date":"22nd June"},
    {id: 2, "title":"Mobike Raises Over $600 Million in Series E Financing Led by Tencent","date":"16th June"}
  ]   
  const commonStyle = {
    backgroundImage: "url(https://mobike.com/global/public/hero.jpg)"
  }

  return (
    <section className="blog">
      <Header isIndex={false} style={commonStyle} title="BLOG" headerFix={props.headerFix} />
      <section className="blog-content">
        <Posts posts={posts} />
        <Sidebar sidebar={sidebar} />
      </section>
    </section>
  )
 }

 export default Blog