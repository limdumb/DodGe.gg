import { useState } from "react"
import styled from "styled-components"
import "./BestChampion.css"

const Card = styled.div`
    height: 200px;
    width: 150px;
    border: solid 1px; red;
    margin: 0 0.2px;
`

export default function BestChampion() {
    const [topCard, setTopCard] = useState(false)
    const [jungleCard, setJungleCard] = useState(false)
    const [midCard, setMidCard] = useState(false)
    const [bottomCard, setBottomCard] = useState(false)
    const [supportCard, setSupportCard] = useState(false)

    const changeTopCard = () => {
        setTopCard(!topCard)
    }
    const changeJungleCard = () => {
        setJungleCard(!jungleCard)
    }
    const changeMidCard = () => {
        setMidCard(!midCard)
    }
    const changeBottomCard = () => {
        setBottomCard(!bottomCard)
    }
    const changeSupportCard = () => {
        setSupportCard(!supportCard)
    }
    return(
     <div>
        <h3>금주의 OP 챔피언</h3>
        <div className="card_container">
            <Card className={topCard ? "top_card" : 'top_card_front'} onClick={changeTopCard}/>
            <Card className={jungleCard ? "jungle_card" : "jungle_card_front"} onClick={changeJungleCard}/>
            <Card className={midCard ? "mid_card" : "mid_card_front"} onClick={changeMidCard}/>
            <Card className={bottomCard ? "bottom_card" : "bottom_card_front"} onClick={changeBottomCard}/>
            <Card className={supportCard ? "support_card" : "support_card_front"} onClick={changeSupportCard}/>
        </div>
    </div>
    )
}