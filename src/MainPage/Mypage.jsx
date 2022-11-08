import React from "react";
import './Mypage.css';
import Header from '../Components/Header';
import {Profile} from '../Components/Profile'
import {Skill} from '../Components/Skill'
import {lol} from "../dummy_data/data";
import {useState} from "react";


function Mypage({ champion }){
    const championid = champion;
    const jsonData = lol.data[championid];
    const profileinfo = changeProfile(jsonData);
    const skillinfo = changeSkill(jsonData);
    const [text, setText] = useState(null)
    


    function changeProfile(jsonData) {
        return {
            name: jsonData.name,
            image: jsonData.image.full,
            position: jsonData.tags
        }
    }

    function changeSkill(jsonData){
        const result = []
        result.push(
            {
                id : "passive",
                images : jsonData.passive.image.full,
                description: jsonData.passive.description
            },
        )
        for(let spell of jsonData.spells){
            result.push(
                {
                    id : spell.id,
                    images : spell.image.full,
                    description: spell.tooltip
                })}
        return result;
    }
    return(
        <>
        <Header/>
            <main id="layout">
                <header className="champion">
                    <div className="profile">
                        <Profile profileinfo={profileinfo} setText={setText}/>
                    </div>
                    <div className="Skill">
                        <Skill skillinfo={skillinfo} jsonData={jsonData} text={text} setText={setText}/>
                    </div>
                </header>
            </main>
        </>
    )
}

export default Mypage;