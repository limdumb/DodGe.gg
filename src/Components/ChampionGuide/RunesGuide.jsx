import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 70%;
  background-color: tan;

  @media only screen and (min-width: 768px) {
    width: 40vw;
    height: 30vh;
    margin: 2.5vh 1vw;
    padding: 2.25vw;
    border: solid blue 1px;
    display: flex;
  }
`;

const Runes = styled.div`
  width: 100%;
  height: 50%;
  border: solid violet 1px;

  @media only screen and (min-width: 768px) {
    width: 25vw;
    height: 26vh;
    border: solid black 1px;
    margin-right: 2vw;
  }
`;

const Spells__Container = styled.div`
  width: 100%;
  height: 50%;
`;

const Spells = styled.div`
  width: 100%;
  height: 100%;
  border: solid black 1px;

  @media only screen and (min-width: 768px) {
    width: 15vw;
    height: 12.5vh;
    border: solid black 1px;
    margin-bottom: 10px;
  }
`;

const Items = styled.div`
  width: 100%;
  height: 100%;
  border: solid black 1px;

  @media only screen and (min-width: 768px) {
    width: 15vw;
    height: 12.5vh;
    border: solid black 1px;
  }
`;

export default function RunesGuide() {
  return (
    <Container>
      <Runes />
      <Spells__Container>
        <Spells />
        <Items />
      </Spells__Container>
    </Container>
  );
}
