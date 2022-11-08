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
    position: relative;
    cursor: pointer;
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
const DescriptionDiv = styled.div`
    margin-top: 50px;
    text-align: left;
`
export const Skill = ({skillinfo, jsonData, text, setText})=>{

    function saveValue(arg){
        setText(arg.target.value)
    }

    return(
        <InfoDiv>
            <SkillUl>
                {skillinfo.map((el, idx)=>{
                    return (
                        <SkillLi 
                        key={el.id} 
                        onClick={saveValue} 
                        value={idx}>
                            <Skillimg
                                src={el.images} alt="#"
                                className={ idx === text ? "is_line" : null}>
                            </Skillimg>
                            <UplineDiv line={idx === text}/>
                        </SkillLi>
                    )})}
            </SkillUl>
            <DescriptionDiv>
                <p>{text === null ? jsonData.lore : skillinfo[text].description}</p>
            </DescriptionDiv>
        </InfoDiv>
    )
}