import React, { useState } from "react";
import { OpListTab } from "../TapComponent/Tab";
import ChampionsList from "./ChampionsList";
import "./OPList.css";

const OPList = ({position, darkMode}) => {
  const line = ["TOP", "JUNGLE", "MID", "ADC", "SUPPORT"];
  const [CheckLine, setCheckLine] = useState("TOP");
  return (
    <div className={darkMode? `Dark_OP_List Op_List_Container ${position}` : `Op_List_Container ${position}`}>
      <OpListTab line={line} setCheckLine={setCheckLine} darkMode={darkMode}/>
      <ChampionsList CheckLine={CheckLine} darkMode={darkMode}/>
    </div>
  );
};

export default OPList;
