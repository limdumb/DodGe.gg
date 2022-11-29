import React from "react";
import "./ChampionsList.css";

const Champion = ({data}) => {
  return (
    <div className="Champion_Box">
      <span className="Champion_Rank">{data.positionRank}</span>
      <img
        className="Champion_Img"
        src={data.img}
      />
      <p className="Champion_Name">{data.name}</p>
      <img
        className="Champion_Tier"
        src={`https://s-lol-web.op.gg/images/icon/icon-tier-${data.positionTier}.svg`}
      />
      <span className="Champion_WinRate">{data.positionWinRate}</span>
      <span className="Champion_PickRate">{data.positionWinRate}</span>
      <span className="Champion_BanRate">{data.positionWinRate}</span>
      <div className="Champion_Counter">
        <img src={data.positionCounters}/>
      </div>
    </div>
  );
};

export default Champion;
