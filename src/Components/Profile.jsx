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
    cursor: pointer;
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

export const Profile = ( {profileinfo, setSkillText} )=>{
    const getPositionKorean = (line) => {
        const maps = {
            Fighter: '전사',
            Tank : "탑",
        }
        return maps[line];    
    };

    return(
        <InfoDiv>
            <MainImgeDiv onClick={()=> setSkillText(null)}>
                <MainImge src={profileinfo.image} alt="#"/>
            </MainImgeDiv>
            <SimpleDiv>
                <NameSpan>{profileinfo.name}</NameSpan>
            </SimpleDiv>
            <TagsUl>
                { Array.isArray(profileinfo.position) ? 
                profileinfo.position.map((el) => 
                <TagsLi key={el}><span>{getPositionKorean(el)}</span></TagsLi>) : "s"}
            </TagsUl>
        </InfoDiv>
    )
}