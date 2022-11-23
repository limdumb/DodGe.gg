import React, {useState} from "react";
import "./Tab.css";
import img from "./imgLink";
import TabBtn from "./TabBtn";

const Tab = () => {
  const [champCheck, setChampCheck] = useState([
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
      <div className="Tab__SearchBox">
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
      <div className="Tab__LineBox">
        {img.map((iconData, index) => {
          return <TabBtn key={index} iconData={iconData} index={index} champCheck={champCheck} setChampCheck={setChampCheck}/>;
        })}

      </div>
    </>
  );
};

export default Tab;
