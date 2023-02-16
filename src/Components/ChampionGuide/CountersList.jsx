import styled from "styled-components";
import ChampionStatistics from "./Data/ChampionStatistics.json";

const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  .Header {
    width: 90%;
    font-size: 24px;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 10px;
    background: transparent;
    border-bottom: ${(props) =>
      props.darkMode
        ? "3px solid rgb(120, 220, 180)"
        : " 3px solid rgb(255, 210, 90)"};
  }

  .Counter_List {
    padding: 0;
    margin: 0;
    width: 100%;
    background-color: ${(props) =>
      props.darkMode ? "rgba(41, 171, 226, 0.2)" : "rgba(198, 156, 109, 0.2)"};
  }

  .Trapezoid {
    margin: 0 auto;
    width: 40%;
    border-top: ${(props) =>
      props.darkMode
        ? "12.5px solid rgb(120, 220, 180)"
        : "12.5px solid rgb(255, 210, 90)"};
    border-left: 7.5px solid transparent;
    border-right: 7.5px solid transparent;
  }

  .Counter_List_Item {
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    border-bottom: ${(props) =>
      props.darkMode
        ? "solid 1px rgba(120, 220, 180, 0.5)"
        : "solid 1px rgba(255, 210, 90, 0.5)"};

    div {
      height: 100%;
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      height: 45px;
      border-radius: 10%;
    }

    .Counter_Name {
      color: white;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 715px;

    .Header {
      font-size: 28px;
    }

    .Counter_List_Item {
      font-size: 22px;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 560px;
  }
`;

export default function CountersList({ currentChamp, darkMode }) {
  return (
    <Container darkMode={darkMode}>
      <div className="Header">카운터 리스트</div>
      <ul className="Counter_List">
        <div className="Trapezoid"></div>
        {ChampionStatistics[0][currentChamp.id].counter_list.map((a, idx) => {
          return (
            <CounterChampion key={idx} currentChamp={currentChamp} idx={idx} />
          );
        })}
      </ul>
    </Container>
  );
}

function CounterChampion({ currentChamp, idx }) {
  const baseURL = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img";
  return (
    <li className="Counter_List_Item" key={idx}>
      <div>
        <img
          src={`${baseURL}/champion/${
            ChampionStatistics[0][currentChamp.id].counter_list[idx].name_en
          }.png`}
        ></img>
      </div>
      <div className="Counter_Name">
        {ChampionStatistics[0][currentChamp.id].counter_list[idx].name_kr}
      </div>
      <div>
        {
          ChampionStatistics[0][currentChamp.id].counter_list[idx]
            .counter_win_rate
        }
      </div>
      <div>
        {ChampionStatistics[0][currentChamp.id].counter_list[idx].game_count}{" "}
        게임
      </div>
    </li>
  );
}
