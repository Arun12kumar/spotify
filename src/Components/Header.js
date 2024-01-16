import React from 'react'
import HeaderCss from './Header.module.css'
import { Link } from 'react-router-dom'



export default function Header() {
  return (
    <div>
        <div className={HeaderCss.container}>
            <div className={HeaderCss.item}><i className="fa-solid fa-angle-left"></i></div>
            <div className={HeaderCss.item}><i className="fa-solid fa-angle-right"></i></div>
            <div className={HeaderCss.item1}><Link to='login'><button>Login</button></Link></div>
            <div className={HeaderCss.item2}><button><i className="fa-solid fa-download"></i>install App</button></div>
            <div className={HeaderCss.item}><i className="fa-regular fa-bell"></i></div>
            <div className={HeaderCss.item}><i className="fa-regular fa-circle-user"></i></div>
        </div>
    </div>
  )
}
