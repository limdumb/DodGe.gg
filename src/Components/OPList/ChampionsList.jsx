import React from "react";
import "./ChampionsList.css";
import Champion from "./Champion";
import useChampions from "./useChampions";
import styled from "styled-components";
const HeaderBox = styled.span`
  width: ${(props) => props.width};
`;

const ChampionsList = ({ CheckLine, darkMode }) => {
   
  const championsList = useChampions(CheckLine);

  return (
    <div className="OPList_Box">
      <div className={darkMode ? "Dark_Champion_HeaderBox Champion_HeaderBox":"Champion_HeaderBox"}>
        <HeaderBox width="10%">순위</HeaderBox>
        <HeaderBox width="30%">챔피언</HeaderBox>
        <HeaderBox width="13%">승률</HeaderBox>
        <HeaderBox width="13%">픽률</HeaderBox>
        <HeaderBox width="13%">밴률</HeaderBox>
        <HeaderBox width="15%">카운터</HeaderBox>
      </div>
      <div className={darkMode ? "Dark_OPChampion_List OPChampion_List": "OPChampion_List"}>
      {championsList.map((data, index) => {
        return <Champion key={index} data={data} darkMode={darkMode}/>;
      })}
      </div>
      
    </div>
  );
};

export default ChampionsList;
