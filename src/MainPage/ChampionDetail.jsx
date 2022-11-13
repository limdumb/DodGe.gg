import React from "react";
import "./ChampionDetail.css";
import { Profile } from "../Components/Profile";
import { Skill } from "../Components/Skill";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ChampionDetail({ championId }) {
  const [skilltext, setSkillText] = useState(null);
  const [profileinfo, setProfileinfo] = useState({});
  const [skillinfo, setSkillinfo] = useState([]);
  const imagesURL = "http://ddragon.leagueoflegends.com/cdn/12.21.1/img";

  useEffect(() => {
    async function lolData() {
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
    lolData().catch((err) => {
      console.log("에러", err);
    });
  }, []);

  function changeProfile(jsonData) {
    setProfileinfo({
      name: jsonData.name,
      image: `${imagesURL}/champion/${championId}.png`,
      position: jsonData.tags,
    });
  }

  function changeSkill(jsonData) {
    const result = [];
    console.log(jsonData.passive.image.full);
    result.push({
      id: "passive",
      images: `${imagesURL}/passive/${jsonData.passive.image.full}`,
      name: jsonData.passive.name,
      description: jsonData.passive.description,
      lore: jsonData.lore,
      title: jsonData.title,
    });
    for (let spell of jsonData.spells) {
      result.push({
        id: spell.id,
        images: `${imagesURL}/spell/${spell.id}.png`,
        name: spell.name,
        description: spell.tooltip,
      });
    }
    setSkillinfo(result);
  }

  return (
    <>
      <Header />
      <div id="Layout">
        <header className="Detail_Header">
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
        </header>
        <main className="Detail_Main">
          <section>룬페이지 탭두개</section>
          <aside>스펠 챔피언 스킬빌드</aside>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default ChampionDetail;
