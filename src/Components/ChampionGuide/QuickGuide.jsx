import styled from "styled-components";
import QuickBuild from "./QuickBuild";
import ChampionStatistics from "./Data/ChampionStatistics.json";

const Container = styled.div`
  height: 350px;
  padding: 20px 0 0 15px;

  .Champion_Basics {
    display: flex;
  }

  .Champion_Portrait {
    height: 125px;

    img {
      width: 100px;
      height: 100px;
    }
  }

  .Champion_Info {
    width: 270px;
    height: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;

    h2 {
      font-size: 22px;
      font-weight: normal;
    }

    .Skill_Set {
      height: 50px;
      display: flex;
      justify-content: space-evenly;

      img {
        width: 44px;
        height: 44px;
      }
    }

    .Rate_Info_Wrapper {
      margin-top: 7.5px;
      height: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      font-size: 15px;

      .Rate {
        padding-right: 7.5px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    height: 300px;

    .Champion_Portrait {
      height: 175px;
    }

    .Champion_Info {
      height: 175px;

      h2 {
        font-size: 26px;
        margin: 15px 0 0 0;
      }

      .Skill_Set {
        width: 80%;
        margin: 15px auto;

        img {
          height: 65px;
        }
      }
    }

    .Rate_Info_Wrapper {
      width: 80%;
      margin: 0 auto;

      .Rate {
        font-size: 20px;
      }
    }
  }
`;

export default function QuickGuide({ currentChamp }) {
  const baseURL = "http://ddragon.leagueoflegends.com/cdn/12.23.1/img";
  return (
    <Container>
      <div className="Champion_Basics">
        <div className="Champion_Portrait">
          <img src={`${baseURL}/champion/${currentChamp.id}.png`}></img>
        </div>
        <div className="Champion_Info">
          <h2>
            {currentChamp.name}, {currentChamp.title}
          </h2>
          <div className="Skill_Set">
            <img
              src={`${baseURL}/passive/${currentChamp.passive.image.full}`}
            ></img>
            <img
              src={`${baseURL}/spell/${currentChamp.spells[0].image.full}`}
            ></img>
            <img
              src={`${baseURL}/spell/${currentChamp.spells[1].image.full}`}
            ></img>
            <img
              src={`${baseURL}/spell/${currentChamp.spells[2].image.full}`}
            ></img>
            <img
              src={`${baseURL}/spell/${currentChamp.spells[3].image.full}`}
            ></img>
          </div>
          <div className="Rate_Info_Wrapper">
            <div className="Rate">
              승률{" "}
              <span>
                {ChampionStatistics[0][currentChamp.id].rates.win_rate}
              </span>
            </div>
            <div className="Rate">
              픽률{" "}
              <span>
                {ChampionStatistics[0][currentChamp.id].rates.pick_rate}
              </span>
            </div>
            <div className="Rate">
              밴률{" "}
              <span>
                {ChampionStatistics[0][currentChamp.id].rates.ban_rate}
              </span>
            </div>
          </div>
        </div>
      </div>
      <QuickBuild currentChamp={currentChamp} />
    </Container>
  );
}
