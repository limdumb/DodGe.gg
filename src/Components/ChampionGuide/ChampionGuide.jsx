import styled from "styled-components";
import QuickGuide from "./QuickGuide";
import DetailedGuide from "./DetailedGuide";
import CountersList from "./CountersList";
import { useState } from "react";

const Main_Container = styled.div`
  height: 100%;
  width: 100%;

  .Guides_Container {
    background-color: bisque;
  }

  @media only screen and (min-width: 1024px) {
    width: 50vw;
    display: flex;
  }
`;

export default function ChampionGuide() {
  // 임시 데이터 설정: 이후 데이터를 props를 통해 받아올 때 삭제 현재 임시 데이터는 삭제
  // const [currentChamp, setCurrentChamp] = useState("");
  const currentChamp = {
    id: "Ashe",
    key: "266",
    name: "아트록스",
    title: "다르킨의 검",
    desc: "한때는 공허에 맞서 싸웠던 슈리마의 명예로운 수호자 아트록스와 그의 종족은 결국 공허보다 위험한 존재가 되어 룬테라의 존속을 위협했지만, 교활한 필멸자의 마법에 속아넘어가 패배하게 되었다. 수백 년에 걸친 봉인 끝에, 아트록스는 자신의 정기가 깃든 마법 무기를 휘두르는 어리석은 자들을 타락시키고 육신을 바꾸는 것으로 다시 한번 자유의 길을 찾아내었다. 이제 이전의 잔혹한 모습을 닮은 육체를 차지한 아트록스는 세상의 종말과 오랫동안 기다려온 복수를...",
    tags: ["Fighter"],
    attack: 8,
    magic: 3,
  };

  return (
    <Main_Container>
      <div className="Guides_Container">
        <QuickGuide currentChamp={currentChamp} />
        <DetailedGuide currentChamp={currentChamp} />
      </div>
      <CountersList currentChamp={currentChamp} />
    </Main_Container>
  );
}
