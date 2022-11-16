import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MainHeader() {
  return (
    <>
      <Navbar style={{ minWidth: "1200px" }} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dogde.gg</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">챔피언 티어</Nav.Link>
            {/* 로그인은 오른쪽 끝에  */}
            <Nav.Link href="#pricing">Log-in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MainHeader;