import styled from "styled-components";
import { RunesInfo } from "./RunesInfo";

const TitleName = styled.hgroup`
  
  border-bottom: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  & > h4 {
    text-align: center;
  }
`;

const Tapul = styled.ul`
  display:flex;
  text-align:center;
  margin-bottom: 5px;
  

  li{
    flex:1;
    border: 1px solid red;
    background-color: green;
  }
`

export const RounesTap = ({ profileinfo }) => {
  return (
    <>
      <TitleName>
        <h4>{`${profileinfo.name} 룬`}</h4>
      </TitleName>
      <Tapul>
        <li>탑</li>
        <li>미드</li>
        <li>칼바람 나락</li>
      </Tapul>
      <RunesInfo profileinfo={profileinfo}></RunesInfo>
    </>
  );
};
