import styled from "styled-components";
import DetailedData from "./Data/DetailedData.json";
import { champName } from "../../API/RiotAPI";

const Container = styled.div`
  background-color: bisque;
  display: flex;
  flex-wrap: wrap;

  .Header {
    width: 100%;
    height: 50px;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .Counter_List {
    height: 100%;
    width: 100%;
  }

  .Counter_List_Item {
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    border-bottom: solid gray 1px;

    div {
      height: 100%;
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      height: 50px;
      border-radius: 50%;
    }

    .Counter_Win_Rate {
      color: red;
    }
  }
`;

export default function CountersList({ currentChamp }) {
  return (
    <Container>
      <div className="Header">카운터 리스트</div>
      <ul className="Counter_List">
        <CounterItem currentChamp={currentChamp} idx={0} />
        <CounterItem currentChamp={currentChamp} idx={1} />
        <CounterItem currentChamp={currentChamp} idx={2} />
        <CounterItem currentChamp={currentChamp} idx={3} />
        <CounterItem currentChamp={currentChamp} idx={4} />
      </ul>
    </Container>
  );
}

function CounterItem(props) {
  const ImagesURL = "http://ddragon.leagueoflegends.com/cdn/12.21.1/img";

  return (
    <li className="Counter_List_Item" key={props.idx}>
      <div className="Flex_Wrapper">
        <img
          src={`${ImagesURL}/champion/${
            DetailedData[0][props.currentChamp.id].counter_list[props.idx]
              .name_en
          }.png`}
        ></img>
      </div>
      <div className="Flex_Wrapper">
        {DetailedData[0][props.currentChamp.id].counter_list[props.idx].name_kr}
      </div>
      <div className="Flex_Wrapper Counter_Win_Rate">
        {
          DetailedData[0][props.currentChamp.id].counter_list[props.idx]
            .counter_win_rate
        }
      </div>
      <div className="Flex_Wrapper">
        {
          DetailedData[0][props.currentChamp.id].counter_list[props.idx]
            .game_count
        }{" "}
        게임
      </div>
    </li>
  );
}
