import React, { useState } from "react";
import { OpListTab } from "../TapComponent/Tab";
import ChampionsList from "./ChampionsList";
import "./OPList.css";

const OPList = ({ tabSearchInputValue, setTabSearchInputValue }) => {
  const line = ["TOP", "JUNGLE", "MID", "ADC", "SUPPORT"];
  const [CheckLine, setCheckLine] = useState("TOP");
  return (
    <div className="Op_List_Container">
      <OpListTab line={line} setCheckLine={setCheckLine} />
      <ChampionsList
        CheckLine={CheckLine}
        tabSearchInputValue={tabSearchInputValue}
      />
    </div>
  );
};

export default OPList;
