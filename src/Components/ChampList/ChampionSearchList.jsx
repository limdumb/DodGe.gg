import React from "react";
import { useState } from "react";
import ChampionList from "./ChampionList";
import { ChampionTab } from "../TapComponent/Tab";

const ChampionSearchList = ({setChampSelected}) => {
  const line = ["ALL","TOP", "JUNGLE", "MID", "ADC", "SUPPORT", "ROTATION"];
  const [CheckLine, setCheckLine] = useState("ALL");
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
