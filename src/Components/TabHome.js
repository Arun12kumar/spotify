import React from 'react'
import navbarCss from './TabHome.module.css'
import Home from './Home'
import Header from './Header'
import Library from './Library'
import Main from './Main'
import Player from './Player'





export default function TabHome() {
  return (
    <div>
      <div className={navbarCss.container}>
            
        <div className={navbarCss.home}><Home/></div>
        <div className={navbarCss.Navbar}><Header/></div>
        <div className={navbarCss.library}><Library/></div>
        <div className={navbarCss.main}><Main/></div>
        <div className={navbarCss.player}><Player/></div>
      </div>
 
    </div>
  )
}
