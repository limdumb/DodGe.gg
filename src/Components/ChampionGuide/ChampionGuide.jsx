import styled from "styled-components";
import QuickGuide from "./QuickGuide";
import RunesGuide from "./RunesGuide";
import CountersList from "./CountersList";

const Main__Container = styled.div`
  width: 100%;
  height: 75vh;
  @media only screen and (min-width: 768px) {
    width: 60vw;
    height: 70vh;
    margin: auto;
    padding: 10px;
    background-color: beige;
    display: flex;
  }
`;

const Guides__Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: bisque;
  @media only screen and (min-width: 768px) {
    width: 45vw;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export default function ChampionGuide() {
  return (
    <Main__Container>
      <Guides__Container>
        <QuickGuide />
        <RunesGuide />
      </Guides__Container>
      <CountersList />
    </Main__Container>
  );
}
