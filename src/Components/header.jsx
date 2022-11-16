import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

<<<<<<< HEAD
function MainHeader() {
  return (
    <>
      <Navbar style={{ minWidth: "1200px" }} bg="dark" variant="dark">
=======
function ColorSchemesExample() {
  return (
    <>
      <Navbar className="Nav__bar" bg="dark" variant="dark">
>>>>>>> 4dc08e155c562e3cb41ad5af1dbafa1ea22f4c55
        <Container>
          <Navbar.Brand href="#home">Dogde.gg</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">챔피언 티어</Nav.Link>
<<<<<<< HEAD
=======
            {/* 로그인은 오른쪽 끝에  */}
>>>>>>> 4dc08e155c562e3cb41ad5af1dbafa1ea22f4c55
            <Nav.Link href="#pricing">Log-in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

<<<<<<< HEAD
export default MainHeader;
=======
export default ColorSchemesExample;
>>>>>>> 4dc08e155c562e3cb41ad5af1dbafa1ea22f4c55
