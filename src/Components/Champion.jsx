import { useState } from "react";
import styled from "styled-components";

const ChampLine = styled.button`
  border: 1px solid red;
  width: 130px;
  height: 30px;
  margin: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 40px;
  border: 1px solid pink;
`;
const ListNumber = styled.span`
  width: 40px;
  height: 100%;
  border: 1px solid blue;
  border-radius: 50px;
`;

const ChampImg = styled.img`
  width: 60%;
  height: 100%;
  border: 1px solid green;
`;


export default function Champion() {
  const [line, setLine] = useState(0);
  const tabHandler = (idx) => {
    setLine(idx);
  };
  const champContents = [
    {
      title: (
        <ChampLine
          onClick={() => {
            tabHandler(0);
          }}
        >
          탑
        </ChampLine>
      ),
      content: (
        <ContentBox>
          <ListNumber />
          <ChampImg />
        </ContentBox>
      ),
    },
    {
      title: (
        <ChampLine
          onClick={() => {
            tabHandler(1);
          }}
        >
          정글
        </ChampLine>
      ),
    },
    {
      title: (
        <ChampLine
          onClick={() => {
            tabHandler(2);
          }}
        >
          미드
        </ChampLine>
      ),
    },
    {
      title: (
        <ChampLine
          onClick={() => {
            tabHandler(3);
          }}
        >
          원딜
        </ChampLine>
      ),
    },
    {
      title: (
        <ChampLine
          onClick={() => {
            tabHandler(4);
          }}
        >
          서폿
        </ChampLine>
      ),
    },
  ];
  return (
    <div id="Champion__Container">
      <nav className="Line__Container">
        {champContents.map((el, idx) => {
          <ul>
            <li key={idx} />
          </ul>;
          return el.title;
        })}
      </nav>
      <div className="InfoText">
        <span className="Rank__Info">순위</span> <span>티어</span>
      </div>
      <hr />
      {champContents[line].content}
    </div>
  );
}
