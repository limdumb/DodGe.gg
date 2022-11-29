import React, { useState } from "react";
import "./Tab.css";
import lineIconImg from "./imgLink";
import TabBtn from "./TabBtn";

const Tab = ({ line, setCheckLine }) => {
  let listLength = line.length;
  // listLength = 7;
  const [linebtnCheck, setLinebtnCheck] = useState(
    listLength === 5
      ? [true, false, false, false, false]
      : [true, false, false, false, false, false, false]
  );

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
        {linebtnCheck.map((iconData, index) => {
          return (
            <TabBtn
              key={index}
              iconData={listLength === 5 ? lineIconImg[index+1] : lineIconImg[index]}
              index={index}
              linebtnCheck={linebtnCheck}
              setLinebtnCheck={setLinebtnCheck}
              setCheckLine={setCheckLine}
              line={line}
            />
          );
        })}
      </div>
    </>
  );
};

export default Tab;
