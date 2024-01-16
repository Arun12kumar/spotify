import React from 'react'
import PlayCss from './PlaylistMain.module.css'

export default function PlaylistMain() {
  return (
    <div>
        <div className={PlayCss.container}>
            <div className={PlayCss.item}>
                <div className={PlayCss.sub1}></div>
                <div className={PlayCss.sub}>
                    <p>Playlist</p>
                    <h1>Latest Tamil</h1>
                    <p>New Music from Kollywood. Cover : Captain Miller</p>
                    <span><img src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5" alt="" /><p>Spotify .649,222 likes . 77 songs, about 4 hr 15 min</p></span>
                </div>
            </div>
            <div className={PlayCss.item1}></div>
        </div>
    </div>
  )
}
