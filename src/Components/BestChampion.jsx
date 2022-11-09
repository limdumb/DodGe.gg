import { useState } from "react"
import styled from "styled-components"
import "./BestChampion.css"

const Card = styled.div`
    height: 150px;
    width: 100px;
    border: solid 1px; red;
    margin: 0 0.5px;
    cursor: pointer;
`
export default function BestChampion() {
    const [card, setCard] = useState(Array(5).fill(false))

    const cardChange = (idx)=>{
      let result = [...card];
      result[idx] = !result[idx]
      setCard(result);
      console.log(result)
    }

  return(
   <div>
      <h3>금주의 OP 챔피언</h3>
      <div className="card_container">
         {card.map(( el, idx ) => {
           return (<Card key={idx} className={ card[idx] ? "card_back" : "card_front"}  onClick={()=>cardChange(idx)} />)
         })}
      </div>
  </div>
  )
}