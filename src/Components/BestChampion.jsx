import { useState } from "react";
import styled from "styled-components";
import "./BestChampion.css";

const Card = styled.li`
    height: 300px;
    width: 150px;
    border: solid 1px; red;
    margin: 0 0.5px;
    cursor: pointer;
`;
fetch(
  "http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json"
).then((res) => {
  console.log(res);
});
export default function BestChampion() {
  const [card, setCard] = useState(Array(5).fill(false));

  const cardChange = (idx) => {
    let result = [...card];
    result[idx] = !result[idx];
    setCard(result);
  };

  return (
    <div className="Card__Container">
      <h3>금주의 OP 챔피언</h3>
      <ul className="Card__Section">
        {card.map((el, idx) => {
          return (
            <Card
              key={idx}
              className={el ? "Card__Front" + idx : "Card__Back" + idx}
              onClick={() => cardChange(idx)}
            />
          );
        })}
      </ul>
    </div>
  );
}
