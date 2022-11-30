import styled from "styled-components";
import MoreSuggestions from "./MoreSuggestions";
import RunesGuide from "./RunesGuide";

const Container = styled.div`
  width: 100%;
  height: 75%;

  @media only screen and (min-width: 768px) {
    height: 55%;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 1024px) {
    height: 75%;
    display: flex;
    flex-direction: column;
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
