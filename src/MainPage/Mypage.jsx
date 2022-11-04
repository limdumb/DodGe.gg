import React from "react";
import './Mypage.css';
import Header from '../Components/Header';
import {Profile} from '../Components/Profile'
import {Skill} from '../Components/Skill'
import {lol} from "../dummy_data/data";




function Mypage({ props }){
    const jsonData = lol;
    const championid = props;
    

    function changeData(jsonData, championName) {
        return {
            name: jsonData.data[championName].name,
            image: jsonData.data[championName].image.full,
            position: jsonData.data[championName].tags
        }
        
    }
    
    const championInfo = changeData(jsonData, championid);
     
    

    return(
        <>
        <Header/>
            <main id="layout">
                <article className="champion">
                    <div className="profile">
                        <Profile championInfo={championInfo}/>
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