import styled from "styled-components";

const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`

const MainImgeDiv = styled.div`
    width:90px;
    height: 90px;
    outline: 3px solid black;
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

export const Profile = ( {jsonData} )=>{

    function changeData(data, type){
        
    }


    let ChampionImage = changeData(jsonData, "image");
    let ChampionName = changeData(jsonData, "name");
    let ChampionPostion = changeData(jsonData, "postion");

    console.log("챔피언 이미지",ChampionImage)
    console.log("챔피언 이름",ChampionName)
    console.log("챔피언 포지션",ChampionPostion)

    // console.log(jsonData.data.Aatrox.name)


    return(
        <InfoDiv>
            <MainImgeDiv>
                <MainImge src="챔피언이미지" alt="#"/>
            </MainImgeDiv>
            <SimpleDiv>
                <NameSpan>챔피언이름</NameSpan>
            </SimpleDiv>
            <TagsUl>
                {/* {ChampionPostion.map((el)=>{ return <TagsLi key={el}><span>{el}</span></TagsLi>})} */}
                챔피언 포지션
            </TagsUl>
        </InfoDiv>
    )
}