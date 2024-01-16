import React from 'react'
import navbarCss from './TabHome.module.css'
import Home from '../Components/Home'
import Library from '../Components/Library'
import Player from '../Components/Player'
import PlaylistMain from './PlaylistMain'
import PlaylistHeader from './PlaylistHeader'

export default function TabPlaylist() {
  return (
    <div>
              <div className={navbarCss.container}>
            
            <div className={navbarCss.home}><Home/></div>
            <div className={navbarCss.Navbar}><PlaylistHeader/></div>
            <div className={navbarCss.library}><Library/></div>
            <div className={navbarCss.main}><PlaylistMain/></div>
            <div className={navbarCss.player}><Player/></div>
          </div>
    </div>
  )
}
