import styled from "styled-components";

const PosBox = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 30px;
  margin: 5px;
`;

const PosImg = styled.img`
  width: 30px;
  height: 100%;
`;

export default function PriceCotent() {
  return (
    <PosBox className="PosBox">
      <div>
        <PosImg />
        <span>챔피언이름</span>
      </div>
      <span>가격</span>
    </PosBox>
  );
}
