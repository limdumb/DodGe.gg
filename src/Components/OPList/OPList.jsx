import React, { useState } from "react";
import { OpListTab } from "../TapComponent/Tab";
import ChampionsList from "./ChampionsList";
import "./OPList.css";

const OPList = ({position}) => {
  const line = ["TOP", "JUNGLE", "MID", "ADC", "SUPPORT"];
  const [CheckLine, setCheckLine] = useState("TOP");
  return (
    <div className={`Op_List_Container ${position}`}>
      <OpListTab line={line} setCheckLine={setCheckLine} />
      <ChampionsList CheckLine={CheckLine} />
    </div>
  );
};

export default OPList;
