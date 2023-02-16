import React from "react";
import "./ChampionsList.css";
import styled from "styled-components";

const ChampionData = styled.span`
  width: ${(props) => props.width};
  font-family: 'Roboto';
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;

const Champion = ({ data, darkMode }) => {
  return (
    <div className="Champion_Box">
      <div className={darkMode ? "Dark_Champion_left_Box Champion_left_Box": "Champion_left_Box"}>
        <ChampionData width="10%">{data.positionRank}</ChampionData>
        <img className="Champion_Img" src={data.img} />
        <p className={darkMode ? "Dark_Champion_Name Champion_Name" : "Champion_Name"}>{data.name}</p>
        <img
          className="Champion_Tier"
          src={`https://s-lol-web.op.gg/images/icon/icon-tier-${data.positionTier}.svg`}
        />
        <ChampionData width="16%">{data.positionWinRate}</ChampionData>
        <ChampionData width="16%">{data.positionPickRate}</ChampionData>
        <ChampionData width="16%">{data.positionBanRate}</ChampionData>
      </div>
      <div className="Champion_right_Box">
        <img src={data.positionCounters} />
      </div>
    </div>
  );
};

export default Champion;
