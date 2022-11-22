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
    box-sizing: content-box;
    height:20px;
    padding: 10px;
    margin: 5px;
`
const NameSpan = styled.span`
    font-weight: bolder;
    color: white;
`
const TagsUl = styled.ul`
    box-sizing: content-box;
    text-align: center;
    height:40px;
    padding: 10px;
    margin: 5px;
    display : flex;
    justify-content: center;
    align-items: center;
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
    const getPositionName = (line) => {
        const maps = {
            Fighter: '전사',
            Tank : "탑",
            Mage : "마법사",
            Assassin : "암살자",
            Marksman : "원거리딜러",
            Support : "서포터",

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
                <TagsLi key={el}><span>{getPositionName(el)}</span></TagsLi>) : "s"}
            </TagsUl>
        </InfoDiv>
    )
}