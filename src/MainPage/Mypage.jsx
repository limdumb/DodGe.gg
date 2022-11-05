import React from "react";
import './Mypage.css';
import Header from '../Components/Header';
import {Profile} from '../Components/Profile'
import {Skill} from '../Components/Skill'
import {lol} from "../dummy_data/data";




function Mypage({ props }){
    const championid = props;
    const jsonData = lol.data[championid];
    
    

    function changeProfile(jsonData) {
        return {
            name: jsonData.name,
            image: jsonData.image.full,
            position: jsonData.tags
        }
        
    }
    const profileinfo = changeProfile(jsonData);

    
    function changeSkill(jsonData){
        const result = []
        result.push(
            {
                images : jsonData.passive.image.full,
                i : jsonData.passive.image.full
            },
        )

        for(let spell of jsonData.spells){
            result.push(
                {
                    images : spell.image.full
                }
            )
            
        }
    
        return result;
    }
    const skillinfo = changeSkill(jsonData);
    
    

    return(
        <>
        <Header/>
            <main id="layout">
                <article className="champion">
                    <div className="profile">
                        <Profile profileinfo={profileinfo}/>
                    </div>
                    <div className="Skill">
                        <Skill skillinfo={skillinfo}/>
                    </div>
                </article>
                <section className="rune"></section>
                <section className="item"></section>
            </main>
        </>
    )
}

export default Mypage;