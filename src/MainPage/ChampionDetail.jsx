import React from "react";
import "./ChampionDetail.css";
import { Profile } from "../Components/Profile";
import { Skill } from "../Components/Skill";
import { RounesTap} from "../Components//RunesTap"
import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ChampionDetail({ championId }) {
  const [skilltext, setSkillText] = useState(null);
  const [profileinfo, setProfileinfo] = useState({});
  const [skillinfo, setSkillinfo] = useState([]);
  const championImagesURL = "http://ddragon.leagueoflegends.com/cdn/12.21.1/img";

  useEffect(() => {
    async function championData() {
      const response = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/12.21.1/data/ko_KR/champion/${championId}.json`
      );
      const result = await response.json();
      if (!response.ok) {
        throw new Error("404 Not Found");
      }
      changeProfile(result.data[championId]);
      changeSkill(result.data[championId]);
    }
    championData().catch((err) => {
      console.log("에러", err);
    });

    async function runesData(){
      const response = await fetch(`​https://127.0.0.1:2999/liveclientdata/activeplayerrunes`);
      const result = response.text();
      if(!response.ok){
        throw new Error("404 not Found");
      }
      return result
    } 
    // runesData().then((data)=>{
    //   console.log(data)
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
  }, []);

  function changeProfile(jsonData) {
    setProfileinfo({
      name: jsonData.name,
      image: `${championImagesURL}/champion/${championId}.png`,
      position: jsonData.tags,
    });
  }

  function changeSkill(jsonData) {
    const result = [];
    result.push({
      id: "passive",
      images: `${championImagesURL}/passive/${jsonData.passive.image.full}`,
      name: jsonData.passive.name,
      description: jsonData.passive.description,
      lore: jsonData.lore,
      title: jsonData.title,
    });
    for (let spell of jsonData.spells) {
      result.push({
        id: spell.id,
        images: `${championImagesURL}/spell/${spell.id}.png`,
        name: spell.name,
        description: spell.tooltip,
      });
    }
    setSkillinfo(result);
  }

  return (
    <>
      {/* <Header /> */}
      <main id="Layout">
        <section className="Detail_Header">
          <div className="Profile">
            <Profile profileinfo={profileinfo} setSkillText={setSkillText} />
          </div>
          <div className="Skill">
            <Skill
              skillinfo={skillinfo}
              skilltext={skilltext}
              setSkillText={setSkillText}
            />
          </div>
        </section>
        <div className="Detail_Main">
            <div className="Detail_Build">
                <section className="Runes">
                    <RounesTap profileinfo={profileinfo}/>
                </section>
                <aside className="Spell">스펠 챔피언 스킬빌드</aside>
            </div>
            <div className="Detail_item">
                <article>아이템빌드</article>
            </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default ChampionDetail;
