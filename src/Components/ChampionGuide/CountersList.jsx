import styled from "styled-components";

const Container = styled.div`
  display: none;
  @media only screen and (min-width: 1024px) {
    display: block;
    width: 30%;
    height: 100%;
    background-color: burlywood;
    display: flex;
    flex-wrap: wrap;

    .Header {
      text-align: center;
      font-weight: bold;
      width: 100%;
      height: 50px;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

const Counter__List = styled.ul`
  height: 100%;
  width: 100%;
  padding: 0 5px;
`;

const Counter__Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 0.9rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .Win__Rate {
    color: red;
  }
`;

export default function CountersList() {
  const championImagesURL =
    "http://ddragon.leagueoflegends.com/cdn/12.21.1/img";
  return (
    <Container>
      <div className="Header">카운터</div>
      <Counter__List>
        <Counter__Item>
          <img src={`${championImagesURL}/champion/Sona.png`}></img>
          <div>
            <p className="Win__Rate"> 45.56%</p>
            <p> 2,026 게임 </p>
          </div>
        </Counter__Item>
        <Counter__Item>
          <img src={`${championImagesURL}/champion/Fiddlesticks.png`}></img>
          <div>
            <p className="Win__Rate"> 45.64%</p>
            <p> 390 게임 </p>
          </div>
        </Counter__Item>
        <Counter__Item>
          <img src={`${championImagesURL}/champion/Velkoz.png`}></img>
          <div>
            <p className="Win__Rate"> 45.7%</p>
            <p> 1,140 게임 </p>
          </div>
        </Counter__Item>
      </Counter__List>
    </Container>
  );
}
