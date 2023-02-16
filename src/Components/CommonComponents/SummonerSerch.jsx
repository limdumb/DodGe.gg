import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./summonerSerch.css";

export const SummonerSerch = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const onSerchHandler = (e) => {
    if (e.key === "Enter" || e.key === "click") {
      console.log(e);
      navigate(`/mypage/${e.target.value}`);
    }
  };

  const onSerchClickHandler = (inputValue) => {
    navigate(`/mypage/${inputValue}`);
  };

  return (
    <>
      <div>
        <input
          className="Header_Serch_Input"
          value={inputValue}
          placeholder="소환사명"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => onSerchHandler(e)}
        />
        <button
          className="Header_Serch_Input_Button"
          onClick={() => onSerchClickHandler(inputValue)}
        >
          .GG
        </button>
      </div>
    </>
  );
};
