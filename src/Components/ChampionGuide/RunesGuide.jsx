import styled from "styled-components";

const Runes_Container = styled.div`
  width: 100%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 2.5%;
  display: flex;
  text-align: center;
  justify-content: space-evenly;

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 45%;
    border: solid rgba(0, 0, 0, 0.25) 1px;
    padding-bottom: 2.5%;
    background-color: transparent;

    h2 {
      font-size: 0.85rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 100%;

    h2 {
      font-size: 1rem;
      margin-bottom: 10px;
    }
  }
`;

const Main_Runes = styled.div`
  height: 100%;
`;

const Rune_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.ul`
  display: flex;
  flex: 1;

  .Selected {
    opacity: 1;
  }

  .Sub_Size {
    height: 4vh;
  }

  @media only screen and (min-width: 768px) {
    .Sub_Size {
      height: 3.25vh;
    }
  }

  @media only screen and (min-width: 1024px) {
    .Sub_Size {
      height: 5vh;
    }
  }
`;

const Main_Rune = styled.li`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 100%;
  height: 5.5vh;
  margin: 5px;
  opacity: 0.6;

  img {
    width: 100%;
    height: 100%;
  }

  .Selected {
    border: solid 1px rgba(255, 215, 0, 0.5);
    border-radius: 100%;
  }

  @media only screen and (min-width: 768px) {
    background-color: rgba(0, 0, 0, 0.2);
    height: 4vh;

    .Selected {
      border: solid 2px green;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 6.5vh;
  }
`;

const Sub_Runes = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Sub_Rune = styled.li`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 100%;
  height: 4vh;
  margin: 2.5px;
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
    height: 3vh;

    .Selected {
      border: solid 2px green;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 5vh;
  }
`;

const Stat_Wrapper = styled.div`
  height: 50%;
  flex: 1;
  display: flex;
  flex-direction: column;

  ul {
    justify-content: center;
  }

  @media only screen and (min-width: 768px) {
    ul {
      align-items: center;
    }
  }

  @media only screen and (min-width: 1024px) {
    padding-top: 10px;
  }
`;

const Stat_Icon = styled.li`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 100%;
  height: 2.25vh;
  margin: 2.5px;
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
    height: 1.5vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .Selected {
      border: solid 2px green;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 3vh;
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
