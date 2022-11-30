import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 35%;
  display: flex;

  h6 {
    font-size: 0.9rem;
    font-weight: bold;
  }

  @media only screen and (min-width: 768px) {
    border: solid rgba(0, 0, 0, 0.2) 1px;
    width: 100%;
    height: 45%;
    padding: 10% 0;

    h6 {
      font-size: 0.4rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 12.5vh;
    padding: 0;
  }
`;

const Skill_Tree_Container = styled.div`
  flex: 4;
  margin: 5px 2.5px;
`;

const Skill_Tree = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Skill_Box = styled.div`
  width: 30%;
  height: 100%;
  text-align: center;
  border: solid gray 1px;
  position: relative;

  span {
    position: absolute;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

const Recommend_Spell = styled.div`
  flex: 2;
  margin: 5px 2.5px;
`;

const Spell_Container = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-around;
`;

const Spell_Box = styled.div`
  width: 45%;
  height: 100%;
  text-align: center;
  border: solid gray 1px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const Start_Item = styled.div`
  flex: 2;
  margin: 5px 2.5px;
`;

const Item_Container = styled.div`
  height: 70%;
  display: flex;
`;

const Item_Box = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  border: solid gray 1px;
  position: relative;

  img {
    height: 100%;
    width: 100%;
  }

  span {
    position: absolute;
    height: 35%;
    top: 65%;
    right: 0;
    color: white;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media only screen and (min-width: 768px) {
    span {
      width: 60%;
      top: 55%;
      right: 15%;
      font-size: 0.7rem;
    }
  }
`;

const Boots = styled.div`
  flex: 1;
  text-align: center;
  margin: 5px 2.5px;
`;

const Core_Item = styled.div`
  flex: 3;
  margin: 5px 2.5px;
`;

export default function QuickBuild() {
  const championImagesURL =
    "http://ddragon.leagueoflegends.com/cdn/12.21.1/img";
  return (
    <Container>
      <Skill_Tree_Container>
        <h6>스킬 마스터 추천 순서</h6>
        <Skill_Tree>
          <Skill_Box>
            <span>E</span>
            <img src={`${championImagesURL}/spell/LuluE.png`}></img>
          </Skill_Box>
          <span> ͢ </span>
          <Skill_Box>
            <span>W</span>
            <img src={`${championImagesURL}/spell/LuluW.png`}></img>
          </Skill_Box>
          <span> ͢ </span>
          <Skill_Box>
            <span>Q</span>
            <img src={`${championImagesURL}/spell/LuluQ.png`}></img>
          </Skill_Box>
        </Skill_Tree>
      </Skill_Tree_Container>

      <Recommend_Spell>
        <h6>추천 스펠</h6>
        <Spell_Container>
          <Spell_Box>
            <img src={`${championImagesURL}/spell/SummonerFlash.png`}></img>
          </Spell_Box>
          <Spell_Box>
            <img src={`${championImagesURL}/spell/SummonerDot.png`}></img>
          </Spell_Box>
        </Spell_Container>
      </Recommend_Spell>

      <Start_Item>
        <h6>시작 아이템</h6>
        <Item_Container>
          <Item_Box>
            <img src={`${championImagesURL}/item/3850.png`}></img>
          </Item_Box>
          <Item_Box>
            <img src={`${championImagesURL}/item/2003.png`}></img>
            <span>2x</span>
          </Item_Box>
        </Item_Container>
      </Start_Item>

      <Boots>
        <h6>신발</h6>
        <Item_Container>
          <Item_Box>
            <img src={`${championImagesURL}/item/3158.png`}></img>
          </Item_Box>
        </Item_Container>
      </Boots>

      <Core_Item>
        <h6>코어템</h6>
        <Item_Container>
          <Item_Box>
            <img src={`${championImagesURL}/item/2065.png`}></img>
          </Item_Box>
          <span> ͢ </span>
          <Item_Box>
            <img src={`${championImagesURL}/item/3011.png`}></img>
          </Item_Box>
          <span> ͢ </span>
          <Item_Box>
            <img src={`${championImagesURL}/item/3504.png`}></img>
          </Item_Box>
        </Item_Container>
      </Core_Item>
    </Container>
  );
}
