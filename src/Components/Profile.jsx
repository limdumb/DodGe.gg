// 최종완료
import styled from "styled-components";

const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`

const MainImgeDiv = styled.div`
    width: 90px;
    height: 90px;
    border: 3px solid black;
    box-sizing: border-box;
`

const MainImge = styled.img`
    width:100%;
`

const SimpleDiv = styled.div`
    padding: 10px;
    margin: 5px;
`

const NameSpan = styled.span`
    font-weight: bolder;
    color: white;
`
const TagsUl = styled.ul`
    padding: 10px;
    margin: 5px;
    display : flex;
    
`
const TagsLi = styled.li`
    background-color: darkblue;
    padding: 2px 10px;
    margin: 0 5px;
    border-radius: 20px;
    font-size: 10px;
    outline: 2px solid orange;
    color: orange;
`

export const Profile = ( {championInfo} )=>{
    
    return(
        <InfoDiv>
            <MainImgeDiv>
                <MainImge src={championInfo.image} alt="#"/>
            </MainImgeDiv>
            <SimpleDiv>
                <NameSpan>{championInfo.name}</NameSpan>
            </SimpleDiv>
            <TagsUl>
                {championInfo.position.map((el)=>{ return <TagsLi key={el}><span>{el}</span></TagsLi>})}
            </TagsUl>
        </InfoDiv>
    )
}