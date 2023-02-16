import styled from "styled-components";
import CountersList from "./CountersList";
import RunesGuide from "./RunesGuide";

const Guide_Container = styled.div`
  height: 1300px;
  margin-bottom: 1px;

  @media only screen and (min-width: 768px) {
    height: 425px;
  }

  @media only screen and (min-width: 1024px) {
  }
`;

export default function DetailedGuide({ currentChamp, darkMode }) {
  return (
    <Guide_Container>
      <RunesGuide currentChamp={currentChamp} darkMode={darkMode} />
      <CountersList currentChamp={currentChamp} darkMode={darkMode} />
    </Guide_Container>
  );
}
