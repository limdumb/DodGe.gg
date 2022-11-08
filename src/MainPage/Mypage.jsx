import React from "react";
import './Mypage.css';
import Header from '../Components/Header';
import {Profile} from '../Components/Profile'
import {Skill} from '../Components/Skill'
import {lol} from "../dummy_data/data";
import {useState} from "react";




function Mypage({ championId }){
    
    // 방법 1
    // let url = `https://ddragon.leagueoflegends.com/cdn/12.21.1/data/ko_KR/champion/${championId}.json`

    // fetch(url)
    // .then((response)=> {
    //     if(!response.ok){
    //         throw new Error("에러");
    //     }
    //     return response.json()
    // })
    // .then((data)=> {console.log(data)})
    // .catch((error)=> console.log(error));

    // 방법 2
    async function lolData(){
        const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/12.21.1/data/ko_KR/champion/${championId}.json`);
        if(!response.ok){
            throw new Error('에러');
         }
        const result = await response.json();
        console.log(result);
    }
    lolData().catch(()=>{
        console.log("에러")
    })
        // const imagesURL = "http://ddragon.leagueoflegends.com/cdn/12.21.1/img"        
        // 메인이미지 경로 -> "http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/Aatrox.png"
        // 스킬 경로 -> "https://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/AatroxQ.png",
        // 패시브 경로 -> "https://ddragon.leagueoflegends.com/cdn/12.21.1/img/passive/Aatrox_Passive.png",
        
        const championName = championId;
        const jsonData = lol.data[championName];
        const profileinfo = changeProfile();
        const skillinfo = changeSkill(jsonData);
        const [text, setText] = useState(null)
    
    function changeProfile() {
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