import styled from "styled-components";
import { RiArrowRightSFill } from "react-icons/ri";
import ChampionStatistics from "./Data/ChampionStatistics.json";

const Container = styled.div`
  padding: 0 5px 10px 5px;
  height: 225px;
  display: flex;
  flex-wrap: wrap;

  .Recommend_Container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    &:nth-child(1) {
      width: 60%;
    }

    h6 {
      font-size: 20px;
      font-weight: normal;
      margin-bottom: 10px;
    }

    .Box_Container {
      display: flex;
      align-items: center;

      .Item_Box {
        position: relative;

        .Skill_Key {
          position: absolute;
          text-align: center;
          height: 100%;
          width: 100%;
          color: white;
          font-size: 18px;
          font-weight: bold;
          background-color: rgba(0, 0, 0, 0.4);
        }

        .Item_Count {
          position: absolute;
          top: 45%;
          right: 2.5%;
          height: 25px;
          width: 25px;
          color: white;
          background-color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }

  img {
    width: 44px;
    height: 44px;
  }

  @media only screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    height: 125px;

    .Recommend_Container {
      &:first-child {
        width: 25%;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    display:grid;
    width: 400px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;

    .Recommend_Container{
      h6{
        font-size: 15px;
        margin: 0;
      }
      img{
        width: 40px;
        height: 40px;
      }
    }

    .Recommend_Container:nth-child(1){
      width: 100%;
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`;

export default function QuickBuild({ currentChamp, darkMode }) {
  const startItems = recommendStartItems(currentChamp);
  const startBoots = recommendBoots(currentChamp);
  const summonerSpells = recommendSpells(currentChamp);
  const skillImages = getSkillImages(
    ChampionStatistics[0][currentChamp.id].skill_tree,
    currentChamp
  );
  const baseURL = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img";
  return (
    <Container>
      <div className="Recommend_Container">
        <h6>스킬 마스터 추천 순서</h6>
        <div className="Box_Container">
          <div className="Item_Box">
            <span className="Skill_Key">
              {ChampionStatistics[0][currentChamp.id].skill_tree[0]}
            </span>
            <img src={`${baseURL}/spell/${skillImages[0]}`}></img>
          </div>
          <RiArrowRightSFill />
          <div className="Item_Box">
            <span className="Skill_Key">
              {ChampionStatistics[0][currentChamp.id].skill_tree[1]}
            </span>
            <img src={`${baseURL}/spell/${skillImages[1]}`}></img>
          </div>
          <RiArrowRightSFill />
          <div className="Item_Box">
            <span className="Skill_Key">
              {ChampionStatistics[0][currentChamp.id].skill_tree[2]}
            </span>
            <img src={`${baseURL}/spell/${skillImages[2]}`}></img>
          </div>
        </div>
      </div>

      <div className="Recommend_Container">
        <h6>추천 스펠</h6>
        <div className="Box_Container">
          <div className="Item_Box">
            <img src={`${baseURL}/spell/${summonerSpells[0]}.png`}></img>
          </div>
          <div className="Item_Box">
            <img src={`${baseURL}/spell/${summonerSpells[1]}.png`}></img>
          </div>
        </div>
      </div>

      <div className="Recommend_Container">
        <h6>시작 아이템</h6>
        <div className="Box_Container">
          <div className="Item_Box">
            <img src={`${baseURL}/item/${startItems[0]}.png`}></img>
          </div>
          <div className="Item_Box">
            {startItems[1] ? (
              <img src={`${baseURL}/item/${startItems[1]}.png`}></img>
            ) : null}
            {[1054, 1055, 1101, 1102, 1103, 2033].includes(startItems[0]) ||
            startItems[1] === 2031 ? null : (
              <span className="Item_Count">
                {startItems[0] === 1036 ? "X3" : "X2"}
              </span>
            )}
          </div>
        </div>
      </div>

      {startBoots === null ? (
        <div></div>
      ) : (
        <div className="Recommend_Container">
          <h6>신발</h6>
          <div className="Box_Container">
            <div className="Item_Box">
              <img src={`${baseURL}/item/${startBoots}.png`}></img>
            </div>
          </div>
        </div>
      )}

      <div className="Recommend_Container">
        <h6>코어템</h6>
        <div className="Box_Container">
          <div className="Item_Box">
            <img
              src={`${baseURL}/item/${
                ChampionStatistics[0][currentChamp.id].core_items[0]
              }.png`}
            ></img>
          </div>
          <RiArrowRightSFill />
          <div className="Item_Box">
            <img
              src={`${baseURL}/item/${
                ChampionStatistics[0][currentChamp.id].core_items[1]
              }.png`}
            ></img>
          </div>
          <RiArrowRightSFill />
          <div className="Item_Box">
            <img
              src={`${baseURL}/item/${
                ChampionStatistics[0][currentChamp.id].core_items[2]
              }.png`}
            ></img>
          </div>
        </div>
      </div>
    </Container>
  );
}

/**
 * 현재 선택된 챔피언의 "line" 속성에 따라 시작 아이템을 추천해줍니다.
 * 시작 아이템은 정글러, 서포터, 라이너 여부 및 특성에 따라 아이템을 추천해줍니다.
 * @param {*} currentChamp 현재 선택된 챔피언(props)
 * @returns 각 아이템 id(Number)를 포함한 배열
 */
function recommendStartItems(champion) {
  if (ChampionStatistics[0][champion.id].line === "jungle") {
    // prettier-ignore
    const scorchJunglers = ["Ekko", "Elise", "Evelyn", "Fiddlesticks", "Karthus", "LeeSin", "Nidalee", "Nocturne", "Reksai", "Shaco", "Zed"];
    // prettier-ignore
    const gustJunglers = ["Hecarim", "Ivern", "Khazix", "Rengar", "Skarner", "Taliyah", "Talon"];

    if (scorchJunglers.includes(champion.id)) return [1101, 2003];
    if (gustJunglers.includes(champion.id)) return [1102, 2003];

    return [1103, 2003];
  }

  if (ChampionStatistics[0][champion.id].line === "adc") {
    return [1055, 2003];
  }

  if (ChampionStatistics[0][champion.id].line === "support") {
    const exceptions = ["Rakan", "Thresh"];

    if (champion.tags.includes("Tank")) {
      if (champion.info.attack > champion.info.magic) {
        return [3854, 2003];
      } else {
        return [3858, 2003];
      }
    }

    if (exceptions.includes(champion.id)) return [3858, 2003];

    if (champion.info.attack > champion.info.magic) return [3862, 2003];

    return [3850, 2003];
  }

  if (ChampionStatistics[0][champion.id].line === "top") {
    // prettier-ignore
    const dSwordTops = ["Fiora", "Gnar", "Graves", "Irelia", "Jax", "Jayce", "Kayle", "Kennen", "Kled", "Olaf", "Quinn", "Renekton", "Rengar", "Trundle", "Urgot", "Vayne", "Warwick", "Wukong", "Yasuo", "Yone"];
    // prettier-ignore
    const dRingTops = ["Gragas", "Gwen", "Heimerdinger", "Lillia", "Rumble", "Swain", "Teemo", "Vladimir", "Volibear"];
    // prettier-ignore
    const corruptPotionTops = ["Gangplank", "Illaoi", "Malphite", "Pantheon", "Poppy"];

    if (champion.id === "Riven") return [1036, 2003];
    if (champion.id === "Ryze") return [3070, 2003];

    if (dSwordTops.includes(champion.id)) return [1055, 2003];
    if (dRingTops.includes(champion.id)) return [1056, 2003];
    if (corruptPotionTops.includes(champion.id)) return [2033];

    return [1054, 2003];
  }

  if (ChampionStatistics[0][champion.id].line === "mid") {
    // prettier-ignore
    const dShieldMids = ["Akali", "Garen", "Kassadin", "Sett", "Tryndarmere", "Viego", "Yone"];
    const togMids = ["Cassiopeia", "Corki", "Ryze"];
    // prettier-ignore
    const corruptPotionMids = ["Fizz", "Gangplank", "Malphite", "Pantheon", "TwistedFate"];
    const sealMids = ["Katarina", "Vladimir"];
    const swordRefillMids = ["Jayce", "Talon"];
    const swordPotsMids = ["Qiyana", "Zed"];

    // champion.json 데이터에 자체적 결함으로 분류가 되지 않기 때문에 예외 처리
    if (champion.id === "Akshan") return [1055, 2003];

    if (corruptPotionMids.includes(champion.id)) return [2033];
    if (dShieldMids.includes(champion.id)) return [1054, 2003];
    if (togMids.includes(champion.id)) return [3070, 2003];
    if (sealMids.includes(champion.id)) return [1082, 2031];
    if (swordPotsMids.includes(champion.id)) return [1036, 2003];
    if (swordRefillMids.includes(champion.id)) return [1036, 2031];

    if (champion.info.attack > champion.info.magic) return [1055, 2003];
    if (champion.info.attack <= champion.info.magic) return [1056, 2003];
  }
}

/**
 * 현재 선택된 챔피언이 주로 사용하는 소환사 주문을 추천해줍니다.
 * 정글러는 소환사 주문 "강타"를 필수로 가지고 있습니다.
 * @param {currentChamp} currentChamp 현재 선택된 챔피언(props)
 * @returns 각 소환사주문의 id(String)를 포함한 배열
 */
function recommendSpells(champion) {
  if (ChampionStatistics[0][champion.id].line === "jungle") {
    const ghostJunglers = ["Hecarim", "Mordekaiser", "Udyr"];

    if (ghostJunglers.includes(champion.id))
      return ["SummonerSmite", "SummonerHaste"];

    if (champion.id === "Karthus") return ["SummonerSmite", "SummonerExhaust"];

    if (champion.id === "Shaco") return ["SummonerSmite", "SummonerDot"];

    return ["SummonerSmite", "SummonerFlash"];
  }

  if (ChampionStatistics[0][champion.id].line === "support") {
    // prettier-ignore
    const exhaustSupports = ["Ashe","Janna","Senna","Sona","Soraka","Xerath"];

    if (exhaustSupports.includes(champion.id))
      return ["SummonerExhaust", "SummonerFlash"];

    if (champion.id === "Yuumi") return ["SummonerExhaust", "SummonerDot"];
  }

  if (ChampionStatistics[0][champion.id].line === "adc") {
    return ["SummonerHeal", "SummonerFlash"];
  }

  if (ChampionStatistics[0][champion.id].line === "top") {
    const igniteTPs = ["Akali", "Camille", "Gwen"];
    const ghostTPs = ["Nasus"];
    const ghostTop = ["Darius", "Olaf", "Singed", "Tryndamere"];
    // prettier-ignore
    const igniteTop = ["Garen","Kled","Quinn","Renekton","Riven","Sett","Teemo"];
    if (igniteTPs.includes(champion.id))
      return ["SummonerTeleport", "SummonerDot"];

    if (ghostTPs.includes(champion.id))
      return ["SummonerTeleport", "SummonerHaste"];

    if (ghostTop.includes(champion.id))
      return ["SummonerFlash", "SummonerHaste"];

    if (igniteTop.includes(champion.id))
      return ["SummonerDot", "SummonerFlash"];

    return ["SummonerTeleport", "SummonerFlash"];
  }

  if (ChampionStatistics[0][champion.id].line === "mid") {
    // prettier-ignore
    const tpMids = ["Anivia","Azir","Cassiopeia","Chogath","Corki","Galio","Kassadin","Lissandra","Malzahar","Orianna","Syndra","TwistedFate","Veigar","Viktor","Ziggs"];

    if (tpMids.includes(champion.id))
      return ["SummonerTeleport", "SummonerFlash"];

    return ["SummonerDot", "SummonerFlash"];
  }

  return ["SummonerDot", "SummonerFlash"];
}

/**
 * 현재 선택된 챔피언이 주로 사용하는 신발을 추천해줍니다.
 * 데이터가 가지고 있던 "tags" 속성을 활용해 1차적으로 분류하고
 * 성향에서 예외성을 가진 챔피언들에 맞춰 신발을 추천해줍니다.
 * @param {currentChamp} currentChamp 현재 선택된 챔피언(props)
 * @returns 신발 아이템의 id(Number)
 */
function recommendBoots(champion) {
  if (champion.tags[0] === "Support") {
    const swiftnessSupports = ["Bard"];
    const mobilitySupports = ["Pyke", "Thresh"];
    const tankSupports = ["Braum", "TahmKench", "Taric"];

    if (swiftnessSupports.includes(champion.id)) return 3009;

    if (mobilitySupports.includes(champion.id)) return 3117;

    if (tankSupports.includes(champion.id)) return 3020;

    return 3158;
  }

  if (champion.tags[0] === "Mage") {
    const ionianMages = ["Karma", "Seraphine"];

    if (ionianMages.includes(champion.id)) return 3158;

    if (champion.id === "Cassiopeia") return null;

    return 3020;
  }

  if (champion.tags[0] === "Tank") {
    const mobilityTanks = ["Alistar", "Blitzcrank"];
    const mageTanks = ["Galio"];
    const swiftnessTanks = ["Singed"];

    if (mobilityTanks.includes(champion.id)) return 3117;

    if (mageTanks.includes(champion.id)) return 3020;

    if (swiftnessTanks.includes(champion.id)) return 3009;

    return 3047;
  }

  if (champion.tags[0] === "Assassin") {
    const ionianAssassin = ["Qiyana", "Rengar", "Khazix", "Talon", "Zed"];
    const platedAssassin = ["Viego"];

    if (ionianAssassin.includes(champion.id)) return 3158;

    if (platedAssassin.includes(champion.id)) return 3047;

    if (champion.info.magic >= champion.info.attack) return 3020;

    if (champion.info.magic < champion.info.attack) return 3006;
  }

  if (champion.tags[0] === "Marksman") {
    const ionianMarksman = ["Ezreal"];
    const swiftnessMarksman = ["Jhin", "Senna"];
    const mageMarksman = ["Teemo"];

    if (ionianMarksman.includes(champion.id)) return 3158;

    if (swiftnessMarksman.includes(champion.id)) return 3009;

    if (mageMarksman.includes(champion.id)) return 3020;

    return 3006;
  }

  if (champion.tags[0] === "Fighter") {
    const swiftnessFighter = ["Udyr"];
    const mageFighter = ["Diana", "Rumble", "Shyvana"];
    // prettier-ignore
    const ionianFighter = ["Jayce","Kayn","Lillia","Riven","Skarner","Gangplank","Gragas"];
    const berserkerFighter = ["Garen", "Kayle", "Nilah", "Tryndamere", "Yasuo"];

    if (swiftnessFighter.includes(champion.id)) return 3009;

    if (mageFighter.includes(champion.id)) return 3020;

    if (ionianFighter.includes(champion.id)) return 3158;

    if (berserkerFighter.includes(champion.id)) return 3006;

    return 3047;
  }
}

/**
 * 현재 선택된 챔피언에게 ChamptionStatistics로부터 가져온 데이터를 기반으로
 * 알맞는 스킬의 이미지의 링크명을 반환합니다.
 * 해당 과정이 필요한 이유는 특정 챔피언들의 이미지 링크가 API에서
 * '챔피언이름Q'가 아닌 불규칙적인 링크 이름이 주어졌기 때문입니다.
 * @param {*} skill_tree ChamptionStatistics로부터 가져온 데이터
 * @param {*} currentChamp 현재 선택된 챔피언(props)
 * @returns
 */
function getSkillImages(skill_tree, currentChamp) {
  let rtnArr = [];
  for (let i = 0; i < skill_tree.length; i++) {
    if (skill_tree[i] === "Q") {
      rtnArr.push(currentChamp.spells[0].image.full);
    } else if (skill_tree[i] === "W") {
      rtnArr.push(currentChamp.spells[1].image.full);
    } else {
      rtnArr.push(currentChamp.spells[2].image.full);
    }
  }
  return rtnArr;
}
