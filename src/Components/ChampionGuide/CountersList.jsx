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
  }

  .Light {
    border-bottom: 3px solid rgb(255, 210, 90);
  }

  .Dark {
    border-bottom: 3px solid rgb(120, 220, 180);
  }

  .Counter_List {
    padding: 0;
    margin: 0;
    width: 100%;
    background-color: rgba(198, 156, 109, 0.2);
  }

  .Trapezoid_Light {
    margin: 0 auto;
    width: 40%;
    border-top: 12.5px solid rgb(255, 210, 90);
    border-left: 7.5px solid transparent;
    border-right: 7.5px solid transparent;
  }

  .Trapezoid_Dark {
    margin: 0 auto;
    width: 40%;
    border-top: 12.5px solid rgb(120, 220, 180);
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
    border-bottom: solid 1px rgba(255, 210, 90, 0.5);

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

    .Counter_Win_Rate_Light {
      color: rgb(120, 220, 180);
    }

    .Counter_Win_Rate_Dark {
      color: rgb(255, 210, 90);
    }
  }
`;

export default function CountersList({ currentChamp, isDarkMode }) {
  return (
    <Container>
      <div className={isDarkMode ? "Header Dark" : "Header Light"}>
        카운터 리스트
      </div>
      <ul className="Counter_List">
        <div
          className={isDarkMode ? "Trapezoid_Dark" : "Trapezoid_Light"}
        ></div>
        <CounterChampion
          currentChamp={currentChamp}
          isDarkMode={isDarkMode}
          idx={0}
        />
        <CounterChampion
          currentChamp={currentChamp}
          isDarkMode={isDarkMode}
          idx={1}
        />
        <CounterChampion
          currentChamp={currentChamp}
          isDarkMode={isDarkMode}
          idx={2}
        />
        <CounterChampion
          currentChamp={currentChamp}
          isDarkMode={isDarkMode}
          idx={3}
        />
        <CounterChampion
          currentChamp={currentChamp}
          isDarkMode={isDarkMode}
          idx={4}
        />
      </ul>
    </Container>
  );
}

function CounterChampion({ currentChamp, idx, isDarkMode }) {
  const baseURL = "http://ddragon.leagueoflegends.com/cdn/12.21.1/img";
  return (
    <li className="Counter_List_Item" key={idx}>
      <div>
        <img
          src={`${baseURL}/champion/${
            ChampionStatistics[0][currentChamp.id].counter_list[idx].name_en
          }.png`}
        ></img>
      </div>
      <div>
        {ChampionStatistics[0][currentChamp.id].counter_list[idx].name_kr}
      </div>
      <div
        className={
          isDarkMode ? "Counter_Win_Rate_Dark" : "Counter_Win_Rate_Light"
        }
      >
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
