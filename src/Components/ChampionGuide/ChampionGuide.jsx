import styled from "styled-components";
import QuickGuide from "./QuickGuide";
import DetailedGuide from "./DetailedGuide";
import CountersList from "./CountersList";

const Main_Container = styled.div`
  width: 100%;
  height: 75vh;
  overflow: hidden;

  .Guides_Container {
    width: 100%;
    height: 100%;
    background-color: bisque;
  }

  @media only screen and (min-width: 768px) {
    width: 60vw;
    height: 100vh;
    margin: auto;
    padding: 10px;
    display: flex;

    .Guides_Container {
      width: 100%;
      padding: 2.5%;
    }
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
