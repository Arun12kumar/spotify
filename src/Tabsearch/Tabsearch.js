import React from 'react'
import navbarCss from './TabHome.module.css'
import Home from '../Components/Home'
import Library from '../Components/Library'
import Player from '../Components/Player'
// import Search from './Search'
import SearchHead from './SearchHead'
import SpotifyData from './SpotifyData'



export default function Tabsearch() {
    return (
        <div>
            <div className={navbarCss.container}>

                <div className={navbarCss.home}><Home /></div>
                <div className={navbarCss.Navbar}><SearchHead /></div>
                <div className={navbarCss.library}><Library /></div>
                <div className={navbarCss.main}><SpotifyData/></div>
                <div className={navbarCss.player}><Player /></div>
            </div>
        </div>
    )
}
