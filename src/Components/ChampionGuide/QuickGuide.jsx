import styled from "styled-components";
import QuickBuild from "./QuickBuild";

const Container = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (min-width: 768px) {
    width: 40vw;
    height: 30vh;
    margin: 2.5vh 1vw;
    padding: 2.25vw;
    border: solid green 1px;
    flex-wrap: wrap;
  }
`;

const Champion__Portrait = styled.div`
  width: 40%;
  height: 65%;

  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 768px) {
    width: 12.5vw;
    height: 12.5vh;
    margin-right: 2.5vw;
  }
`;

const Information = styled.div`
  width: 60%;
  height: 65%;
  text-align: center;
  border-bottom: 1px violet solid;

  h2 {
    font-size: 2rem;
  }

  p {
    padding: 2px;
    text-overflow: ellipsis;
    width: 100%;
    height: 80%;
    overflow: hidden;
  }

  @media only screen and (min-width: 768px) {
    width: 20vw;
    height: 12.5vh;
    border: solid black 1px;
  }
`;

export default function QuickGuide() {
  const championImagesURL =
    "http://ddragon.leagueoflegends.com/cdn/12.21.1/img";
  return (
    <Container>
      <Champion__Portrait>
        <img src={`${championImagesURL}/champion/Lulu.png`}></img>
      </Champion__Portrait>
      <Information>
        <h2>룰루, 요정 마법사</h2>
        <p>
          요들 마법사 룰루는 친구인 요정 픽스와 함께 룬테라를 돌아다니며,
          꿈결같은 환상과 상상 속에서나 존재할 법한 생명체를 만들어내는 것으로
          유명하다. 룰루는 내키는 대로 현실을 빚어내고, 세상의 법칙을 비틀어
          버린다. 룰루가 보기에 이 세상의 물리 법칙에 따르는 제약은 시시하고
          따분하다. 룰루의 마법은 좋게 본다 해도 비정상적이고 나쁘게 보면
          위험하다고까지 할 수도 있겠지만, 룰루의 신념은 확고하다. 사람들에게
          마법 한 번씩 맛보여 주는 게 뭐 그리...
        </p>
      </Information>
      <QuickBuild />
    </Container>
  );
}
