import styled from "styled-components";


const InfoDiv = styled.div`
    color:blue;
    outline: 1px solid red;
`

export const Skill = ()=>{
    return(
        <InfoDiv>
            <h1>챔피언 기본스킬 설명</h1>
            <ul>
                <li>스킬1</li>
                <li>스킬1</li>
                <li>스킬1</li>
                <li>스킬1</li>
                <li>스킬1</li>
            </ul>
        </InfoDiv>
    )
}