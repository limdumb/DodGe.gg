import styled from "styled-components";
import QuickGuide from "./QuickGuide";
import DetailedGuide from "./DetailedGuide";
import CountersList from "./CountersList";

const Main_Container = styled.div`
  width: 100%;
  height: 1200px;

  .Guides_Container {
    height: 100%;
    background-color: bisque;
  }

  @media only screen and (min-width: 768px) {
  }
`;

export default function ChampionGuide() {
  return (
    <Main_Container>
      <div className="Guides_Container">
        <QuickGuide />
        <DetailedGuide />
      </div>
      <CountersList />
    </Main_Container>
  );
}
