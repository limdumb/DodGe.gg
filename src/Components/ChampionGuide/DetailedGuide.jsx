import styled from "styled-components";
import CountersList from "./CountersList";
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

export default function DetailedGuide({ currentChamp }) {
  return (
    <Guide_Container>
      <RunesGuide currentChamp={currentChamp} />
      <CountersList currentChamp={currentChamp} />
    </Guide_Container>
  );
}
