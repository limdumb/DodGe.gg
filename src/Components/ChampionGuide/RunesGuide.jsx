import styled from "styled-components";

const Wrapper = styled.div`
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

const Main__Runes = styled.div`
  height: 100%;
`;

const Rune__Wrapper = styled.div`
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

  .Sub__Size {
    height: 4vh;
  }

  @media only screen and (min-width: 768px) {
    .Sub__Size {
      height: 3.25vh;
    }
  }

  @media only screen and (min-width: 1024px) {
    .Sub__Size {
      height: 5vh;
    }
  }
`;

const Main__Rune = styled.li`
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

const Sub__Runes = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Sub__Rune = styled.li`
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

const Stat__Wrapper = styled.div`
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

const Stat__Icon = styled.li`
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
    <Wrapper>
      <Main__Runes>
        <h2>마법</h2>
        <Rune__Wrapper>
          <Row>
            <Main__Rune className="Selected">
              <img
                src={`${RuneImagesURL}/Sorcery/SummonAery/SummonAery.png`}
                className="Selected"
              ></img>
            </Main__Rune>
            <Main__Rune>
              <img
                src={`${RuneImagesURL}/Sorcery/ArcaneComet/ArcaneComet.png`}
              ></img>
            </Main__Rune>
            <Main__Rune>
              <img
                src={`${RuneImagesURL}/Sorcery/PhaseRush/PhaseRush.png`}
              ></img>
            </Main__Rune>
          </Row>
          <Row>
            <Main__Rune className="Sub__Size">
              <img
                src={`${RuneImagesURL}/Sorcery/NullifyingOrb/Pokeshield.png`}
              ></img>
            </Main__Rune>
            <Main__Rune className="Sub__Size Selected">
              <img
                src={`${RuneImagesURL}/Sorcery/ManaflowBand/ManaflowBand.png`}
                className="Selected"
              ></img>
            </Main__Rune>
            <Main__Rune className="Sub__Size">
              <img src={`${RuneImagesURL}/Sorcery/NimbusCloak/6361.png`}></img>
            </Main__Rune>
          </Row>
          <Row>
            <Main__Rune className="Sub__Size Selected">
              <img
                src={`${RuneImagesURL}/Sorcery/Transcendence/Transcendence.png`}
                className="Selected"
              ></img>
            </Main__Rune>
            <Main__Rune className="Sub__Size">
              <img
                src={`${RuneImagesURL}/Sorcery/Celerity/CelerityTemp.png`}
              ></img>
            </Main__Rune>
            <Main__Rune className="Sub__Size">
              <img
                src={`${RuneImagesURL}/Sorcery/AbsoluteFocus/AbsoluteFocus.png`}
              ></img>
            </Main__Rune>
          </Row>
          <Row>
            <Main__Rune className="Sub__Size Selected">
              <img
                src={`${RuneImagesURL}/Sorcery/Scorch/Scorch.png`}
                className="Selected"
              ></img>
            </Main__Rune>
            <Main__Rune className="Sub__Size">
              <img
                src={`${RuneImagesURL}/Sorcery/Waterwalking/Waterwalking.png`}
              ></img>
            </Main__Rune>
            <Main__Rune className="Sub__Size">
              <img
                src={`${RuneImagesURL}/Sorcery/GatheringStorm/GatheringStorm.png`}
              ></img>
            </Main__Rune>
          </Row>
        </Rune__Wrapper>
      </Main__Runes>
      <Sub__Runes>
        <h2>영감</h2>
        <Rune__Wrapper>
          <Row>
            <Sub__Rune>
              <img
                src={`${RuneImagesURL}/Inspiration/HextechFlashtraption/HextechFlashtraption.png`}
              ></img>
            </Sub__Rune>
            <Sub__Rune>
              <img
                src={`${RuneImagesURL}/Inspiration/MagicalFootwear/MagicalFootwear.png`}
              ></img>
            </Sub__Rune>
            <Sub__Rune>
              <img
                src={`${RuneImagesURL}/Inspiration/PerfectTiming/PerfectTiming.png`}
              ></img>
            </Sub__Rune>
          </Row>
          <Row>
            <Sub__Rune>
              <img
                src={`${RuneImagesURL}/Inspiration/FuturesMarket/FuturesMarket.png`}
              ></img>
            </Sub__Rune>
            <Sub__Rune>
              <img
                src={`${RuneImagesURL}/Inspiration/MinionDematerializer/MinionDematerializer.png`}
              ></img>
            </Sub__Rune>
            <Sub__Rune className="Selected">
              <img
                src={`${RuneImagesURL}/Inspiration/BiscuitDelivery/BiscuitDelivery.png`}
                className="Selected"
              ></img>
            </Sub__Rune>
          </Row>
          <Row>
            <Sub__Rune className="Selected">
              <img
                src={`${RuneImagesURL}/Inspiration/CosmicInsight/CosmicInsight.png`}
                className="Selected"
              ></img>
            </Sub__Rune>
            <Sub__Rune>
              <img
                src={`${RuneImagesURL}/Resolve/ApproachVelocity/ApproachVelocity.png`}
              ></img>
            </Sub__Rune>
            <Sub__Rune>
              <img
                src={`${RuneImagesURL}/Inspiration/TimeWarpTonic/TimeWarpTonic.png`}
              ></img>
            </Sub__Rune>
          </Row>
        </Rune__Wrapper>
        <Stat__Wrapper>
          <Row>
            <Stat__Icon className="Selected">
              <img
                src={`${StatImagesURL}/StatModsAdaptiveForceIcon.png`}
                className="Selected"
              ></img>
            </Stat__Icon>
            <Stat__Icon>
              <img src={`${StatImagesURL}/StatModsAttackSpeedIcon.png`}></img>
            </Stat__Icon>
            <Stat__Icon>
              <img src={`${StatImagesURL}/StatModsCDRScalingIcon.png`}></img>
            </Stat__Icon>
          </Row>
          <Row>
            <Stat__Icon className="Selected">
              <img
                src={`${StatImagesURL}/StatModsAdaptiveForceIcon.png`}
                className="Selected"
              ></img>
            </Stat__Icon>
            <Stat__Icon>
              <img src={`${StatImagesURL}/StatModsArmorIcon.png`}></img>
            </Stat__Icon>
            <Stat__Icon>
              <img src={`${StatImagesURL}/StatModsMagicResIcon.png`}></img>
            </Stat__Icon>
          </Row>
          <Row>
            <Stat__Icon>
              <img src={`${StatImagesURL}/StatModsHealthScalingIcon.png`}></img>
            </Stat__Icon>
            <Stat__Icon className="Selected">
              <img
                src={`${StatImagesURL}/StatModsArmorIcon.png`}
                className="Selected"
              ></img>
            </Stat__Icon>
            <Stat__Icon>
              <img src={`${StatImagesURL}/StatModsMagicResIcon.png`}></img>
            </Stat__Icon>
          </Row>
        </Stat__Wrapper>
      </Sub__Runes>
    </Wrapper>
  );
}
