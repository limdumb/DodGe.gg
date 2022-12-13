import styled from "styled-components";
import QuickGuide from "./QuickGuide";
import DetailedGuide from "./DetailedGuide";
import { useState, useEffect } from "react";
import { fetchChampData } from "../../API/RiotAPI";
import lightBG from "./Assets/LightBG.png";
import darkBG from "./Assets/DarkBG.png";

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
    height: 1150px;
  }

  @media only screen and (min-width: 1024px) {
    width: 50vw;
    display: flex;
  }
`;

export default function ChampionGuide({ champSelected }) {
  const [currentChamp, setCurrentChamp] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchChampData(champSelected).then((val) => {
      setIsPending(false);
      setCurrentChamp(val[0][champSelected]);
    });
  }, [champSelected]);

  return (
    <Main_Container>
      {isPending && <div> Loading ... </div>}

      <div className={isDarkMode ? "Container Dark" : "Container Light"}>
        {currentChamp && <QuickGuide currentChamp={currentChamp} />}
        {currentChamp && <DetailedGuide currentChamp={currentChamp} />}
      </div>
    </Main_Container>
  );
}
