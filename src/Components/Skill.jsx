import styled from "styled-components";



const InfoDiv = styled.div`
    color:white;
    text-align: center;
    
`   

const SkillUl = styled.ul`
    display: flex;
    justify-content: space-around;
    margin-top:30px;
`

const Skillimg = styled.img`
    border-radius: 10px;
`

export const Skill = ({skillinfo, jsonData})=>{

    return(
        <InfoDiv>
            <h1>{jsonData.name} 스킬</h1>
            <SkillUl>
                {skillinfo.map((el)=>{
                    return <li key={el.id}><Skillimg src={el.images} alt="#"/></li>
                })}
            </SkillUl>
        </InfoDiv>
    )
}