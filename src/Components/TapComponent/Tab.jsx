import React, { useState } from "react";
import "./Tab.css";
import lineIconImg from "./imgLink";
import TabBtn from "./TabBtn";
import {ChampSerchBar} from '../CommonComponents/SerchInput'

const Tab = ({ line, setCheckLine }) => {
  let listLength = line.length;
  const [linebtnCheck, setLinebtnCheck] = useState(
    listLength === 5
      ? [true, false, false, false, false]
      : [true, false, false, false, false, false, false]
  );

  return (
    <div>
      <ChampSerchBar/>
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
    </div>
  );
};

export default Tab;
