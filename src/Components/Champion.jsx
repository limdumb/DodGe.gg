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
      content: <div style={{ border: "1px solid red" }}>hi</div>,
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
      <div className="Line__Container">
        {champContents.map((el, idx) => {
          <ul>
            <li key={idx} />
          </ul>;
          return el.title;
        })}
      </div>
    </div>
  );
}
