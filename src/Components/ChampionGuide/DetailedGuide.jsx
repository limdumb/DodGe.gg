import styled from "styled-components";
import MoreSuggestions from "./MoreSuggestions";
import RunesGuide from "./RunesGuide";

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

export default function DetailedGuide() {
  return (
    <Container>
      <RunesGuide />
      <MoreSuggestions />
    </Container>
  );
}
