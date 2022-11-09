import { useState } from "react"
import styled from "styled-components"

const ChampionTh = styled.th`
    border: 1px solid red;
    height: 30px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export default function Champion() {
    const [line, setLine] = useState(0);
    return (
        <div id="Champion_container">
            <tr>
                <ChampionTh>탑</ChampionTh>
                <ChampionTh>정글</ChampionTh>
                <ChampionTh>미드</ChampionTh>
                <ChampionTh>원딜</ChampionTh>
                <ChampionTh>서폿</ChampionTh>
            </tr>
        </div>
    )
}