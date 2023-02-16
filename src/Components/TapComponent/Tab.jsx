import React, { useState } from "react";
import "./Tab.css";
import lineIconImg from "./imgLink";
import TabBtn from "./TabBtn";
import { ChampSearchBar } from "../CommonComponents/SearchInput";

export const ChampionTab = ({
  line,
  setCheckLine,
  searchInputValue,
  setSearchInputValue,
  darkMode
}) => {
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
        darkMode={darkMode}
      />
      <div className="Tab_LineBox">
        <div className="Tab_LineInnerBox">
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
                darkMode={darkMode}
              />
            );
          })}
        </div>
        <img className="tabLine" src={darkMode? `${process.env.PUBLIC_URL}/Image/Dark_Line2.png` : `${process.env.PUBLIC_URL}/Image/Light_Line2.png`} />
      </div>
    </div>
  );
};

export const OpListTab = ({
  line,
  setCheckLine,
  tabSearchInputValue,
  setTabSearchInputValue,
  darkMode
}) => {
  let listLength = line.length;
  const [linebtnCheck, setLinebtnCheck] = useState(
    listLength === 5
      ? [true, false, false, false, false]
      : [true, false, false, false, false, false, false]
  );

  return (
    <div>
      <div className="Tab_LineBox2">
        <div className="Tab_LineInnerBox2">
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
                darkMode={darkMode}
              />
            );
          })}
        </div>
        <div className={darkMode ? "Dark_tabLine2" : "tabLine2"}></div>
      </div>
    </div>
  );
};
