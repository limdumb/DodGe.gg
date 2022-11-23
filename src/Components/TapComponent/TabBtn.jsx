import React from "react";

const TabBtn = ({ iconData, index, champCheck, setChampCheck }) => {
  function btnClick(index) {
    let newArr = [false, false, false, false, false, false, false];
    newArr[index] = true;
    setChampCheck(newArr);
  }
  return (
    <button
      type="button"
      name={iconData.name}
      className={
        "Tab__LineBtn " +
        (index === 0
          ? "Tab__LineBtnLeft"
          : index === 6
          ? "Tab__LineBtnRight"
          : "Tab__LineBtncenter")
      }
      onClick={(e) => {
        btnClick(index);
      }}
    >
      <img
        src={
          champCheck[index] ? iconData.icon.icon_wh : iconData.icon.icon_dark
        }
      />
    </button>
  );
};

export default TabBtn;
