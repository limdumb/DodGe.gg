import styled from "styled-components";

const ChampContentBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 40px;
  border: 1px solid pink;
`;
const ListNumber = styled.span`
  width: 40px;
  height: 100%;
  border: 1px solid blue;
  border-radius: 50px;
`;

const ChampImg = styled.img`
  width: 60%;
  height: 100%;
  border: 1px solid green;
`;

const ChamTierImg = styled.img`
  width: 40px;
  height: 100%;
  border: 1px solid brown;
`;

export default function ChampionContent() {
  return (
    <ChampContentBox>
      <ListNumber />
      <ChampImg />
      <ChamTierImg />
    </ChampContentBox>
  );
}
