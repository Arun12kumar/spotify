import React from 'react'
import MainCss from './Main.module.css'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div>
        <div className={MainCss.container}>

          <p>Spotify orginal & exclusive show</p>
          <div className={MainCss.first}>
          <div className={MainCss.item}>
            <div className={MainCss.imageadd}></div>
            <p>The Horror Showby...</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.imageadd}></div>
            <p>The Horror Showby...</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.imageadd}></div>
            <p>The Horror Showby...</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.imageadd}></div>
            <p>The Horror Showby...</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.imageadd}></div>
            <p>The Horror Showby...</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.imageadd}></div>
            <p>The Horror Showby...</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.imageadd}></div>
            <p>The Horror Showby...</p>
          </div>
          </div>


          <p>Try something else</p>
          <div className={MainCss.second}>
          <div className={MainCss.item}>
          <div className={MainCss.secondadd}><Link to="/playlist"><img src="https://i.scdn.co/image/ab67706f000000021dac8691a7360a83d2ee8056" alt="" /></Link></div>
            <Link to="/playlist"><p>Latest Tamil</p></Link>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.secondadd}><Link to="/playlist"><img src="https://i.scdn.co/image/ab67706f000000021dac8691a7360a83d2ee8056" alt="" /></Link></div>
            <p>Latest Tamil</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.secondadd}><Link to="/playlist"><img src="https://i.scdn.co/image/ab67706f000000021dac8691a7360a83d2ee8056" alt="" /></Link></div>
            <p>Latest Tamil</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.secondadd}><Link to="/playlist"><img src="https://i.scdn.co/image/ab67706f000000021dac8691a7360a83d2ee8056" alt="" /></Link></div>
            <p>Latest Tamil</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.secondadd}><Link to="/playlist"><img src="https://i.scdn.co/image/ab67706f000000021dac8691a7360a83d2ee8056" alt="" /></Link></div>
            <p>Latest Tamil</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.secondadd}><Link to="/playlist"><img src="https://i.scdn.co/image/ab67706f000000021dac8691a7360a83d2ee8056" alt="" /></Link></div>
            <p>Latest Tamil</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.secondadd}><Link to="/playlist"><img src="https://i.scdn.co/image/ab67706f000000021dac8691a7360a83d2ee8056" alt="" /></Link></div>
            <p>Latest Tamil</p>
          </div>
          </div>


          <p>Featured Charts</p>
          <div className={MainCss.third}>
          <div className={MainCss.item}>
          <div className={MainCss.thirdadd}></div>
            <p>Top songs-Global</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.thirdadd}></div>
            <p>Top songs-Global</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.thirdadd}></div>
            <p>Top songs-Global</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.thirdadd}></div>
            <p>Top songs-Global</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.thirdadd}></div>
            <p>Top songs-Global</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.thirdadd}></div>
            <p>Top songs-Global</p>
          </div>
          <div className={MainCss.item}>
          <div className={MainCss.thirdadd}></div>
            <p>Top songs-Global</p>
          </div>
          </div>

          <div className={MainCss.mainfoot}>
            <div className={MainCss.foot}>Company
            <ul>
              <li>About</li>
              <li>Jobs</li>
              <li>For the Records</li>
            </ul>
            </div>
            <div className={MainCss.foot}>Community
            <ul>
              <li>For Artist</li>
              <li>Developers</li>
              <li>Advertising</li>
              <li>Investors</li>
              <li>Vendors</li>
            </ul>
            </div>
            <div className={MainCss.foot}>Useful Links
            <ul>
              <li>Supports</li>
              <li>Free Mobile App</li>
            </ul>
            </div>
            <div className={MainCss.foot}>
              <div className={MainCss.social}><i className="fa-brands fa-facebook"></i></div>
              <div className={MainCss.social}><i className="fa-brands fa-twitter"></i></div>
              <div className={MainCss.social}><i className="fa-brands fa-instagram"></i></div>
            </div>
          </div>


          <div className={MainCss.lastfoot}>
              <ul>
                <li>Legal</li>
                <li>Privacy center</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
                <li>About Ads</li>
                <li>Acessability</li>
                <li>@2023 Spotify AB</li>
              </ul>
          </div>

          
        </div>

    </div>
  )
}
