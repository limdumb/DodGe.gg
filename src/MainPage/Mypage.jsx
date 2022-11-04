import React from "react";
import './Mypage.css';
import Header from '../Components/Header';
import {Profile} from '../Components/Profile'
import {Skill} from '../Components/Skill'


function Mypage(){
    return(
        <>
        <Header/>
            <main id="layout">
                <article className="champion">
                <Profile/>
                <Skill/>
                </article>
                <section className="rune"></section>
                <section className="item"></section>
            </main>
        </>
    )
}

export default Mypage;