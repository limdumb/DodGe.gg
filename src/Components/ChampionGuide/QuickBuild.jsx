import styled from "styled-components";

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

  span.Arrow {
    font-size: 20px;
    color: blue;
  }

  h6 {
    font-size: 10.5px;
    font-weight: bold;
  }

  @media only screen and (min-width: 768px) {
    height: 100px;
    width: fit-content;

    span.Arrow {
      width: 10px;
      margin: 2.5px;
    }

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

export default function QuickBuild() {
  const ImagesURL = "http://ddragon.leagueoflegends.com/cdn/12.21.1/img";
  return (
    <Container>
      <Recommend_Container>
        <h6>스킬 마스터 추천 순서</h6>
        <Box_Container>
          <Item_Box>
            <span className="Skill_Key">E</span>
            <img src={`${ImagesURL}/spell/LuluE.png`}></img>
          </Item_Box>
          <span className="Arrow"> ͢ </span>
          <Item_Box>
            <span className="Skill_Key">W</span>
            <img src={`${ImagesURL}/spell/LuluW.png`}></img>
          </Item_Box>
          <span className="Arrow"> ͢ </span>
          <Item_Box>
            <span className="Skill_Key">Q</span>
            <img src={`${ImagesURL}/spell/LuluQ.png`}></img>
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
            <img src={`${ImagesURL}/item/3850.png`}></img>
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
          <span className="Arrow"> ͢ </span>
          <Item_Box>
            <img src={`${ImagesURL}/item/3011.png`}></img>
          </Item_Box>
          <span className="Arrow"> ͢ </span>
          <Item_Box>
            <img src={`${ImagesURL}/item/3504.png`}></img>
          </Item_Box>
        </Box_Container>
      </Recommend_Container>
    </Container>
  );
}
