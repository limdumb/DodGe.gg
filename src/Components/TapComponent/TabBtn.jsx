import React from "react";

const TabBtn = ({ iconData, index, linebtnCheck, setLinebtnCheck }) => {
  function lineBtnChange(index) {
    let dummyArr = [false, false, false, false, false, false, false];
    dummyArr[index] = true;
    setLinebtnCheck(dummyArr);
  }
  return (
    <button
      type="button"
      name={iconData.name}
      className={
        "Tab_LineBtn " +
        (index === 0
          ? "Tab_LineBtnLeft"
          : index === 6
          ? "Tab_LineBtnRight"
          : "Tab_LineBtncenter")
      }
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
