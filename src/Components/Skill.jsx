import styled from "styled-components";

const InfoDiv = styled.div`
    position: relative;
    color:white;
    text-align: center;
`   
const SkillUl = styled.ul`
    display: flex;
    justify-content: space-around;
    margin-bottom: 150px;
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
    position: absolute;
    top: 100%;
    margin-top: 50px;
    text-align: left;
    & > h4{
        text-align: center;
        margin-bottom: 10px;
    }
`
export const Skill = ({skillinfo, skilltext, setSkillText})=>{
    function saveValue(arg){
        setSkillText(arg.target.value)
    }

    return(
        <InfoDiv>
            <SkillUl>
                {Array.isArray(skillinfo) ? skillinfo.map((el, idx)=>{
                    return (
                        <SkillLi 
                        key={el.id} 
                        onClick={saveValue} 
                        value={idx}>
                            <Skillimg
                                src={el.images} alt="#"
                                className={ idx === skilltext ? "is_line" : null}>
                            </Skillimg>
                            <UplineDiv line={idx === skilltext}/>
                        </SkillLi>
                    )}): null}
            </SkillUl>
            <DescriptionDiv>
                <h4>{skilltext === null ? skillinfo[0]?.title : skillinfo[skilltext].name}</h4>
                <p>{skilltext === null ? skillinfo[0]?.lore : skillinfo[skilltext].description}</p>
            </DescriptionDiv>
        </InfoDiv>
    )
}