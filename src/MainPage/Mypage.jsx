import React from "react";
import './Mypage.css';
import Header from '../Components/Header';


function Mypage(){
    return(
        <>
        <Header/>
            <main id="layout">
                <article className="champion_profile"></article>
                <section className="rune_page"></section>
                <section className="item_page"></section>
            </main>
        </>
    )
}

export default Mypage;