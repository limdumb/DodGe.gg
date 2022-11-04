import React from "react";
import './Mypage.css';
import Header from '../Components/Header';
import {Profile} from '../Components/Profile'
import {Skill} from '../Components/Skill'
import {lol} from "../dummy_data/data";



function Mypage(){
     const jsonData = lol;
    

    return(
        <>
        <Header/>
            <main id="layout">
                <article className="champion">
                    <div className="profile">
                        <Profile jsonData={jsonData}/>
                    </div>
                    <div className="Skill">
                        <Skill/>
                    </div>
                </article>
                <section className="rune"></section>
                <section className="item"></section>
            </main>
        </>
    )
}

export default Mypage;