import React from 'react'
import HeaderCss from './SearchHead.module.css'


export default function SearchHead() {
  return (
    <div>
        <div className={HeaderCss.container}>
            <div className={HeaderCss.item}><i className="fa-solid fa-angle-left"></i></div>
            <div className={HeaderCss.item}><i className="fa-solid fa-angle-right"></i></div>
            <div className={HeaderCss.item1}><i className="fa-solid fa-magnifying-glass"></i><input type="text" placeholder= ' What do you want to listern?'/></div>
            <div className={HeaderCss.item2}><button><i className="fa-solid fa-download"></i>install App</button></div>
            <div className={HeaderCss.item}><i className="fa-regular fa-bell"></i></div>
            <div className={HeaderCss.item}><i className="fa-regular fa-circle-user"></i></div>
        </div>
    </div>
  )
}
