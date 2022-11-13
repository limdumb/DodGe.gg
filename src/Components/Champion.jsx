import { useState } from "react";
import styled from "styled-components";
import ChampionContent from "./ChampionContent";

const ChampLine = styled.button`
  border: 1px solid red;
  width: 130px;
  height: 30px;
  margin: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Champion() {
  const [line, setLine] = useState(0);
  const tabHandler = (idx) => {
    setLine(idx);
  };
  const champContents = [
    {
      id: "tier1",
      title: (
        <ChampLine
          onClick={() => {
            tabHandler(0);
          }}
        >
          탑
        </ChampLine>
      ),
      content: <ChampionContent />,
    },
    {
      id: "tier2",
      title: (
        <ChampLine
          onClick={() => {
            tabHandler(1);
          }}
        >
          정글
        </ChampLine>
      ),
      content: <ChampionContent />,
    },
    {
      id: "tier3",
      title: (
        <ChampLine
          onClick={() => {
            tabHandler(2);
          }}
        >
          미드
        </ChampLine>
      ),
      content: <ChampionContent />,
    },
    {
      id: "tier4",
      title: (
        <ChampLine
          onClick={() => {
            tabHandler(3);
          }}
        >
          원딜
        </ChampLine>
      ),
      content: <ChampionContent />,
    },
    {
      id: "tier5",
      title: (
        <ChampLine
          onClick={() => {
            tabHandler(4);
          }}
        >
          서폿
        </ChampLine>
      ),
      content: <ChampionContent />,
    },
  ];
  return (
    <div id="Champion__Container">
      <nav className="Line__Container">
        {champContents.map((el) => {
          <ul>
            <li key={el.id}></li>
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
