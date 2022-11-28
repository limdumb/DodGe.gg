import styled from "styled-components";

const Container = styled.div`
  @media only screen and (min-width: 480px) {
    width: 150px;
    height: 85%;
    margin: 40px 10px;
    border: solid red 1px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export default function CountersList() {
  return <Container></Container>;
}
