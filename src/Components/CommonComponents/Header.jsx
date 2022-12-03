import styled from "styled-components";
import { StyleSpan } from "../MyPage/RecordList";
import "./Header.css";
import SerchInput from "./SerchInput";

const Header = styled.header`
  box-sizing: border-box;
  float: left;
  display: flex;
  width: 100%;
  background-color: black;
  height: 70px;
  background-color: rgb(45, 43, 46);
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
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

export default function MainHeader() {
  return (
    <Header>
      <TabButton
        backgroundColor="rgb(45, 43, 46)"
        color="white"
        fontsize="0.8rem"
      >
        Home
      </TabButton>
      <div className="Logo_Container">
      <StyleSpan changeColor="white" fontsize="1.2rem" fontweight="bold">
        DodGe.GG
      </StyleSpan>
      </div>
      <SerchInput/>
    </Header>
  );
}
