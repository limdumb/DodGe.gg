import styled from "styled-components";
import QuickBuild from "./QuickBuild";
import ChampionStatistics from "./Data/ChampionStatistics.json";

const Container = styled.div`
  padding: 10px 5px 0px 5px;
  height: 400px;
  background-color: ${(props) =>
    props.darkMode ? "rgba(41, 171, 226, 0.2)" : "rgba(198, 156, 109, 0.2)"};

  .Champion_Basics {
    height: 150px;
    display: flex;
  }

  .Champion_Portrait {
    height: 100px;

    img {
      width: 100px;
      height: 100px;
    }
  }

  .Champion_Info {
    height: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;

    .Champion_Title {
      font-size: 20px;
      font-weight: normal;
      margin-bottom: 5px;
    }

    .Skill_Set {
      height: 50px;
      display: flex;
      justify-content: space-evenly;

      img {
        width: 45px;
        height: 45px;
      }
    }

    .Rate_Info_Wrapper {
      margin-top: 7.5px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      font-size: 16px;

      .Rate {
        padding-right: 7.5px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    width: 720px;
    height: 300px;
    padding: 20px 0 0 0;
    margin: 0 auto;

    .Champion_Basics {
      height: 150px;
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
      margin-bottom: 20px;

      .Champion_Portrait {
        width: 150px;
        height: 150px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .Champion_Info {
        height: 100%;
        width: 65%;
        justify-content: space-evenly;

        h2 {
          font-size: 24px;
        }

        .Skill_Set {
          height: 55px;

          img {
            width: 55px;
            height: 55px;
          }
        }

        .Rate_Info_Wrapper {
          font-size: 20px;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 550px;
    margin-left: 83px;
    padding-top: 10px;
    .Champion_Basics {
      margin-bottom: 10px;
      width: 550px;
    }
  }
`;

export default function QuickGuide({ currentChamp, darkMode }) {
  const baseURL = "http://ddragon.leagueoflegends.com/cdn/13.3.1/img";
  return (
    <Container darkMode={darkMode}>
      <div className="Champion_Basics">
        <div className="Champion_Portrait">
          <img src={`${baseURL}/champion/${currentChamp.id}.png`}></img>
        </div>
        <div className="Champion_Info">
          <h2 className="Champion_Title">
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
      <QuickBuild currentChamp={currentChamp} darkMode={darkMode} />
    </Container>
  );
}
