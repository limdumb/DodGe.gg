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
              />
            );
          })}
        </div>
        <img className="tabLine" src={`${process.env.PUBLIC_URL}/Image/Light_Line2.png`} />
      </div>
    </div>
  );
};

export const OpListTab = ({
  line,
  setCheckLine,
  tabSearchInputValue,
  setTabSearchInputValue,
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
              />
            );
          })}
        </div>
        <div className="tabLine2"></div>
      </div>
    </div>
  );
};
