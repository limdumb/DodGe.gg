import styled from "styled-components";
import QuickGuide from "./QuickGuide";
import DetailedGuide from "./DetailedGuide";
import CountersList from "./CountersList";
import { useState, useEffect } from "react";
import { fetchChampData } from "../../API/RiotAPI";

const Main_Container = styled.div`
  height: 100%;
  width: 100%;

  .Guides_Container {
    background-color: bisque;
  }

  @media only screen and (min-width: 1024px) {
    width: 50vw;
    display: flex;
  }
`;

export default function ChampionGuide() {
  // 임시 데이터 설정: 이후 데이터를 props를 통해 받아올 때 삭제 현재 임시 데이터는 삭제
  const champName = "Anivia";
  const [currentChamp, setCurrentChamp] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetchChampData(champName).then((val) => {
      setIsPending(false);
      setCurrentChamp(val[0][champName]);
    });
  }, []);

  return (
    <Main_Container>
      {isPending && <div> Loading ... </div>}
      <div className="Guides_Container">
        {currentChamp && <QuickGuide currentChamp={currentChamp} />}
        {currentChamp && <DetailedGuide currentChamp={currentChamp} />}
      </div>
      {/* <CountersList currentChamp={currentChamp} /> */}
    </Main_Container>
  );
}
