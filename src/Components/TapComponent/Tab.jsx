import React, {useState} from "react";
import "./Tab.css";
import lineIconImg from "./imgLink";
import TabBtn from "./TabBtn";

const Tab = () => {
  const [linebtnCheck, setLinebtnCheck] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <>
      <div className="Tab_SearchBox">
        <img
          className="Tab_SearchImg"
          src="https://s-lol-web.op.gg/images/icon/icon-search.svg"
        />
        <input
          className="Tab_Search"
          type="text"
          placeholder="챔피언 검색"
          autoComplete="off"
        />
      </div>
      <div className="Tab_LineBox">
        {lineIconImg.map((iconData, index) => {
          return <TabBtn key={index} iconData={iconData} index={index} linebtnCheck={linebtnCheck} setLinebtnCheck={setLinebtnCheck}/>;
        })}
      </div>
    </>
  );
};

export default Tab;
