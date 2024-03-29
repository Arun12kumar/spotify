import React from 'react'
import { useEffect,useState} from 'react';
import axios from 'axios';
import SpotifyDataCss from './SpotifyData.module.css'


export default function SpotifyData() {

    const CLIENT_ID = "a9cf840e13cb47bea3e57e64eac11caf"
    const REDIRECT_URI = "http://localhost:3000/spotify"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    // const [songs, setSongs] = useState([])

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
    
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
    
        setToken(token)
    
    }, [])


    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
                
            }
        })

    
        setArtists(data.artists.items)
        console.log(data)
    }



    const renderArtists = () => {
        return artists.map(artist => (
            <div className={SpotifyDataCss.items} key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }
    
    const ArtistContainer = () => {
        return <div className={SpotifyDataCss.container}>{renderArtists()}</div>;
    };

  return (
    <div>
        
        {!token ?
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        :<button className={SpotifyDataCss.btn2} onClick={logout}>Log out</button>}

        {token ?

            <form onSubmit={searchArtists}>
                <input className={SpotifyDataCss.item1} type="text" onChange={e => setSearchKey(e.target.value)}/>
                <button className={SpotifyDataCss.btn1} type={"submit"}>Search</button>
            </form>

            : <h1> Log in </h1> 
         
        }
           

           
           {ArtistContainer()}

    </div>
  )
}
