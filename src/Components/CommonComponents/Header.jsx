import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyleSpan } from "../MyPage/RecordList";
import "./Header.css";
import { SummonerSerch } from "./SummonerSerch";

const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  width: 390px;
  height: 61px;
  background-color: ${(props) =>
    props.backgroundColor ? "#1E1E46" : "#ff6432"};
  align-items: center;
  padding: 0 10px 0 10px;
  position: relative;
  @media screen and (min-width: 1024px) {
    width: 1024px;
    height: 69px;
  }
`;

const HeaderSpan = styled(StyleSpan)`
  color: ${(props) => (props.color ? "#FF00FF" : "#FFD25A")};
`;

export default function MainHeader({ darkMode }) {
  return (
    <Header backgroundColor={darkMode}>
      <div
        className={darkMode ? "Dark_Gradation_Header" : "Gradation_Header"}
      />
      <img
        className={darkMode ? "Dark_Header_Image" : "Header_Image"}
        src={
          darkMode
            ? `${process.env.PUBLIC_URL}/Image/darkHeader.png`
            : `${process.env.PUBLIC_URL}/Image/nav1.png`
        }
      />
      <img
        className={
          darkMode ? "Dark_Header_Image_Desktop" : "Header_Image_Desktop"
        }
        src={
          darkMode
            ? `${process.env.PUBLIC_URL}/Image/PCDarkHeader.png`
            : `${process.env.PUBLIC_URL}/Image/desktopHeader.png`
        }
      />
      <Link className="Home_Button_Container" to={"/"}>
        <HeaderSpan color={darkMode} fontsize="12px">
          Home
        </HeaderSpan>
      </Link>
      <div className="Logo_Container">
        <StyleSpan
          changeColor={darkMode ? "#FF00FF" : "#FFD25A"}
          fontsize="26px"
          marginLft="30px"
        >
          DODGE.GG
        </StyleSpan>
      </div>
      <div className="Header_Input_Container">
        <SummonerSerch />
      </div>
    </Header>
  );
}
