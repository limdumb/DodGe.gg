import "./SearchInput.css";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

const SubmitSection = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border-top-right-radius: ${(props) => props.borderTrRadius};
  border-bottom-right-radius: ${(props) => props.borderBrRadius};
  right: ${(props) => props.right};
  border: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 1px;
`;

export const SearchInput = () => {
  const navigate = useNavigate();
  const [summonerName, setSummonerName] = useState("");

  function handleSummonerInput(e){
    setSummonerName(e.target.value);
  }
  function inputEnter(e){
    if(e.key === 'Enter') {
      setSummonerName(e.target.value);
      navigate(`/mypage/${summonerName}`)
    }
  }
  return (
    <SubmitSection height="2rem" right="1.8rem" backgroundColor="white">
      <input id="Search_Input" type="text" placeholder="소환사명" onKeyDown={inputEnter} onChange={(e)=>{handleSummonerInput(e)}}></input>
      <Link to={`/mypage/${summonerName}`}><button className="Search_Button">.GG</button></Link>
    </SubmitSection>
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