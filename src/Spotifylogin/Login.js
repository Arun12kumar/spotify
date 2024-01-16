import React from "react";
import LoginCss from './Login.module.css'
import { Link } from "react-router-dom";


export default function Login(){

    return(
        <>
           <div className={LoginCss.container}>
           <Link to="/"><div className={LoginCss.item1}><i class="fa-brands fa-spotify"></i><p>Spotify</p></div></Link>
            <div className={LoginCss.item2}>
                <div className={LoginCss.maincontent}>
                    <div className={LoginCss.itemcontent}><h2>Log in to Spotify</h2></div>
                    <div className={LoginCss.itemcontent}><button><i className="fa-brands fa-google"></i><p>Continue with google</p></button></div>
                    <div className={LoginCss.itemcontent}><button><i className="fa-brands fa-facebook"></i><p>Continue with facebook</p></button></div>
                    <div className={LoginCss.itemcontent}><button><i className="fa-brands fa-apple"></i><p>Continue with Apple</p></button></div>
                    <div className={LoginCss.itemcontent}><button><p>Continue with Phone Number</p></button></div>
                    <div className={LoginCss.itemcontent1}>
                        <label >Email or username</label>
                        <input type="text" placeholder="Email or username" />
                    </div>
                    <div className={LoginCss.itemcontent1}>
                        <label >password</label>
                        <input type="password" placeholder="password" />
                    </div>
                    <div className={LoginCss.itemcontent}><i id={LoginCss.toogle} className="fa-solid fa-toggle-on"></i><p>Remember me</p></div>

                    
                    <div className={LoginCss.itemcontent}><button>Log in</button></div>
                    <div className={LoginCss.itemcontent}><p>Forgot your password?</p></div>
                    
                    
                </div>
            </div>
            <div className={LoginCss.item1}>1</div>
            
           </div>
        </>
    )
}