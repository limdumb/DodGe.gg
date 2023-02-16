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

export default function ChampionGuide({ champSelected, darkMode }) {
  const [currentChamp, setCurrentChamp] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetchChampData(champSelected).then((val) => {
      setIsPending(false);
      setCurrentChamp(val[0][champSelected]);
    });
  }, [champSelected]);

  return (
    <Main_Container darkMode={darkMode}>
      {isPending && <div> Loading ... </div>}

      <div className={darkMode ? "Container Dark" : "Container Light"}>
        {currentChamp && (
          <QuickGuide currentChamp={currentChamp} darkMode={darkMode} />
        )}
        {currentChamp && (
          <DetailedGuide currentChamp={currentChamp} darkMode={darkMode} />
        )}
      </div>
    </Main_Container>
  );
}
