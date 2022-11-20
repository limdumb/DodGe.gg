import styled from "styled-components"


const Layout = styled.div`
    display: flex;
    height: 415px;
    justify-content: center;

    & > ul{
        flex:1.5;
        background-color: gray;
        display: flex;
        flex-direction: column;

        & > li{
            flex:1;
        }
      }

    & > div{
        flex:3;
        padding: 30px;
    }
`


const FlexMainImages = styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        
        
    & > div{
        border: 1px solid black;
        padding: 2px;
        border-radius: 50%;
     
    }

    img{
        width:50px;
        border-radius: 50%;
    }
`

const FlexBigImages = styled.div`
        display: flex;
        justify-content: space-between;

    & > div{
        border: 1px solid black;
        padding: 2px;
        border-radius: 50%;
    }
        
    img{
        width:45px;
        border-radius: 50%;
    }
`
const FlexSmallImages = styled.div`
        display: flex;
        justify-content: space-between;

    & > div{
        border: 1px solid black;
        padding: 1px;
        border-radius: 50%;
    }

    img{
        width:40px;
        border-radius: 50%;
    }
`
const FlexMiniImages = styled.div`
        display: flex;
        justify-content: space-between;

    & > div{
        border: 1px solid black;
        padding: 1px;
        border-radius: 50%;
    }

    img{
        width:26px;
        border-radius: 50%;
    }
`

const All = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`



export const RunesInfo = ({profileinfo}) => {

    return (
        <>
            <Layout>
                <ul>
                    <li>
                        <img src={profileinfo.image} alt="#"/>
                    </li>
                    <li>
                        <img src={profileinfo.image} alt="#"/>
                    </li>
                </ul>

                {/* 왼쪽 */}
                <All>
                    <FlexMainImages>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                    </FlexMainImages>
                    <FlexBigImages>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                    </FlexBigImages>
                    <hr/>
                    <FlexSmallImages>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                    </FlexSmallImages>
                    <FlexSmallImages>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                    </FlexSmallImages>
                    <FlexSmallImages>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                    </FlexSmallImages>
                </All>

                {/* 오른쪽 */}
                <All>
                    <FlexMainImages>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                    </FlexMainImages>
                    <FlexSmallImages>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                    </FlexSmallImages>
                    <FlexSmallImages>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                    </FlexSmallImages>
                    <FlexSmallImages>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                    </FlexSmallImages>
                    <hr/>
                    <FlexMiniImages>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                    </FlexMiniImages>
                    <FlexMiniImages>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                    </FlexMiniImages>
                    <FlexMiniImages>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                        <div>
                            <img src={profileinfo.image} alt="#"/>
                        </div>
                    </FlexMiniImages>
                    
                </All>
            </Layout>
        </>
        
    )
}