import React from "react";
import { useState } from "react";
import ChampionList from "./ChampionList";
import { ChampionTab } from "../TapComponent/Tab";

const ChampionSearchList = ({setChampSelected}) => {
  const line = ["TOP", "JUNGLE", "MID", "ADC", "SUPPORT"];
  const [CheckLine, setCheckLine] = useState("TOP");
  const [searchInputValue, setSearchInputValue] = useState("");
  return (
    <div>
      <ChampionTab
        line={line}
        setSearchInputValue={setSearchInputValue}
        searchInputValue={searchInputValue}
        setCheckLine={setCheckLine}
      />
      <ChampionList
        searchInputValue={searchInputValue}
        setChampSelected={setChampSelected}
      />
    </div>
  );
};

export default ChampionSearchList;
