import styled from "styled-components";
import QuickGuide from "./QuickGuide";
import DetailedGuide from "./DetailedGuide";
import { useState, useEffect } from "react";
import { fetchChampData } from "../../API/RiotAPI";

const Main_Container = styled.div`
  width: 100%;

  .Guides_Container {
    background-color: bisque;
  }

  @media only screen and (min-width: 1024px) {
    width: 50vw;
    display: flex;
  }

  .Lack_Of_Data {
    height: 50vh;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0.7;
    background-image: url("http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/AurelionSol.png");
    background-size: cover;
    background-position: center;
  }
`;

export default function ChampionGuide({ champSelected }) {
  const [currentChamp, setCurrentChamp] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetchChampData(champSelected).then((val) => {
      setIsPending(false);
      if (champSelected !== "AurelionSol") {
        setCurrentChamp(val[0][champSelected]);
      }
    });
  }, [champSelected]);

  return (
    <Main_Container>
      {isPending && <div> Loading ... </div>}
      {champSelected === "AurelionSol" ? (
        <div className="Lack_Of_Data">이 챔피언은 데이터가 부족합니다</div>
      ) : (
        <div className="Guides_Container">
          {currentChamp && <QuickGuide currentChamp={currentChamp} />}
          {currentChamp && <DetailedGuide currentChamp={currentChamp} />}
        </div>
      )}
    </Main_Container>
  );
}
