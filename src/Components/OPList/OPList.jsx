import React, { useState } from "react";
import { OpListTab } from "../TapComponent/Tab";
import ChampionsList from "./ChampionsList";
import "./OPList.css";

const OPList = ({ line, tabSerchInputValue, setTabSerchInputValue }) => {
  const [CheckLine, setCheckLine] = useState("TOP");
  return (
    <div className="Op_List_Container">
      <OpListTab
        line={line}
        setCheckLine={setCheckLine}
        tabSerchInputValue={tabSerchInputValue}
        setTabSerchInputValue={setTabSerchInputValue}
      />
      <ChampionsList CheckLine={CheckLine} tabSerchInputValue={tabSerchInputValue} />
    </div>
  );
};

export default OPList;
