import styled from "styled-components";



const InfoDiv = styled.div`
    color:white;
    text-align: center;
    
`   

const SkillUl = styled.ul`
    display: flex;
    justify-content: space-around;
`

const SkillLi = styled.li`

`



export const Skill = ()=>{

    // lol.data.Aatrox.spells[0].image.full
    //  lol.data.Aatrox.passive.image.full

    return(
        <InfoDiv>
            <h1>챔피언 기본스킬</h1>
            <SkillUl>
                <SkillLi><img src="#"/></SkillLi>
                <SkillLi>2</SkillLi>
                <SkillLi>3</SkillLi>
                <SkillLi>4</SkillLi>
                <SkillLi>5</SkillLi>
            </SkillUl>
            
            
        </InfoDiv>
    )
}