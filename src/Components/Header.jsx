// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { StyleSpan } from "./MyPage/RecordList";
import "./Header.css";

const Header = styled.header`
  display: flex;
  width: 100%;
  background-color: black;
  height: 70px;
  background-color: rgb(45, 43, 46);
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;

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
`

const SubmitButton = styled(StyledButton)`
  border: none;
  position: absolute;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

function MainHeader() {
  return (
    <Header>
      <TabButton backgroundColor="rgb(45, 43, 46)" color="white" fontsize="21px">Home</TabButton>
      <StyleSpan changeColor="white" fontsize="30px">
        DodGe.GG
      </StyleSpan>
      <div>
        <input id="Serch__Input" type="text" placeholder="소환사명"></input>
        <SubmitButton
          width="54px"
          height="35px"
          backgroundColor="white"
          borderBrRadius="10px"
          borderTrRadius="10px"
          right="10px"
          fontsize="26px"
        >
          .GG
        </SubmitButton>
      </div>
    </Header>
  );
}

export default MainHeader;

// return (
//   <>
//     <Navbar className="Nav__bar" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home">Dogde.gg</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link href="#home">홈</Nav.Link>
//           <Nav.Link href="#features">챔피언 티어</Nav.Link>
//           {/* 로그인은 오른쪽 끝에  */}
//           <Nav.Link href="#pricing">Log-in</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   </>
// );
