import styled from "styled-components";
import { useState } from "react";

const RowFlexDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;

    & > ul{
        flex: 1;
        text-align: center;
    }
`

const ItemDiv = styled.div`
    flex: 1;
    text-align: center;
    cursor: pointer;

    & > div{
        width: 50px;
        height: 50px;
        margin: 0 auto;
    }
`

const BigImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    
`
const RowFlexUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    & > li{
        width: 50px;
        height: 50px;
        margin: 0 auto;

        & > img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }


`

// 현재 해당 컴포넌트는  Api 테스트중 
export const RounesTap = (({profileinfo})=>{
    const [tap, setTap] = useState(Array(2).fill(0).map((el,idx)=> idx + 1))
    const [idx, setIdx] = useState(0)
    
    return(
        <>  
            <h2>챔피언룬</h2>
            <RowFlexDiv>
                {Array.isArray(tap) ? tap.map((el, idx)=>{
                    return (
                        <ItemDiv key={idx} onClick={()=> setIdx(idx)}>
                            <div>
                                <BigImg src={profileinfo.image} alt="#"/>
                            </div>
                        </ItemDiv>
                    )
                }) : null}
            </RowFlexDiv>
            <RowFlexDiv>
                <ul>
                    <li>메인이미지1</li>
                    <RowFlexUl>
                        <li><img src={profileinfo.image} alt="1"></img></li>
                        <li><img src={profileinfo.image} alt="2"></img></li>
                        <li><img src={profileinfo.image} alt="3"></img></li>
                        <li><img src={profileinfo.image} alt="4"></img></li>
                    </RowFlexUl>
                    <RowFlexUl>
                        <li><img src={profileinfo.image} alt="1"></img></li>
                        <li><img src={profileinfo.image} alt="2"></img></li>
                        <li><img src={profileinfo.image} alt="3"></img></li>
                    </RowFlexUl>
                    <RowFlexUl>
                        <li><img src={profileinfo.image} alt="1"></img></li>
                        <li><img src={profileinfo.image} alt="2"></img></li>
                        <li><img src={profileinfo.image} alt="3"></img></li>
                    </RowFlexUl>
                    <RowFlexUl>
                        <li><img src={profileinfo.image} alt="1"></img></li>
                        <li><img src={profileinfo.image} alt="2"></img></li>
                        <li><img src={profileinfo.image} alt="3"></img></li>
                        <li><img src={profileinfo.image} alt="4"></img></li>
                    </RowFlexUl>
                </ul>                             
                <ul>
                    <li>메인이미지2</li>
                    <li><img src="#" alt="1"></img></li>
                    <li><img src="#" alt="2"></img></li>
                    <li><img src="#" alt="3"></img></li>
                    <li><img src="#" alt="4"></img></li>
                    <ul>
                        <li><img src="#" alt="1"></img></li>
                        <li><img src="#" alt="2"></img></li>
                        <li><img src="#" alt="3"></img></li>
                    </ul>                             
                </ul>                             
            </RowFlexDiv>
        </>
    )
})