import "./SerchInput.css";
import styled from "styled-components";
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

export const SerchInput = () => {
  return (
    <SubmitSection
      width="450"
      height="2rem"
      right="1.8rem"
      backgroundColor="white"
    >
      <input id="Serch_Input" type="text" placeholder="소환사명"></input>
      <button className="Serch_Button">.GG</button>
    </SubmitSection>
  );
};

export const ChampSerchBar = () => {
  const [championName, setChampionName] = useState("");
  const onChangeSubmit = (e) => {
    e.preventDefault()
    setChampionName(e.target.value)
  }

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
        />
      </div>
  );
};
