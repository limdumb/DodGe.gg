import styled from "styled-components";
import QuickGuide from "./QuickGuide";
import DetailedGuide from "./DetailedGuide";
import { useState, useEffect } from "react";
import { fetchChampData } from "../../API/RiotAPI";

const Main_Container = styled.div`
  height: 1650px;
  width: 390px;

  .Guides_Container {
    background-color: bisque;
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

  useEffect(() => {
    fetchChampData(champSelected).then((val) => {
      setIsPending(false);
      setCurrentChamp(val[0][champSelected]);
    });
  }, [champSelected]);

  return (
    <Main_Container>
      {isPending && <div> Loading ... </div>}

      <div className="Guides_Container">
        {currentChamp && <QuickGuide currentChamp={currentChamp} />}
        {currentChamp && <DetailedGuide currentChamp={currentChamp} />}
      </div>
    </Main_Container>
  );
}
