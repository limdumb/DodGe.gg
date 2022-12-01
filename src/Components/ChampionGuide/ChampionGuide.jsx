import styled from "styled-components";
import QuickGuide from "./QuickGuide";
import DetailedGuide from "./DetailedGuide";
import CountersList from "./CountersList";

const Main_Container = styled.div`
  height: 100%;
  width: 100%;

  .Guides_Container {
    background-color: bisque;
    @media only screen and (min-width: 1024px) {
      width: 40vw;
    }
  }

  @media only screen and (min-width: 768px) {
    height: 100%;
  }

  @media only screen and (min-width: 1024px) {
    width: 60%;
    margin: auto;
    display: flex;
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
