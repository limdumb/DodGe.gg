import styled from "styled-components";
import { useState } from "react";

const RowFlexDiv = styled.div`
    display: flex;
    flex-direction: row;

    & > div{
        flex: 1;
        text-align: center;
    }
`

const ItemDiv = styled.div`
    flex: 1;
    text-align: center;
    cursor: pointer;
    background-color: red;
    text-align: center;

    & > div{
        width: 50px;
        height: 50px;
        margin: 0 auto;
        background-color: blue;
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
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 10px;
    width:300px;
    
    & > li{
        width: 50px;
        height: 50px;
        line-height: 46px;


        & > img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            vertical-align: middle;
        }
    }
`
const TitleName = styled.hgroup`
    border-bottom: 1px solid black;
    padding: 10px;
    margin-bottom: 10px;
    & > h2{
        text-align: center;
    }
`

// 현재 해당 컴포넌트는  Api 테스트중 
export const RounesTap = (({profileinfo})=>{
    const [tap, setTap] = useState(Array(2).fill(0).map((el,idx)=> idx + 1))
    const [idx, setIdx] = useState(0)
    
    return(
        <>  
            <TitleName>
                <h2>챔피언룬</h2>
            </TitleName>	
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
                <div>
                    <RowFlexUl>
                        <li><img src={profileinfo.image} alt="1"></img></li>
                        <li><img src={profileinfo.image} alt="2"></img></li>
                        <li><img src={profileinfo.image} alt="3"></img></li>
                        <li><img src={profileinfo.image} alt="4"></img></li>
                    </RowFlexUl>
                    <hr/>
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
                </div>                             
                <div>
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
                    </RowFlexUl>
                    <hr/>
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
                    </RowFlexUl>                          
                </div>                             
            </RowFlexDiv>
        </>
    )
})