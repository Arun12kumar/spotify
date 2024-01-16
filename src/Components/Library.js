import React from 'react'
import libraryCss from './Library.module.css'


export default function Library() {
  return (
    <div>
        <div className={libraryCss.container}>
            <div className={libraryCss.items1}>
                <span className="material-symbols-outlined">web_stories</span>
                <p>Library</p>
                <i className="fa-solid fa-plus"></i>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className={libraryCss.items2}>
              <div className="lids"><h4>Create your first playlist</h4><p>it's easy,we 'll help you.</p></div>
              <div className="lids"><button>Create Playlist</button></div>
            </div>
            <div className={libraryCss.items2}>
              <div className="lids"><h4>Create your first playlist</h4><p>it's easy,we 'll help you.</p></div>
              <div className="lids"><button>Browse podcast</button></div>
            </div>
        </div>
    </div>
  )
}
