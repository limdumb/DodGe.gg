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

const SubmitButton = styled.button`
  width: 54px;
  height: 35px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: white;
  border: none;
  font-size: 0px;
  position: absolute;
  right: 10px;
  color: black;
  font-size: 20px;
`;

function MainHeader() {
  return (
    <Header>
      <StyleSpan changeColor="white" fontsize="30px">
        DodGe.GG
      </StyleSpan>
      <div>
        <input id="Serch__Input" type="text" placeholder="소환사명"></input>
        <SubmitButton>.GG</SubmitButton>
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
