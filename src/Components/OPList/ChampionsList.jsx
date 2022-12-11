import React from "react";
import "./ChampionsList.css";
import Champion from "./Champion";
import useChampions from "./useChampions";
import styled from "styled-components";
import { filterChampName } from "../../Function/Search";

const HeaderBox = styled.span`
  width: ${(props) => props.width};
`;

const ChampionsList = ({ CheckLine, tabSearchInputValue }) => {
  
  const championsList = useChampions(CheckLine);

  return (
    <div className="OPList_Box">
      <div className="Champion_HeaderBox">
        <HeaderBox width="13%">순위</HeaderBox>
        <HeaderBox width="30%">챔피언</HeaderBox>
        <HeaderBox width="13%">승률</HeaderBox>
        <HeaderBox width="13%">픽률</HeaderBox>
        <HeaderBox width="13%">밴률</HeaderBox>
        <HeaderBox width="14%">카운터</HeaderBox>
      </div>
      {championsList.map((data, index) => {
        return <Champion key={index} data={data} />;
      })}
    </div>
  );
};

export default ChampionsList;
