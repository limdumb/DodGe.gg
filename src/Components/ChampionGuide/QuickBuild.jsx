import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30%;
  display: flex;

  @media only screen and (min-width: 768px) {
    border: solid black 1px;
    width: 35vw;
    height: 7.5vh;
  }
`;

const Skill__Tree__Container = styled.div`
  flex: 4;
  margin: 5px 2.5px;
`;

const Skill__Tree = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Skill__Box = styled.div`
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

const Recommend__Spell = styled.div`
  flex: 2;
  margin: 5px 2.5px;
`;

const Spell__Container = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-around;
`;

const Spell__Box = styled.div`
  width: 45%;
  height: 100%;
  text-align: center;
  border: solid gray 1px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const Start__Item = styled.div`
  flex: 2;
  margin: 5px 2.5px;
`;

const Item__Container = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-around;
`;

const Item__Box = styled.div`
  width: 45%;
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
    top: 60%;
    right: 0;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Boots = styled.div`
  flex: 2;
  text-align: center;
  margin: 5px 2.5px;
`;

const Core__Item = styled.div`
  flex: 3;
  margin: 5px 2.5px;
`;

export default function QuickBuild() {
  const championImagesURL =
    "http://ddragon.leagueoflegends.com/cdn/12.21.1/img";
  return (
    <Container>
      <Skill__Tree__Container>
        <h6>스킬 마스터 추천 순서</h6>
        <Skill__Tree>
          <Skill__Box>
            <span>E</span>
            <img src={`${championImagesURL}/spell/LuluE.png`}></img>
          </Skill__Box>
          <span> ͢ </span>
          <Skill__Box>
            <span>W</span>
            <img src={`${championImagesURL}/spell/LuluW.png`}></img>
          </Skill__Box>
          <span> ͢ </span>
          <Skill__Box>
            <span>Q</span>
            <img src={`${championImagesURL}/spell/LuluQ.png`}></img>
          </Skill__Box>
        </Skill__Tree>
      </Skill__Tree__Container>

      <Recommend__Spell>
        <h6>추천 스펠</h6>
        <Spell__Container>
          <Spell__Box>
            <img src={`${championImagesURL}/spell/SummonerFlash.png`}></img>
          </Spell__Box>
          <Spell__Box>
            <img src={`${championImagesURL}/spell/SummonerDot.png`}></img>
          </Spell__Box>
        </Spell__Container>
      </Recommend__Spell>

      <Start__Item>
        <h6>시작 아이템</h6>
        <Item__Container>
          <Item__Box>
            <img src={`${championImagesURL}/item/3850.png`}></img>
          </Item__Box>
          <Item__Box>
            <img src={`${championImagesURL}/item/2003.png`}></img>
            <span>2x</span>
          </Item__Box>
        </Item__Container>
      </Start__Item>

      <Boots>
        <h6>신발</h6>
        <Item__Container>
          <Item__Box>
            <img src={`${championImagesURL}/item/3158.png`}></img>
          </Item__Box>
        </Item__Container>
      </Boots>

      <Core__Item>
        <h6>코어템</h6>
        <Item__Container>
          <Item__Box>
            <img src={`${championImagesURL}/item/2065.png`}></img>
          </Item__Box>
          <span> ͢ </span>
          <Item__Box>
            <img src={`${championImagesURL}/item/3011.png`}></img>
          </Item__Box>
          <span> ͢ </span>
          <Item__Box>
            <img src={`${championImagesURL}/item/3504.png`}></img>
          </Item__Box>
        </Item__Container>
      </Core__Item>
    </Container>
  );
}
