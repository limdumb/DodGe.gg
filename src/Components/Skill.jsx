import styled from "styled-components";
import {useState} from "react";



const InfoDiv = styled.div`
    color:white;
    text-align: center;
`   

const SkillUl = styled.ul`
    display: flex;
    justify-content: space-around;
    margin-top:30px;
    

`
const SkillLi = styled.li`
    &::after{
        content:"";
        display:block;
        margin: 33% auto;
        width: 8px;
        height: 8px;
        background-color:black;
        border-radius: 50%;
        transition: 0.5s;
    }

    &:hover::after{
        background-color:yellow;
    }

    `
    

const Skillimg = styled.img`
    border-radius: 10px;
    transition: 0.5s;
    &:hover{
        transform: translateY(-10px);
    }
`



// 



export const Skill = ({skillinfo, jsonData})=>{
    const [line, setLine] = useState(false);

    function lineChange(){
        console.log('테스트')
    }
    return(
        <InfoDiv>
            <h1>{jsonData.name} 스킬</h1>
            <SkillUl>
                {skillinfo.map((el)=>{
                    return (
                        <SkillLi
                         key={el.id}
                         onClick={lineChange}
                        ><Skillimg src={el.images} alt="#"/></SkillLi>
                    )
                })}
            </SkillUl>
        </InfoDiv>
    )
}