import React, { useState } from "react";
import "./Tab.css";
import lineIconImg from "./imgLink";
import TabBtn from "./TabBtn";
import { ChampSearchBar, OpListSearchBar } from "../CommonComponents/SearchInput";

export const ChampionTab = ({ line, setCheckLine, searchInputValue, setSearchInputValue }) => {
  let listLength = line.length;
  const [linebtnCheck, setLinebtnCheck] = useState(
    listLength === 5
      ? [true, false, false, false, false]
      : [true, false, false, false, false, false, false]
  );

  return (
    <div>
      <ChampSearchBar
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />
      <div className="Tab_LineBox">
        {linebtnCheck.map((iconData, index) => {
          return (
            <TabBtn
              key={index}
              iconData={
                listLength === 5 ? lineIconImg[index + 1] : lineIconImg[index]
              }
              index={index}
              linebtnCheck={linebtnCheck}
              setLinebtnCheck={setLinebtnCheck}
              setCheckLine={setCheckLine}
              line={line}
            />
          );
        })}
      </div>
    </div>
  );
};

export const OpListTab = ({ line, setCheckLine, tabSearchInputValue, setTabSearchInputValue }) => {
  let listLength = line.length;
  const [linebtnCheck, setLinebtnCheck] = useState(
    listLength === 5
      ? [true, false, false, false, false]
      : [true, false, false, false, false, false, false]
  );

  return (
    <div>
      <OpListSearchBar
        tabSearchInputValue={tabSearchInputValue}
        setTabSearchInputValue={setTabSearchInputValue}
      />
      <div className="Tab_LineBox">
        {linebtnCheck.map((iconData, index) => {
          return (
            <TabBtn
              key={index}
              iconData={
                listLength === 5 ? lineIconImg[index + 1] : lineIconImg[index]
              }
              index={index}
              linebtnCheck={linebtnCheck}
              setLinebtnCheck={setLinebtnCheck}
              setCheckLine={setCheckLine}
              line={line}
            />
          );
        })}
      </div>
    </div>
  );
};