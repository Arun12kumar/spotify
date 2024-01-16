import React from 'react'
import homeCss from './Home.module.css'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div>
      <div className={homeCss.container}>
      <Link to="/"><div className={homeCss.item1}><i className="fa-solid fa-house"></i><p>Home</p></div></Link>
      <Link to="/spotify"><div className={homeCss.item2}><i className="fa-solid fa-magnifying-glass"></i><p>Search</p></div></Link>
            
      </div>




    </div>
  )
}
