import styled from "styled-components";

const TitleName = styled.hgroup`
  border-bottom: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  & > h4 {
    text-align: center;
  }
`;


// 현재 해당 컴포넌트는  Api 테스트중
// profileinfo 임시
export const RounesTap = ({ profileinfo }) => {
  return (
    <>
      <TitleName>
        <h4>{`${profileinfo.name} 룬`}</h4>
      </TitleName>
      
    </>
  );
};
