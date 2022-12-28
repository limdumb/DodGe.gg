import "./SearchInput.css";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ParallelogramShape = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: skew(45deg);
  background-color: white;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
`;

export const SearchInput = () => {
  const navigate = useNavigate();
  const [summonerName, setSummonerName] = useState("");

  function handleSummonerInput(e) {
    setSummonerName(e.target.value);
  }
  function inputEnter(e) {
    if (e.key === "Enter") {
      setSummonerName(e.target.value);
      navigate(`/mypage/${summonerName}`);
    }
  }
  return (
    <>
      <ParallelogramShape
        width={"7.5855px"}
        height={"28.89px"}
        right={"137px"}
        top={"26px"}
      />
      <ParallelogramShape
        width={"7.5855px"}
        height={"28.89px"}
        right={"153px"}
        bottom={"3px"}
      />
      <ParallelogramShape
        width={"249.668px"}
        height={"28.8904px"}
        bottom={"32px"}
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
        <button className="Search_Button">.GG</button>
      </Link>
      <ParallelogramShape
        width={"7.5855px"}
        height={"28.89px"}
        left={"137px"}
        bottom={"61px"}
      />
      <ParallelogramShape
        width={"7.5855px"}
        height={"28.89px"}
        left={"153px"}
        bottom={"90px"}
      />
    </>
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
