import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30%;
  background-color: thistle;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (min-width: 768px) {
    width: 40vw;
    height: 30vh;
    margin: 2.5vh 1vw;
    padding: 2.25vw;
    border: solid green 1px;
    flex-wrap: wrap;
  }
`;

const Champion__Portrait = styled.div`
  border: solid black 1px;
  width: 40%;
  height: 70%;

  @media only screen and (min-width: 768px) {
    width: 12.5vw;
    height: 12.5vh;
    margin-right: 2.5vw;
  }
`;

const Information = styled.div`
  border: solid blue 1px;
  width: 60%;
  height: 70%;

  @media only screen and (min-width: 768px) {
    width: 20vw;
    height: 12.5vh;
    border: solid black 1px;
  }
`;

const Quick__Build = styled.div`
  width: 100%;
  height: 30%;
  border: solid white 1px;

  @media only screen and (min-width: 768px) {
    border: solid black 1px;
    width: 35vw;
    height: 7.5vh;
  }
`;

export default function QuickGuide() {
  return (
    <Container>
      <Champion__Portrait />
      <Information />
      <Quick__Build />
    </Container>
  );
}
