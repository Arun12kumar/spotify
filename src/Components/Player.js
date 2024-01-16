
import playerCss from './Player.module.css'
import music1 from '../images/Athiraliyum.mp3'
import music2 from '../images/Alan_Walker.mp3'
import music3 from '../images/Mayaanadhi.mp3'
import { useState } from 'react';



export default function Player() {

  const song1 = new Audio(music1);
  const song2 = new Audio(music2);
  const song3 = new Audio(music3);
  const [index,setIndex] = useState(0);


  const songs = [
    {ele: song1, songName:'Athiraliyum', songImag: 'https://i.scdn.co/image/ab67616d00001e02ea2173d8f1a07bd8a7ba2059',},
    {ele: song2, songName:'Alan Walker', songImag: 'https://i.scdn.co/image/ab67616d00001e02df9a35baaa98675256b35177',},
    {ele: song3, songName:'Mayaanadhi',  songImag: 'https://i.scdn.co/image/ab67616d00001e020292b657d557caa22e60a157',},
  ]

  let item = songs[index];
  // console.log(index)
  
 
  function nextSong(){

    if (index <  2) {
      setIndex(index + 1);
    } else {
      
      setIndex(0);
    }
    
  
  }
  function prevSong(){
    if (index >  0) {
      setIndex(index - 1);
    } else {
      
      setIndex(2);
    }
   
  }


  function Playsong(e){
    if(item.ele.paused){
      item.ele.play()
      e.target.classList.replace('fa-play', 'fa-pause')

    }else{
      item.ele.pause()
      e.target.classList.replace('fa-pause', 'fa-play');
    }

  }

  return (
    <div>
      <div className={playerCss.container}>
      <div className={playerCss.items3}><img src={item.songImag} alt="" /></div>
        <div className={playerCss.items2}><p>Now playing-</p><p>{item.songName}</p></div>
        <div className={playerCss.items}><button onClick={prevSong}><i className="fa-solid fa-backward-step"></i></button> </div>
        <div className={playerCss.items1}><button onClick={Playsong}><i className="fa-solid fa-play"></i></button></div>
        <div className={playerCss.items}><button onClick={nextSong}><i className="fa-solid fa-forward-step"></i></button> </div>
        <div className={playerCss.items}> </div>

      </div>
    </div>
  )
}
