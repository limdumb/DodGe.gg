import styled from "styled-components";
import { useState } from "react";
// https://lol.inven.co.kr/dataninfo/mastery/

const TitleName = styled.hgroup`
  border-bottom: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  & > h2 {
    text-align: center;
  }
`;

const TapDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 10px;
  & > div {
    flex: 1;
    text-align: center;
    cursor: pointer;
    border: 1px solid black;

    & > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
`;

const RounseDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  & > div {
    flex: 1;
    text-align: center;
  }
`;

const LeftUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  width: 300px;

  & > li {
    width: 50px;
    height: 50px;
    line-height: 46px;

    & img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
`;
const RightUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  width: 300px;

  & > li {
    width: 50px;
    height: 50px;
    line-height: 46px;

    & > img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
`;

// 현재 해당 컴포넌트는  Api 테스트중
// profileinfo 임시
export const RounesTap = ({ profileinfo }) => {
  const tap = [0,1];
  const [tapChange, setTapChange] = useState(true);

  return (
    <>
      <TitleName>
        <h2>챔피언룬</h2>
      </TitleName>
      <TapDiv>
        {Array.isArray(tap)? tap.map((el, idx) => {
              return ( <div key={idx} onClick={()=>setTapChange(!tapChange)}><img src={profileinfo.image} alt="#" /></div>);
            }) : null}
      </TapDiv>
      {tapChange ?
        // 첫번째 탭
        (<p>정밀&결의</p>) :
        // 두번째 탭
        (<p>결의&지배</p>)
        }
      {/* <RounseDiv>
        <div>
          <LeftUl>
            <li>
              <img src={profileinfo.image} alt="1"></img>
            </li>
          </LeftUl>
          <LeftUl>
            <li>
              <img src={profileinfo.image} alt="1"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="2"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="3"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="4"></img>
            </li>
          </LeftUl>
          <LeftUl>
            <li>
              <img src={profileinfo.image} alt="1"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="2"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="3"></img>
            </li>
          </LeftUl>
          <LeftUl>
            <li>
              <img src={profileinfo.image} alt="1"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="2"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="3"></img>
            </li>
          </LeftUl>
          <LeftUl>
            <li>
              <img src={profileinfo.image} alt="1"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="2"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="3"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="4"></img>
            </li>
          </LeftUl>
        </div>
        <div>
          <RightUl>
            <li>
              <img src={profileinfo.image} alt="1"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="2"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="3"></img>
            </li>
          </RightUl>
          <RightUl>
            <li>
              <img src={profileinfo.image} alt="1"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="2"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="3"></img>
            </li>
          </RightUl>
          <RightUl>
            <li>
              <img src={profileinfo.image} alt="1"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="2"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="3"></img>
            </li>
          </RightUl>
          <RightUl>
            <li>
              <img src={profileinfo.image} alt="1"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="2"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="3"></img>
            </li>
          </RightUl>
          <RightUl>
            <li>
              <img src={profileinfo.image} alt="1"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="2"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="3"></img>
            </li>
          </RightUl>
          <RightUl>
            <li>
              <img src={profileinfo.image} alt="1"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="2"></img>
            </li>
            <li>
              <img src={profileinfo.image} alt="3"></img>
            </li>
          </RightUl>
        </div>
      </RounseDiv> */}
    </>
  );
};
