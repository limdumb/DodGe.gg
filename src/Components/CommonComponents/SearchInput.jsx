import "./SearchInput.css";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ParallelogramShape = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: skew(45deg) translate(-50%, -50%);
  background-color: white;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
`;

export const SearchInput = ({ setModalCheck }) => {
  const navigate = useNavigate();
  const [summonerName, setSummonerName] = useState("");

  function handleSummonerInput(e) {
    setSummonerName(e.target.value);
  }
  
  function inputEnter(e) {
    if (e.key === "Enter") {
      setSummonerName(e.target.value);
      navigate(`/mypage/${summonerName}`);
      setModalCheck([false, false]);
    }
  }

  function inputClick() {
    setModalCheck([false, false]);
  }

  return (
    <div className="Search_Input_Box">
      <ParallelogramShape
        width={"7.5855px"}
        height={"28.89px"}
        right={"-13%"}
        top={"50%"}
      />
      <ParallelogramShape
        width={"7.5855px"}
        height={"28.89px"}
        right={"-17%"}
        top={"30%"}
      />
      <ParallelogramShape
        width={"249.668px"}
        height={"28.8904px"}
        top={"10%"}
        left={"50%"}
      />
      <input
        id="Search_Input"
        type="text"
        placeholder="소환사명"
        onKeyDown={inputEnter}
        onChange={(e) => {
          handleSummonerInput(e);
        }}
      ></input>
      <Link to={`/mypage/${summonerName}`}>
        <button className="Search_Button" onClick={inputClick}>
          .GG
        </button>
      </Link>
      <ParallelogramShape
        width={"7.5855px"}
        height={"28.89px"}
        left={"87%"}
        top={"-10%"}
      />
      <ParallelogramShape
        width={"7.5855px"}
        height={"28.89px"}
        left={"83%"}
        top={"-30%"}
      />
    </div>
  );
};

export const ChampSearchBar = ({ searchInputValue, setSearchInputValue }) => {
  return (
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
        defaultValue={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
      />
    </div>
  );
};
