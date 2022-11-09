import { useState } from "react";
import styled from "styled-components";
import "./BestChampion.css";

const Card = styled.div`
    height: 150px;
    width: 100px;
    border: solid 1px; red;
    margin: 0 0.5px;
    cursor: pointer;
`;
const BestChampImage = styled.img`
  width: 100px;
  height: 150px;
`;
/*export default function BestChampion() {

  // State 배열로 처리함 ( 이미지를 담고있는 변수를 넣어서 Arr)
  // 그 ARR를 useState Default값으로 넘겨준다

  // 인덱스를 추적해서 바꿔주게끔 해야지 이미지를 바꿀수있게 0 === garan => 교체 다른변수로 인덱스교체


    const [cardLocation , setCardLocation] = useState([])
    const [card, setCard] = useState(false)

    const clickHandler = () => {
        setCard(!card)
        console.log(card)
    }

  return(
    
   <div className="card_container">
      <h3>금주의 OP 챔피언</h3>
         <Card onClick={clickHandler}>
          <BestChampImage src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg"/>
         </Card>
         <Card>
           <BestChampImage src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg"/>
         </Card>
         <Card>
          <BestChampImage src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg"/>
         </Card>
         <Card>
          <BestChampImage src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg"/>
         </Card>
         <Card>
           <BestChampImage src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg"/>
         </Card>
    </div>
  )
}*/
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
      <div className="Card__Section">
        {card.map((el, idx) => {
          return (
            <Card
              className={el ? "Card__Front" : "Card__Back"}
              onClick={() => cardChange(idx)}
            />
          );
        })}
      </div>
    </div>
  );
}
