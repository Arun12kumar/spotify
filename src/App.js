import React from 'react'
import './App.css'

import Tabsearch from './Tabsearch/Tabsearch'
import { Route, Routes } from 'react-router'
import TabHome from './Components/TabHome'
import TabPlaylist from './Tabplaylist/TabPlaylist'
import Nothfound from './Components/Nothfound'
import Login from './Spotifylogin/Login'







export default function App() {
  return (

    <div> 
      
      <Routes>
        <Route  path='/' element = {<TabHome/>} />
        <Route  path='playlist' element = {<TabPlaylist/>} />
        <Route  path='*' element = {<Nothfound/>} />
        <Route  path='login' element = {<Login/>} />
        <Route  path='spotify' element = {<Tabsearch/>} />
      </Routes>

    </div>

  )
}

