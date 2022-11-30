import styled from "styled-components";
import QuickBuild from "./QuickBuild";

const Container = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;

  .Champion_Portrait {
    width: 40%;
    height: 65%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .Champion_Info {
    width: 60%;
    height: 65%;
    text-align: center;
    border-bottom: 1px gray solid;

    h2 {
      font-size: 2rem;
      font-weight: bold;
    }

    p {
      padding: 1%;
      width: 100%;
      height: 80%;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 35%;
    margin-top: 5%;

    .Champion_Portrait {
      height: 50%;
    }

    .Champion_Info {
      border: solid rgba(0, 0, 0, 0.2) 1px;
      height: 50%;

      h2 {
        font-size: 0.9rem;
      }
      p {
        font-size: 0.6rem;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 50%;
    margin-top: 2.5%;
  }
`;

export default function QuickGuide() {
  const championImagesURL =
    "http://ddragon.leagueoflegends.com/cdn/12.21.1/img";
  return (
    <Container>
      <div className="Champion_Portrait">
        <img src={`${championImagesURL}/champion/Lulu.png`}></img>
      </div>
      <div className="Champion_Info">
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
      </div>
      <QuickBuild />
    </Container>
  );
}
