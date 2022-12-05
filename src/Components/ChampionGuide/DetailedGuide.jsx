import styled from "styled-components";
import MoreSuggestions from "./MoreSuggestions";
import RunesGuide from "./RunesGuide";

const Guide_Container = styled.div`
  height: 750px;

  @media only screen and (min-width: 768px) {
    height: 1050px;
  }

  @media only screen and (min-width: 1024px) {
    height: 725px;
  }
`;

export default function DetailedGuide() {
  return (
    <Guide_Container>
      <RunesGuide />
      <MoreSuggestions />
    </Guide_Container>
  );
}
