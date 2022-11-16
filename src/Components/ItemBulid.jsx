import styled from "styled-components"
import { IoIosArrowForward } from "react-icons/io";
const TitleName = styled.hgroup`
    border-bottom: 1px solid black;
    & > h5 {
      text-align: center;
      margin:0;
    }
  `;

const CardUl = styled.ul`
    display:flex;
    flex-wrap: wrap;
    margin:0;
    padding:0;

    li{
        width:60px;
        height:60px;
    }

    img{
        width:60px;
    }
`
const ListUl = styled.ul`
    display:flex;
    margin:0;
    padding:0;
    justify-content: center;
 
    li{
        width:50px;
        height:50px;
    }
    img{
        width:50px;
    }
`

const ListDiv = styled.div`
    margin-top: 20px;
    padding:10px 20px;
    display:flex;

    ul{
        flex-basis: 120px;
        li{
            img{
                border-radius: 10px;
                padding:2px;
            }
        }
    }

    div{
        flex:2;
    }
`

export const ItemBulid = (({profileinfo})=>{


    return (
        <>
            <div>
                <TitleName>
                    <h5>챔피언 아이템빌드</h5>
                </TitleName>
                <ListDiv>
                    <CardUl>
                        <li><img src={profileinfo.image} alt="#" /></li>
                        <li><img src={profileinfo.image} alt="#" /></li>
                        <li><img src={profileinfo.image} alt="#" /></li>
                        <li><img src={profileinfo.image} alt="#" /></li>
                    </CardUl>
                    <div>
                        <ListUl>
                            <li><img src={profileinfo.image} alt="#" /></li>
                            <IoIosArrowForward/>
                            <li><img src={profileinfo.image} alt="#" /></li>
                            <IoIosArrowForward/>
                            <li><img src={profileinfo.image} alt="#" /></li>
                            <IoIosArrowForward/>
                            <li><img src={profileinfo.image} alt="#" /></li>
                            <IoIosArrowForward/>
                            <li><img src={profileinfo.image} alt="#" /></li>
                        </ListUl>
                        <ListUl>
                            <li><img src={profileinfo.image} alt="#" /></li>
                            <IoIosArrowForward/>
                            <li><img src={profileinfo.image} alt="#" /></li>
                            <IoIosArrowForward/>
                            <li><img src={profileinfo.image} alt="#" /></li>
                            <IoIosArrowForward/>
                            <li><img src={profileinfo.image} alt="#" /></li>
                            <IoIosArrowForward/>
                            <li><img src={profileinfo.image} alt="#" /></li>
                        </ListUl>
                    </div>
                </ListDiv>
            </div>
        
        </>
    )
})