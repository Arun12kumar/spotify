import React from 'react'
import searchCss from './Search.module.css'



export default function Search() {
  return (
    <div>
      
      <div className={searchCss.container}>
        <p>Browse All</p>
        <div className={searchCss.sub}>
        <div className={searchCss.item1}></div>
        <div className={searchCss.item2}></div>
        <div className={searchCss.item3}></div>
        <div className={searchCss.item4}></div>
        <div className={searchCss.item5}></div>
        <div className={searchCss.item6}></div>
        </div>

      </div>



    </div>
  )
}
