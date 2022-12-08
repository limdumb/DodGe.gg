import styled from "styled-components";
import { RiArrowRightSFill } from "react-icons/ri";
import DetailedData from "./Data/DetailedData.json";

const Container = styled.div`
  height: 225px;
  display: flex;
  flex-wrap: wrap;

  .Recommend_Container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 33.333%;
    border-bottom: solid rgba(0, 0, 0, 0.25) 1px;

    :nth-child(1) {
      width: 70%;
    }

    :nth-child(2) {
      width: 30%;
    }

    :nth-child(3) {
      width: 30%;
    }

    :nth-child(4) {
      width: 20%;
    }

    :nth-child(5) {
      width: 50%;
    }

    h6 {
      font-size: 20px;
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
    height: 50px;
  }
`;

export default function QuickBuild({ currentChamp }) {
  // 임시 데이터 설정: 이후 데이터를 props를 통해 받아올 때 삭제 현재 임시 데이터는 삭제
  const startItem = recommendStart(currentChamp);
  const startBoots = recommendBoots(currentChamp);
  const skillImages = getSkillImages(
    DetailedData[0][currentChamp.id].skill_tree,
    currentChamp
  );
  const ImagesURL = "http://ddragon.leagueoflegends.com/cdn/12.23.1/img";
  return (
    <Container>
      <div className="Recommend_Container">
        <h6>스킬 마스터 추천 순서</h6>
        <div className="Box_Container">
          <div className="Item_Box">
            <span className="Skill_Key">
              {DetailedData[0][currentChamp.id].skill_tree[0]}
            </span>
            <img src={`${ImagesURL}/spell/${skillImages[0]}`}></img>
          </div>
          <RiArrowRightSFill />
          <div className="Item_Box">
            <span className="Skill_Key">
              {DetailedData[0][currentChamp.id].skill_tree[1]}
            </span>
            <img src={`${ImagesURL}/spell/${skillImages[1]}`}></img>
          </div>
          <RiArrowRightSFill />
          <div className="Item_Box">
            <span className="Skill_Key">
              {DetailedData[0][currentChamp.id].skill_tree[2]}
            </span>
            <img src={`${ImagesURL}/spell/${skillImages[2]}`}></img>
          </div>
        </div>
      </div>

      <div className="Recommend_Container">
        <h6>추천 스펠</h6>
        <div className="Box_Container">
          <div className="Item_Box">
            <img src={`${ImagesURL}/spell/SummonerFlash.png`}></img>
          </div>
          <div className="Item_Box">
            <img src={`${ImagesURL}/spell/SummonerDot.png`}></img>
          </div>
        </div>
      </div>

      <div className="Recommend_Container">
        <h6>시작 아이템</h6>
        <div className="Box_Container">
          <div className="Item_Box">
            <img src={`${ImagesURL}/item/${startItem}.png`}></img>
          </div>
          <div className="Item_Box">
            <img src={`${ImagesURL}/item/2003.png`}></img>
            <span className="Item_Count">2x</span>
          </div>
        </div>
      </div>

      <div className="Recommend_Container">
        <h6>신발</h6>
        <div className="Box_Container">
          <div className="Item_Box">
            <img src={`${ImagesURL}/item/3111.png`}></img>
          </div>
        </div>
      </div>

      <div className="Recommend_Container">
        <h6>코어템</h6>
        <div className="Box_Container">
          <div className="Item_Box">
            <img
              src={`${ImagesURL}/item/${
                DetailedData[0][currentChamp.id].core_items[0]
              }.png`}
            ></img>
          </div>
          <RiArrowRightSFill />
          <div className="Item_Box">
            <img
              src={`${ImagesURL}/item/${
                DetailedData[0][currentChamp.id].core_items[1]
              }.png`}
            ></img>
          </div>
          <RiArrowRightSFill />
          <div className="Item_Box">
            <img
              src={`${ImagesURL}/item/${
                DetailedData[0][currentChamp.id].core_items[2]
              }.png`}
            ></img>
          </div>
        </div>
      </div>
    </Container>
  );
}

/**
 * 입력받은 Tags 배열 안의 직업군을 분석해 해당 직업군에 "걸맞는" 아이템 빌드를 추천해줍니다.
 *
 * 1. 데이터의 직업군에 서포터가 포함된 경우 :
 * 주문도둑검, 유물방패, 영혼의 낫, 강철 어깨 보호대 ("3850", "3858", "3862", "3854") 중 하나
 * 2. 데이터의 직업군이 서포터가 아닐 때 :
 * 도란 쉴드, 도란 검, 도란 링 ("1054", "1055", "1056") 중 하나
 * 3. 정글이 주요 픽이라면: => 이 부분은 정확히 판단 내릴 지표가 없기 때문에 현재로선 수기로 작성
 * 화염발톱, 바람돌이, 이끼쿵쿵이 ("1101", "1102", "1103") 중 하나
 *
 * Tags는 2개 이상의 직업군을 포함하지 않음으로 첫번째 직업군 비교 후 추천
 *
 * 암흑의 인장, 여신의 눈물, 수확의 낫 등은 제외합니다.
 * 체력 포션 2개는 고정되어 있다는 전제 하에 진행하기 때문에 첫 추천 아이템이 무엇인지만 정합니다.
 * */
function recommendStart(champion) {
  if (champion.tags[0] === "Support") {
    if (champion.id === "Ivern") {
      return "1102";
    }
    if (champion.tags[1] === "Mage") {
      return "3850";
    }

    if (
      (champion.tags[1] === "Tank" || champion.tags[1] === "Fighter") &&
      champion.attack < champion.magic
    ) {
      return "3858";
    }

    if (
      (champion.tags[1] === "Tank" || champion.tags[1] === "Fighter") &&
      champion.attack >= champion.magic
    ) {
      return "3854";
    }

    if (champion.tags[1] === "Marksman" || champion.tags[1] === "Assassin") {
      return "3862";
    }

    return "3854";
  }

  if (champion.tags[0] === "Mage") {
    const exceptions = ["Anivia", "Neeko", "Oriana", "Taliyah", "Zoe"];
    if (
      champion.tags[1] === "Support" &&
      exceptions.includes(champion.id) === false
    ) {
      return "3850";
    }
    if (champion.id === "Brand") {
      return "3850";
    }
    if (champion.id === "Taliyah") {
      return "1102";
    }
    return "1056";
  }

  if (champion.tags[0] === "Tank") {
    const tankSupports = ["Amumu", "Blitzcrank", "Maokai"];
    const tankJunglers = [
      "JarvanIV",
      "Nunu",
      "Poppy",
      "Rammus",
      "Sejuani",
      "Zac",
    ];

    if (champion.tags[1] === "Support" || tankSupports.includes(champion.id)) {
      return "3858";
    }

    if (champion.tags[1] === "Mage") {
      return "1056";
    }

    if (tankJunglers.includes(champion.id)) {
      return "1103";
    }

    return "1054";
  }

  if (champion.tags[0] === "Assassin") {
    const mageJunglers = ["Evelyn", "Nidalee"];
    if (champion.tags[1] === "Fighter") {
      if (champion.id === "Fizz") {
        return "1056";
      } else if (champion.id === "Yone") {
        return "1055";
      }
      if (champion.magic >= champion.attack) {
        return "1102";
      }
      return "1101";
    }
    if (champion.tags[1] === "Mage") {
      if (mageJunglers.includes(champion.id)) {
        return "1102";
      }
      return "1056";
    }
  }

  if (champion.tags[0] === "Marksman") {
    if (champion.tags[1] === "Support") {
      return "3862";
    }
    if (champion.id === "Teemo") {
      return "1056";
    }
    if (champion.id === "Kindred" || champion.id === "Graves") {
      return "1101";
    }
    return "1055";
  }

  if (champion.tags[0] === "Fighter") {
    const fighterJunglers = [
      "Belveth",
      "Diana",
      "Hecarim",
      "Kayn",
      "LeeSin",
      "Lillia",
      "MonkeyKing",
      "Shyvana",
      "Skarner",
      "Trundle",
      "Udyr",
      "Vi",
      "Warwick",
      "Xinzhao",
    ];
    if (fighterJunglers.includes(champion.id)) {
      if (champion.magic > champion.attack) {
        return "1102";
      }
      return "1101";
    }
    if (champion.magic >= champion.attack) {
      return "1056";
    }
    return "1055";
  }
}

/**
 * 챔피언의 성향에 맞춰 추천 신발 이미지의 문자열을 반환합니다.
 *
 * 광전사, 신속, 마법사, 판금장화, 헤르메스, 아이오니아, 기동력
 * ("3006", "3009", "3020", "3047", "3111", "3158", "3117")
 * 중 하나를 추천합니다.
 *
 * 신발 추천의 기준이 다르기 때문에 분류를 달리합니다.
 */
function recommendBoots(champion) {
  if (champion.tags[0] === "Support") {
  }

  if (champion.tags[0] === "Mage") {
  }

  if (champion.tags[0] === "Tank") {
  }

  if (champion.tags[0] === "Marksman") {
  }

  if (champion.tags[0] === "Fighter") {
  }
}

/**
 * 제공된 "스킬 마스터 추천 순서" 데이터에 따른 이미지 링크를 불러옵니다.
 * 해당 과정이 필요한 이유는 특정 챔피언들의 이미지 링크가 API에서
 * '챔피언이름Q'가 아닌 불규칙적인 링크 이름이 주어졌기 때문입니다.
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
