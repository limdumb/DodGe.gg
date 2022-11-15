import styled from "styled-components"
import { IoIosArrowForward } from "react-icons/io";

const TitleName = styled.hgroup`
    border-bottom: 1px solid black;
    & > h5 {
      text-align: center;
      margin:0;
    }
  `;

  const SelectDiv = styled.div`
    display:flex;
    justify-content: space-evenly;

    ul{
        padding:0;
        margin:0;
        display:flex;
        align-items: center;
        justify-content: space-evenly;

        li{
            width:50px;
            height:50px;
            margin: 10px;
            position: relative;

            img{
                width:50px;
            }

            span{
                position: absolute;
                padding:1px;
                right:0;
                bottom:0;
                color:white;
                font-size:20px;
            }
        }
    }

    p{
        margin:0;
        padding: 10px;
    }
 
  `


export const SkillBulid = (({profileinfo})=>{

    return (
        <>
            <div>
                <TitleName>
                    <h5>챔피언 스킬빌드</h5>
                </TitleName>
                <SelectDiv>
                   <p>픽 률</p>
                   <p>승 률</p>
                </SelectDiv>
                <SelectDiv>
                    <p>50.5%</p>
                    <p>50.5%</p>
                </SelectDiv>
                <SelectDiv>
                    <ul>
                        <li><span>Q</span><img src={profileinfo.image} alt="#" /></li>
                        <IoIosArrowForward/>
                        <li><span>W</span><img src={profileinfo.image} alt="#" /></li>
                        <IoIosArrowForward/>
                        <li><span>E</span><img src={profileinfo.image} alt="#" /></li>
                    </ul>
                </SelectDiv>
            </div>
        </>
    )
})