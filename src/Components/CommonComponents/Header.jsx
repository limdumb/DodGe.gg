import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyleSpan } from "../MyPage/RecordList";
import "./Header.css";

const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  width: 390px;
  height: 61px;
  background-color: #FF6432;
  align-items: center;
  padding: 0 10px 0 10px;
  position: relative;
  @media screen and (min-width: 1024px){
    width: 1024px;
    height: 69px;
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
  width: 33.9741px;
  height: 15.5879px;
  background: none;
  position: relative;
  top: 2px;
  right: 398px;

  @media screen and (min-width: 1024px){
    border: none;
  font-weight: bold;
  width: 33.9741px;
  height: 15.5879px;
  background: none;
  position: relative;
  top: 0px;
  right: 980px;
  }
`;

export default function MainHeader() {
  return (
    <Header>
      <div className="Gradation_Header"/>
      <img className="Header_Image" src={`${process.env.PUBLIC_URL}/Image/nav1.png`}/>
      <img className="Header_Image_Desktop" src={`${process.env.PUBLIC_URL}/Image/desktopHeader.png`}/>
      <Link className="Home_Button_Container" to={'/'}>
        <TabButton
          color="#FFD25A"
          fontsize="12px"
        >
          Home
        </TabButton>
      </Link>
      <div className="Logo_Container">
        <StyleSpan changeColor="#FFD25A" fontsize="26px">
          DODGE.GG
        </StyleSpan>
      </div>
    </Header>
  );
}