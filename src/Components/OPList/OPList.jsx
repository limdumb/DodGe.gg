import React, { useState } from "react";
import { OpListTab } from "../TapComponent/Tab";
import ChampionsList from "./ChampionsList";
import "./OPList.css";

const OPList = ({position, darkMode, setModalCheck}) => {
  const line = ["TOP", "JUNGLE", "MID", "ADC", "SUPPORT"];
  const [CheckLine, setCheckLine] = useState("TOP");

  function modalClose() {
    setModalCheck([false, false]);
  }

  return (
    <div className={darkMode? `Dark_OP_List Op_List_Container ${position}` : `Op_List_Container ${position}`}>
      <div className="close" onClick={modalClose}></div>
      <OpListTab line={line} setCheckLine={setCheckLine} darkMode={darkMode}/>
      <ChampionsList CheckLine={CheckLine} darkMode={darkMode}/>
    </div>
  );
};

export default OPList;
