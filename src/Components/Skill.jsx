import styled from "styled-components";
import {useState} from "react";
import { act } from "react-dom/test-utils";



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

    
    &:hover > img{
        transform: translateY(-10px);
        
    }
    `
    

const Skillimg = styled.img`
    border-radius: 10px;
    transition: 0.5s;
    pointer-events: none;

    &.is_open{
        outline: 2px solid yellow;
        transform: translateY(-10px);
    }
`



export const Skill = ({skillinfo, jsonData})=>{

    const [currentValue, setCurrentValue] = useState(0);
    
    function saveValue(arg){setCurrentValue(arg.target.value)}

    return(
        <InfoDiv>
            <h1>{jsonData.name} 스킬</h1>
            <SkillUl>
                {skillinfo.map((el, idx)=>{
                    return (
                        <SkillLi 
                        key={el.id} 
                        onClick={saveValue} 
                        value={idx}>
                            <Skillimg src={el.images} alt="#"
                            className={ idx === currentValue ? "is_open" : "null"}/>
                        </SkillLi>
                    )
                })}
            </SkillUl>
        </InfoDiv>
    )
}