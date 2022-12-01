import styled from "styled-components";

const Runes_Container = styled.div`
  height: 250px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  text-align: center;

  @media only screen and (min-width: 768px) {
    height: 350px;
    padding: 0 100px;
  }

  @media only screen and (min-width: 1024px) {
  }
`;

const Main_Runes = styled.div`
  flex: 1;

  h2 {
    margin: 5px;
    color: antiquewhite;
  }

  @media only screen and (min-width: 768px) {
    h2 {
      margin: 10px;
    }
  }
`;

const Sub_Runes = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 5px;
    color: antiquewhite;
  }
  @media only screen and (min-width: 768px) {
    h2 {
      margin: 10px;
    }
  }
`;

const Rune_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;

  .Selected {
    opacity: 1;
  }

  .Sub_Size {
    height: 35px;
  }

  @media only screen and (min-width: 768px) {
    .Sub_Size {
      height: 50px;
      margin: 7.5px 10px;
    }
  }

  @media only screen and (min-width: 1024px) {
  }
`;

const Main_Rune = styled.li`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 100%;
  height: 45px;
  margin: 7.5px;
  opacity: 0.4;

  img {
    width: 100%;
    height: 100%;
  }

  .Selected {
    border: solid 1px rgba(255, 215, 0, 0.5);
    border-radius: 100%;
  }

  @media only screen and (min-width: 768px) {
    height: 65px;
    margin: 5px 10px;
  }

  @media only screen and (min-width: 1024px) {
  }
`;

const Sub_Rune = styled.li`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 100%;
  height: 35px;
  margin: 5px;
  opacity: 0.3;

  img {
    width: 100%;
    height: 100%;
  }

  .Selected {
    border: solid 1px rgba(255, 215, 0, 0.5);
    border-radius: 100%;
  }

  @media only screen and (min-width: 768px) {
    height: 45px;
    margin: 7.5px;
  }

  @media only screen and (min-width: 1024px) {
  }
`;

const Stat_Wrapper = styled.div`
  height: 50px;

  ul {
    justify-content: center;
  }

  @media only screen and (min-width: 1024px) {
  }
`;

const Stat_Icon = styled.li`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 100%;
  height: 17.5px;
  margin: 2.5px 5px;
  opacity: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }

  .Selected {
    border: solid 1px rgba(255, 215, 0, 0.5);
    border-radius: 100%;
  }

  @media only screen and (min-width: 768px) {
    height: 25px;
    margin: 3px 7.5px;
  }

  @media only screen and (min-width: 1024px) {
  }
`;

export default function RunesGuide() {
  const RuneImagesURL = "https://ddragon.canisback.com/img/perk-images/Styles/";
  const StatImagesURL =
    "https://ddragon.canisback.com/img/perk-images/StatMods/";
  return (
    <Runes_Container>
      <Main_Runes>
        <h2>마법</h2>
        <Rune_Wrapper>
          <Row>
            <Main_Rune className="Selected">
              <img
                src={`${RuneImagesURL}/Sorcery/SummonAery/SummonAery.png`}
                className="Selected"
              ></img>
            </Main_Rune>
            <Main_Rune>
              <img
                src={`${RuneImagesURL}/Sorcery/ArcaneComet/ArcaneComet.png`}
              ></img>
            </Main_Rune>
            <Main_Rune>
              <img
                src={`${RuneImagesURL}/Sorcery/PhaseRush/PhaseRush.png`}
              ></img>
            </Main_Rune>
          </Row>
          <Row>
            <Main_Rune className="Sub_Size">
              <img
                src={`${RuneImagesURL}/Sorcery/NullifyingOrb/Pokeshield.png`}
              ></img>
            </Main_Rune>
            <Main_Rune className="Sub_Size Selected">
              <img
                src={`${RuneImagesURL}/Sorcery/ManaflowBand/ManaflowBand.png`}
                className="Selected"
              ></img>
            </Main_Rune>
            <Main_Rune className="Sub_Size">
              <img src={`${RuneImagesURL}/Sorcery/NimbusCloak/6361.png`}></img>
            </Main_Rune>
          </Row>
          <Row>
            <Main_Rune className="Sub_Size Selected">
              <img
                src={`${RuneImagesURL}/Sorcery/Transcendence/Transcendence.png`}
                className="Selected"
              ></img>
            </Main_Rune>
            <Main_Rune className="Sub_Size">
              <img
                src={`${RuneImagesURL}/Sorcery/Celerity/CelerityTemp.png`}
              ></img>
            </Main_Rune>
            <Main_Rune className="Sub_Size">
              <img
                src={`${RuneImagesURL}/Sorcery/AbsoluteFocus/AbsoluteFocus.png`}
              ></img>
            </Main_Rune>
          </Row>
          <Row>
            <Main_Rune className="Sub_Size Selected">
              <img
                src={`${RuneImagesURL}/Sorcery/Scorch/Scorch.png`}
                className="Selected"
              ></img>
            </Main_Rune>
            <Main_Rune className="Sub_Size">
              <img
                src={`${RuneImagesURL}/Sorcery/Waterwalking/Waterwalking.png`}
              ></img>
            </Main_Rune>
            <Main_Rune className="Sub_Size">
              <img
                src={`${RuneImagesURL}/Sorcery/GatheringStorm/GatheringStorm.png`}
              ></img>
            </Main_Rune>
          </Row>
        </Rune_Wrapper>
      </Main_Runes>
      <Sub_Runes>
        <h2>영감</h2>
        <Rune_Wrapper>
          <Row>
            <Sub_Rune>
              <img
                src={`${RuneImagesURL}/Inspiration/HextechFlashtraption/HextechFlashtraption.png`}
              ></img>
            </Sub_Rune>
            <Sub_Rune>
              <img
                src={`${RuneImagesURL}/Inspiration/MagicalFootwear/MagicalFootwear.png`}
              ></img>
            </Sub_Rune>
            <Sub_Rune>
              <img
                src={`${RuneImagesURL}/Inspiration/PerfectTiming/PerfectTiming.png`}
              ></img>
            </Sub_Rune>
          </Row>
          <Row>
            <Sub_Rune>
              <img
                src={`${RuneImagesURL}/Inspiration/FuturesMarket/FuturesMarket.png`}
              ></img>
            </Sub_Rune>
            <Sub_Rune>
              <img
                src={`${RuneImagesURL}/Inspiration/MinionDematerializer/MinionDematerializer.png`}
              ></img>
            </Sub_Rune>
            <Sub_Rune className="Selected">
              <img
                src={`${RuneImagesURL}/Inspiration/BiscuitDelivery/BiscuitDelivery.png`}
                className="Selected"
              ></img>
            </Sub_Rune>
          </Row>
          <Row>
            <Sub_Rune className="Selected">
              <img
                src={`${RuneImagesURL}/Inspiration/CosmicInsight/CosmicInsight.png`}
                className="Selected"
              ></img>
            </Sub_Rune>
            <Sub_Rune>
              <img
                src={`${RuneImagesURL}/Resolve/ApproachVelocity/ApproachVelocity.png`}
              ></img>
            </Sub_Rune>
            <Sub_Rune>
              <img
                src={`${RuneImagesURL}/Inspiration/TimeWarpTonic/TimeWarpTonic.png`}
              ></img>
            </Sub_Rune>
          </Row>
        </Rune_Wrapper>
        <Stat_Wrapper>
          <Row>
            <Stat_Icon className="Selected">
              <img
                src={`${StatImagesURL}/StatModsAdaptiveForceIcon.png`}
                className="Selected"
              ></img>
            </Stat_Icon>
            <Stat_Icon>
              <img src={`${StatImagesURL}/StatModsAttackSpeedIcon.png`}></img>
            </Stat_Icon>
            <Stat_Icon>
              <img src={`${StatImagesURL}/StatModsCDRScalingIcon.png`}></img>
            </Stat_Icon>
          </Row>
          <Row>
            <Stat_Icon className="Selected">
              <img
                src={`${StatImagesURL}/StatModsAdaptiveForceIcon.png`}
                className="Selected"
              ></img>
            </Stat_Icon>
            <Stat_Icon>
              <img src={`${StatImagesURL}/StatModsArmorIcon.png`}></img>
            </Stat_Icon>
            <Stat_Icon>
              <img src={`${StatImagesURL}/StatModsMagicResIcon.png`}></img>
            </Stat_Icon>
          </Row>
          <Row>
            <Stat_Icon>
              <img src={`${StatImagesURL}/StatModsHealthScalingIcon.png`}></img>
            </Stat_Icon>
            <Stat_Icon className="Selected">
              <img
                src={`${StatImagesURL}/StatModsArmorIcon.png`}
                className="Selected"
              ></img>
            </Stat_Icon>
            <Stat_Icon>
              <img src={`${StatImagesURL}/StatModsMagicResIcon.png`}></img>
            </Stat_Icon>
          </Row>
        </Stat_Wrapper>
      </Sub_Runes>
    </Runes_Container>
  );
}
