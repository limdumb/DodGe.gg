import styled from "styled-components";
const TitleName = styled.hgroup`
    border-bottom: 1px solid black;
    padding: 10px;
    margin-bottom: 10px;
    & > h5 {
      text-align: center;
    }
  `;

  const SubName = styled.hgroup`
    display: flex;
    text-align: center;
    background-color: gray;
    align-items: center;
    & > h5 {
      margin: 0;
      flex: 2;
      font-size:15px;
      
    }
    & > div {
      flex: 3;
      

      & > span {
        margin-right: 75px;
      }
    }
  `;

  const SelectDiv = styled.div`
        display:flex;
        padding:9px;
        font-size:14px;
    
    & > div:first-child{
        flex:2;
        width:126px;
        height: 35px;

        img:last-child {
          padding-left: 10px;
        }
    
        img {
          box-sizing: content-box;
          width: 30px;
          padding: 0 10px;
        }
    }

    & > div:last-child{
        display:flex;
        align-items: center;
        flex:3;
    }
  `;

    const GraphDiv = styled.div`
        background-color: gray;
        width:50px;
        height:12px;
        border-radius: 10px;
        position: relative;
        margin-right: 55px;

        &::before{
            content: "";
            display:block;
            background-color: black;
            width:25px;
            height:12px;
            border-radius: 10px;
        }
        &::after{
            content: "50.0%";
            display:block;
            position: absolute;
            right:-100%;;
            top:-6px;            
        }
    `



export const Bulid = ({ profileinfo }) => {
  
  return (
    <>
      <TitleName>
        <h5>{`${profileinfo.name} 빌드`}</h5>
      </TitleName>
      <div>
        <SubName>
          <h5>스펠 선호도</h5>
          <div>
            <span>픽률</span>
            <span>승률</span>
          </div>
        </SubName>
        <SelectDiv>
          <div>
            <img src={profileinfo.image} alt="#" />
            <img src={profileinfo.image} alt="#" />
          </div>
          <div>
            <GraphDiv></GraphDiv>
            <GraphDiv></GraphDiv>
          </div>
        </SelectDiv>
        <SelectDiv>
          <div>
            <img src={profileinfo.image} alt="#" />
            <img src={profileinfo.image} alt="#" />
          </div>
          <div>
            <GraphDiv></GraphDiv>
            <GraphDiv></GraphDiv>
          </div>
        </SelectDiv>
      </div>


      <div>
        <SubName>
          <h5>시작 아이템</h5>
          <div>
            <span>픽률</span>
            <span>승률</span>
          </div>
        </SubName>
        <SelectDiv>
          <div>
            <img src={profileinfo.image} alt="#" />
            <img src={profileinfo.image} alt="#" />
          </div>
          <div>
            <GraphDiv></GraphDiv>
            <GraphDiv></GraphDiv>
          </div>
        </SelectDiv>
        <SelectDiv>
          <div>
            <img src={profileinfo.image} alt="#" />
            <img src={profileinfo.image} alt="#" />
          </div>
          <div>
            <GraphDiv></GraphDiv>
            <GraphDiv></GraphDiv>
          </div>
        </SelectDiv>
      </div>


      <div>
        <SubName>
          <h5>신발</h5>
          <div>
            <span>픽률</span>
            <span>승률</span>
          </div>
        </SubName>
        <SelectDiv>
          <div>
            <img src={profileinfo.image} alt="#" />
            <span>광전사의 군화</span>
          </div>
          <div>
            <GraphDiv></GraphDiv>
            <GraphDiv></GraphDiv>
          </div>
        </SelectDiv>
        <SelectDiv>
          <div>
            <img src={profileinfo.image} alt="#" />
            <span>광전사의 군화</span>
          </div>
          <div>
            <GraphDiv></GraphDiv>
            <GraphDiv></GraphDiv>
          </div>
        </SelectDiv>
        <SelectDiv>
          <div>
            <img src={profileinfo.image} alt="#" />
            <span>광전사의 군화</span>
          </div>
          <div>
            <GraphDiv></GraphDiv>
            <GraphDiv></GraphDiv>
          </div>
        </SelectDiv>
      </div>
      {/* <div>
        <hgroup>
          <h5>가렌스킬빌드</h5>
          <div>
            <span>Q</span>
            <span>W</span>
            <span>E</span>
            <span>R</span>
          </div>
        </hgroup>
      </div> */}
    </>
  );
};
