import React from 'react'
import PlayhesCss from './PlaylistHeader.module.css'

export default function PlaylistHeader() {
  return (
    <div>
        <div className={PlayhesCss.container}>
            <div className={PlayhesCss.item}><i className="fa-solid fa-angle-left"></i></div>
            <div className={PlayhesCss.item}><i className="fa-solid fa-angle-right"></i></div>
            <div className={PlayhesCss.item1}><button>Explore Premium</button></div>
            <div className={PlayhesCss.item2}><button><i className="fa-solid fa-download"></i>install App</button></div>
            <div className={PlayhesCss.item}><i className="fa-regular fa-bell"></i></div>
            <div className={PlayhesCss.item}><i className="fa-regular fa-circle-user"></i></div>
        </div>
    </div>
  )
}
