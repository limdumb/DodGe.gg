import styled from "styled-components";
import { RiArrowRightSFill } from "react-icons/ri";
import { champName, fetchChampData } from "../../API/RiotAPI";

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;

  @media only screen and (min-width: 768px) {
    align-items: center;
    height: 150px;
  }
`;

const Recommend_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: 1.5px;

  h6 {
    font-size: 10.5px;
    font-weight: bold;
  }

  @media only screen and (min-width: 768px) {
    height: 100px;
    width: fit-content;

    h6 {
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

const Box_Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

const Item_Box = styled.div`
  height: 30px;
  margin: 0 2.5px;
  position: relative;

  img {
    height: 100%;
  }

  span.Skill_Key {
    position: absolute;
    font-size: 12px;
    font-weight: bold;
    color: white;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  span.Item_Count {
    position: absolute;
    height: 10px;
    top: 50%;
    right: 5%;
    color: white;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media only screen and (min-width: 768px) {
    height: 55px;

    span.Skill_Key {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 45px;
    span.Item_Count {
      font-size: 15px;
      top: 55%;
    }
  }
`;

export default function QuickBuild({ currentChamp }) {
  // 임시 데이터 설정: 이후 데이터를 props를 통해 받아올 때 삭제 현재 임시 데이터는 삭제
  const startItem = recommendStart(currentChamp);
  const ImagesURL = "http://ddragon.leagueoflegends.com/cdn/12.21.1/img";
  return (
    <Container>
      <Recommend_Container>
        <h6>스킬 마스터 추천 순서</h6>
        <Box_Container>
          <Item_Box>
            <span className="Skill_Key">Q</span>
            <img
              src={`${ImagesURL}/spell/${currentChamp.spells[0].image.full}`}
            ></img>
          </Item_Box>
          <RiArrowRightSFill />
          <Item_Box>
            <span className="Skill_Key">W</span>
            <img
              src={`${ImagesURL}/spell/${currentChamp.spells[1].image.full}`}
            ></img>
          </Item_Box>
          <RiArrowRightSFill />
          <Item_Box>
            <span className="Skill_Key">E</span>
            <img
              src={`${ImagesURL}/spell/${currentChamp.spells[2].image.full}`}
            ></img>
          </Item_Box>
        </Box_Container>
      </Recommend_Container>

      <Recommend_Container>
        <h6>추천 스펠</h6>
        <Box_Container>
          <Item_Box>
            <img src={`${ImagesURL}/spell/SummonerFlash.png`}></img>
          </Item_Box>
          <Item_Box>
            <img src={`${ImagesURL}/spell/SummonerDot.png`}></img>
          </Item_Box>
        </Box_Container>
      </Recommend_Container>

      <Recommend_Container>
        <h6>시작 아이템</h6>
        <Box_Container>
          <Item_Box>
            <img src={`${ImagesURL}/item/${startItem}.png`}></img>
          </Item_Box>
          <Item_Box>
            <img src={`${ImagesURL}/item/2003.png`}></img>
            <span className="Item_Count">2x</span>
          </Item_Box>
        </Box_Container>
      </Recommend_Container>

      <Recommend_Container>
        <h6>신발</h6>
        <Box_Container>
          <Item_Box>
            <img src={`${ImagesURL}/item/3158.png`}></img>
          </Item_Box>
        </Box_Container>
      </Recommend_Container>

      <Recommend_Container>
        <h6>코어템</h6>
        <Box_Container>
          <Item_Box>
            <img src={`${ImagesURL}/item/2065.png`}></img>
          </Item_Box>
          <RiArrowRightSFill />
          <Item_Box>
            <img src={`${ImagesURL}/item/3011.png`}></img>
          </Item_Box>
          <RiArrowRightSFill />
          <Item_Box>
            <img src={`${ImagesURL}/item/3504.png`}></img>
          </Item_Box>
        </Box_Container>
      </Recommend_Container>
    </Container>
  );
}

/**
 * 입력받은 Tags 배열 안의 직업군을 분석해 해당 직업군에 "걸맞는" 아이템 빌드를 추천해줍니다.
 * 1. 데이터의 직업군에 서포터가 포함된 경우 :
 * 주문도둑검, 유물방패, 영혼의 낫, 강철 어깨 보호대 ("3850", "3858", "3862", "3854") 중 하나
 * 2. 데이터의 직업군이 서포터가 아닐 때 :
 * 도란 쉴드, 도란 검, 도란 링 ("1054", "1055", "1056") 중 하나
 * 3. 정글이 주요 픽이라면: => 이 부분은 정확히 판단 내릴 지표가 없기 때문에 현재로선 수기로 작성
 * 화염발톱, 바람돌이, 이끼쿵쿵이 ("1101", "1102", "1103") 중 하나
 *
 * Tags는 2개 이상의 직업군을 포함하지 않음으로 첫번째 직업군 비교 후 추천
 *
 * 암흑의 인장, 여신의 눈물, 수확의 낫 등은 제외
 * 체력 포션 2개는 고정되어 있다는 전제 하에 진행하기 때문에 첫 추천 아이템이 무엇인지만 정합니다. */
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
      "Jarvan",
      "Nunu",
      "Poppy",
      "Rammus",
      "Sejuani",
      "Zac",
    ];

    if (champion.tags[1] === "Support" || tankSupports.includes(champion.id)) {
      return "3858";
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
