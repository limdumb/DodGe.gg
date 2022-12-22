import React from "react";

const TabBtn = ({
  iconData,
  index,
  linebtnCheck,
  setLinebtnCheck,
  setCheckLine,
  line,
}) => {
  let lineLength = linebtnCheck.length;
  function lineBtnChange(index) {
    let dummyArr = new Array(lineLength).fill(false);
    dummyArr[index] = true;
    setCheckLine(line[index]);
    setLinebtnCheck(dummyArr);
  }

  return (
    <button
      type="button"
      name={iconData.name}
      className="Tab_LineBtn "
      onClick={(e) => {
        lineBtnChange(index);
      }}
    >
      <img
        src={
          linebtnCheck[index] ? iconData.icon.icon_wh : iconData.icon.icon_dark
        }
      />
    </button>
  );
};

export default TabBtn;
