import styled from "styled-components";
import { useState } from "react";
import PriceCotent from "./PriceContent";

const LineImage = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

export default function ChampionPrice() {
  //스프라이트 이미지로 구현할 것.
  const [pos, setPos] = useState(0);

  const positionHandler = (idx) => {
    setPos(idx);
  };
  const positionImgs = [
    {
      id: "pos1",
      title: (
        <LineImage
          src={process.env.PUBLIC_URL + "/Image/all.jpg"}
          onClick={() => {
            positionHandler(0);
          }}
        ></LineImage>
      ),
      content: (
        <>
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
        </>
      ),
    },
    {
      id: "pos2",
      title: (
        <LineImage
          src={process.env.PUBLIC_URL + "/Image/top.jpg"}
          onClick={() => {
            positionHandler(1);
          }}
        ></LineImage>
      ),
      content: (
        <>
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
        </>
      ),
    },
    {
      id: "pos3",
      title: (
        <LineImage
          src={process.env.PUBLIC_URL + "/Image/jungle.jpg"}
          onClick={() => {
            positionHandler(2);
          }}
        ></LineImage>
      ),
      content: (
        <>
          <PriceCotent />
          <PriceCotent />
        </>
      ),
    },
    {
      id: "pos4",
      title: (
        <LineImage
          src={process.env.PUBLIC_URL + "/Image/mid.jpg"}
          onClick={() => {
            positionHandler(3);
          }}
        ></LineImage>
      ),
      content: (
        <>
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
        </>
      ),
    },
    {
      id: "pos5",
      title: (
        <LineImage
          src={process.env.PUBLIC_URL + "/Image/bottom.jpg"}
          onClick={() => {
            positionHandler(4);
          }}
        ></LineImage>
      ),
      content: (
        <>
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
        </>
      ),
    },
    {
      id: "pos6",
      title: (
        <LineImage
          src={process.env.PUBLIC_URL + "/Image/support.jpg"}
          onClick={() => {
            positionHandler(5);
          }}
        ></LineImage>
      ),
      content: (
        <>
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
          <PriceCotent />
        </>
      ),
    },
  ];

  return (
    <div className="ChampionPrice__Container">
      <ul className="PricePosition__Container">
        {positionImgs.map((el) => {
          return <li key={el.id}>{el.title}</li>;
        })}
      </ul>
      <div className="ChampionPrice__List">
        <div className="Search__Champ">
          <label>챔피언검색: </label>
          <input type="text" placeholder="챔피언을 검색하세요."></input>
        </div>
        <div className="Champ__Info">
          <span>챔피언</span>
          <span>가격</span>
        </div>
        {positionImgs[pos].content}
      </div>
    </div>
  );
}
