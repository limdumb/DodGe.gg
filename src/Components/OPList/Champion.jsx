import React from "react";
import "./ChampionsList.css";
import styled from "styled-components";

const ChampionData = styled.span`
  width: ${(props) => props.width};
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;

const Champion = ({ data }) => {
  return (
    <div className="Champion_Box">
      <ChampionData width="10%">{data.positionRank}</ChampionData>
      <img className="Champion_Img" src={data.img} />
      <p className="Champion_Name">{data.name}</p>
      <img
        className="Champion_Tier"
        src={`https://s-lol-web.op.gg/images/icon/icon-tier-${data.positionTier}.svg`}
      />
      <ChampionData width="13%">{data.positionWinRate}</ChampionData>
      <ChampionData width="13%">{data.positionPickRate}</ChampionData>
      <ChampionData width="13%">{data.positionBanRate}</ChampionData>
      <ChampionData width="11%">
        <img src={data.positionCounters} />
      </ChampionData>
    </div>
  );
};

export default Champion;
