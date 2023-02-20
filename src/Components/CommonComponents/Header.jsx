import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyleSpan } from "../MyPage/RecordList";
import { SummonerSerch } from "./SummonerSerch";
import "./Header.css";

const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 69px;
  background-color: ${(props) =>
    props.backgroundColor ? "#1E1E46" : "#ff6432"};
  align-items: center;
  position: relative;

  @media screen and (min-width: 1024px) {
    width: 1024px;
  }
`;

const HeaderSpan = styled(StyleSpan)`
  color: ${(props) => (props.darkModecolor ? "#FF00FF" : "#FFD25A")};
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
            ? `${process.env.PUBLIC_URL}/Image/Dark_Mobile_Header.png`
            : `${process.env.PUBLIC_URL}/Image/Light_Mobile_Header.png`
        }
      />
      <img
        className={
          darkMode ? "Dark_Header_Image_Desktop" : "Header_Image_Desktop"
        }
        src={
          darkMode
            ? `${process.env.PUBLIC_URL}/Image/Dark_PC_Header.png`
            : `${process.env.PUBLIC_URL}/Image/Light_PC_Header.png`
        }
      />
      <Link className="Home_Button_Container" to={"/"}>
        <HeaderSpan darkModecolor={darkMode} fontsize="12px">
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
