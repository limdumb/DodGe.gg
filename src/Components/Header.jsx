import styled from "styled-components";
import { StyleSpan } from "./MyPage/RecordList";
import "./Header.css";

const Header = styled.header`
  float: left;
  display: flex;
  width: 100%;
  background-color: black;
  height: 70px;
  background-color: rgb(45, 43, 46);
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;

  @media screen and (max-width: 768px){
    width: 100%;
  }

  div {
    display: flex;
    height: 80%;
    align-items: center;
  }
`;

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border-top-right-radius: ${(props) => props.borderTrRadius};
  border-bottom-right-radius: ${(props) => props.borderBrRadius};
  right: ${(props) => props.right};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontsize};
`;

const TabButton = styled(StyledButton)`
  border: none;
  font-weight: bold;
`;

const SubmitButton = styled(StyledButton)`
  border: none;
  position: absolute;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function MainHeader() {
  return (
    <Header>
      <TabButton
        backgroundColor="rgb(45, 43, 46)"
        color="white"
        fontsize="1.2rem"
      >
        Home
      </TabButton>
      <StyleSpan changeColor="white" fontsize="1.9rem" width="3rem">
        DodGe.GG
      </StyleSpan>
      <div>
        <input id="Serch_Input" type="text" placeholder="소환사명"></input>
        <SubmitButton
          width="4.3rem"
          height="2.9rem"
          backgroundColor="white"
          borderBrRadius="10px"
          borderTrRadius="10px"
          right="10px"
          fontsize="1.4rem"
        >
          .GG
        </SubmitButton>
      </div>
    </Header>
  );
}
