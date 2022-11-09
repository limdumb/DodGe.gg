import styled from "styled-components"

const ChampLine = styled.span`
    border: 1px solid red;
    width: 130px;
    height: 30px;
    margin: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Champion() {
    return (
        <div id="Champion__Container">
            <div className="Line__Container">
                <ChampLine>탑</ChampLine>
                <ChampLine>정글</ChampLine>
                <ChampLine>미드</ChampLine>
                <ChampLine>원딜</ChampLine>
                <ChampLine>서폿</ChampLine>
            </div>
        </div>
    )
}