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
    position: relative;
    

    &::before{
        position: absolute;
        content:"";
        display:block;
        width: 270%;
        height: 1px;
        background-color:black;
        border-radius: 50%;
        bottom: -30px;
        left:-80%;
        
    }

    &::after{
        position: absolute;
        content:"";
        display:block;
        width: 8px;
        height: 8px;
        background-color:black;
        border-radius: 50%;
        transition: 0.5s;
        bottom: -34px;
        transform: translateX(30px);
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

    &.is_line{
        outline: 3px solid yellow;
        outline-style: double;
        transform: translateY(-10px);
    }

    
`
const UplineDiv = styled.div`
    position: absolute;
    width:1px;
    height: ${({line})=> line ? "25px" : "0px"};
    background-color: yellow;
    bottom: -20px;
    transform: translateX(34px);
    transition: .3s ease-in;
    
    `




export const Skill = ({skillinfo, jsonData})=>{

    const [currentValue, setCurrentValue] = useState(null);
    
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
                            className={ idx === currentValue ? "is_line" : null}>
                            </Skillimg>
                            <UplineDiv line={idx === currentValue}/>
                        </SkillLi>
                    )})}
            </SkillUl>

        </InfoDiv>
    )
}