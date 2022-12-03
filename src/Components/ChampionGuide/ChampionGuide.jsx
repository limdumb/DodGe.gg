import styled from "styled-components";
import QuickGuide from "./QuickGuide";
import DetailedGuide from "./DetailedGuide";
import CountersList from "./CountersList";

const Main_Container = styled.div`
  height: 100%;
  width: 100%;


  .Guides_Container {
    background-color: bisque;
  }

  @media only screen and (min-width: 1024px) {
    width: 50vw;
    display: flex;
    margin: 0 auto;
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
