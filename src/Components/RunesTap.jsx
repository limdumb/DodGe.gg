import styled from "styled-components";

const TitleName = styled.hgroup`
  border-bottom: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  & > h4 {
    text-align: center;
  }
`;

export const RounesTap = ({ profileinfo }) => {
  return (
    <>
      <TitleName>
        <h4>{`${profileinfo.name} 룬`}</h4>
      </TitleName>
      
    </>
  );
};
