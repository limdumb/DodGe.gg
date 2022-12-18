import styled from "styled-components";
import QuickGuide from "./QuickGuide";
import DetailedGuide from "./DetailedGuide";
import { useState, useEffect } from "react";
import { fetchChampData } from "../../API/RiotAPI";
import lightBG from "./../Assets/LightBG.png";
import darkBG from "./../Assets/DarkBG.png";

const Main_Container = styled.div`
  height: 1650px;

  .Light {
    background-image: url(${lightBG});
    color: rgb(255, 210, 90);
  }

  .Dark {
    background-image: url(${darkBG});
    color: rgb(255, 0, 255);
  }

  @media only screen and (min-width: 768px) {
    height: 1250px;
    .Container {
      height: 100%;
      background-position: center;
      background-size: cover;
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 50vw;
    display: flex;
  }
`;

export default function ChampionGuide({ champSelected }) {
  const [currentChamp, setCurrentChamp] = useState(null);
  const [isPending, setIsPending] = useState(true);
  // 더미 데이터 => 이후 수정 전역 상태로 받아올 예정
  const [isDarkMode, setDarkMode] = useState();

  useEffect(() => {
    fetchChampData(champSelected).then((val) => {
      setIsPending(false);
      setCurrentChamp(val[0][champSelected]);
    });
  }, [champSelected]);

  return (
    <Main_Container isDarkMode={isDarkMode}>
      {isPending && <div> Loading ... </div>}

      <div className={isDarkMode ? "Container Dark" : "Container Light"}>
        {currentChamp && (
          <QuickGuide currentChamp={currentChamp} isDarkMode={isDarkMode} />
        )}
        {currentChamp && (
          <DetailedGuide currentChamp={currentChamp} isDarkMode={isDarkMode} />
        )}
      </div>
    </Main_Container>
  );
}
