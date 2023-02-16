import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { fetchRunesData } from "../../API/RiotAPI";
import ChampionStatistics from "./Data/ChampionStatistics.json";

const Runes_Container = styled.div`
  height: 825px;
  padding-top: 10px;

  .Runes_Section_Wrapper {
    width: 320px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .Main_Runes {
    height: 350px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
  }

  .Sub_Runes {
    height: 360px;
    display: flex;
    flex-direction: column;

    .Stats_Row {
      margin: auto;
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 150px;
      height: 40px;
      margin-bottom: 10px;
    }
  }

  .Runes_Row {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .Rune_Box {
      height: 44px;
    }

    img {
      height: 45px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.2);
    }

    &:not(:first-child) {
      width: 85%;
      height: 65px;
    }
  }

  .Runes_Header {
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 10px auto 0 auto;
    padding-bottom: 5px;
    background: transparent;
    border-bottom: ${(props) =>
      props.darkMode
        ? "3px solid rgb(120, 220, 180)"
        : "3px solid rgb(255, 210, 90)"};

    h3 {
      margin-right: 10px;
      font-weight: normal;
    }

    img {
      height: 27.5px;
    }
  }

  .Runes_Wrapper {
    background-color: ${(props) =>
      props.darkMode ? "rgba(41, 171, 226, 0.2)" : "rgba(198, 156, 109, 0.2)"};
    border-radius: 2px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .Trapezoid {
    margin: 0 auto;
    width: 40%;

    border-top: ${(props) =>
      props.darkMode
        ? "12.5px solid rgb(120, 220, 180)"
        : "12.5px solid rgb(255, 210, 90)"};
    border-left: 7.5px solid transparent;
    border-right: 7.5px solid transparent;
  }

  .Rune_Box {
    opacity: 0.4;
  }

  .Stats_Wrapper {
    background-color: ${(props) =>
      props.darkMode ? "rgba(41, 171, 226, 0.2)" : "rgba(198, 156, 109, 0.2)"};
  }

  .Stat_Box {
    opacity: 0.4;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 50%;
    height: 24px;

    img {
      height: 25px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .Selected {
    opacity: 1;
    border-radius: 50%;
    border: solid goldenrod 1.25px;
  }

  @media only screen and (min-width: 768px) {
    height: 450px;

    .Runes_Section_Wrapper {
      height: 450px;
      width: 100%;
      margin: 0;
      flex-direction: row;
      justify-content: space-evenly;
    }

    h3 {
      font-size: 28px;
    }

    .Main_Runes {
      width: 45%;
      height: 425px;

      .Runes_Row {
        height: 80px;
      }
    }

    .Sub_Runes {
      width: 45%;
      height: 425px;
    }
  }
`;

export default function RunesGuide({ currentChamp, darkMode }) {
  const [runes, setRunes] = useState(null);

  useEffect(() => {
    fetchRunesData().then((data) => {
      setRunes(data);
    });
  }, []);

  return (
    <Runes_Container darkMode={darkMode}>
      {runes && (
        <RunesSection
          currentChamp={currentChamp}
          runes={runes}
          darkMode={darkMode}
        />
      )}
    </Runes_Container>
  );
}

/**
 *  룬 섹션을 구성하는 컴포넌트입니다.
 *  현재 페이지로부터 props를 전달받아 데이터(ChampionStatistics)에서 현재 챔피언에 알맞는 룬 정보를 가져옵니다.
 * @param { currentChamp, runes }
 * @returns {메인 룬, 서브 룬 섹션을 포함한 Wrapper}
 * @author 심민섭
 */
function RunesSection({ currentChamp, runes, darkMode }) {
  const baseURL = "https://ddragon.canisback.com/img/";

  const mainRuneTitle =
    ChampionStatistics[0][currentChamp.id].runes.main_rune_id;
  let mainRunesIdx = 0;
  switch (mainRuneTitle) {
    case 8100:
      mainRunesIdx = 0;
      break;

    case 8300:
      mainRunesIdx = 1;
      break;

    case 8000:
      mainRunesIdx = 2;
      break;

    case 8400:
      mainRunesIdx = 3;
      break;

    case 8200:
      mainRunesIdx = 4;
      break;
  }

  const subRuneTitle = ChampionStatistics[0][currentChamp.id].runes.sub_rune_id;
  let subRunesIdx = 0;
  switch (subRuneTitle) {
    case 8100:
      subRunesIdx = 0;
      break;

    case 8300:
      subRunesIdx = 1;
      break;

    case 8000:
      subRunesIdx = 2;
      break;

    case 8400:
      subRunesIdx = 3;
      break;

    case 8200:
      subRunesIdx = 4;
      break;
  }

  return (
    <div className="Runes_Section_Wrapper">
      <div className="Main_Runes">
        <div className="Runes_Header">
          <h3>{runes[0][mainRunesIdx].name}</h3>
          <img src={`${baseURL}/${runes[0][mainRunesIdx].icon}`}></img>
        </div>
        <div className="Runes_Wrapper">
          <div className="Trapezoid"></div>
          {runes[0][mainRunesIdx].slots.map((row, rowIdx) => {
            return (
              <div className="Runes_Row" key={`row_${rowIdx}`}>
                {row.runes.map((rune, runeIdx) => {
                  return (
                    <div
                      className={
                        ChampionStatistics[0][
                          currentChamp.id
                        ].runes.main_rune_order.includes(rune.id)
                          ? "Rune_Box Selected"
                          : "Rune_Box"
                      }
                      key={`${rune.id}`}
                    >
                      <img
                        src={`${baseURL}/${runes[0][mainRunesIdx].slots[rowIdx].runes[runeIdx].icon}`}
                      ></img>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="Sub_Runes">
        <div className="Runes_Header">
          <h3>{runes[0][subRunesIdx].name}</h3>
          <img src={`${baseURL}/${runes[0][subRunesIdx].icon}`}></img>
        </div>
        <div className="Runes_Wrapper">
          <div className="Trapezoid"></div>
          {runes[0][subRunesIdx].slots.map((row, rowIdx) => {
            if (rowIdx !== 0)
              return (
                <div className="Runes_Row" key={`row_${rowIdx}`}>
                  {row.runes.map((rune, runeIdx) => {
                    return (
                      <div
                        className={
                          ChampionStatistics[0][
                            currentChamp.id
                          ].runes.sub_rune_order.includes(rune.id)
                            ? "Rune_Box Selected"
                            : "Rune_Box"
                        }
                        key={`${rune.id}`}
                      >
                        <img
                          src={`${baseURL}/${runes[0][subRunesIdx].slots[rowIdx].runes[runeIdx].icon}`}
                        ></img>
                      </div>
                    );
                  })}
                </div>
              );
          })}
        </div>

        <div className="Stats_Wrapper">
          <div className="Stats_Row">
            <div
              className={
                ChampionStatistics[0][currentChamp.id].runes.stat[0] === 5008
                  ? "Stat_Box Selected"
                  : "Stat_Box"
              }
            >
              <img
                src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png`}
              ></img>
            </div>

            <div
              className={
                ChampionStatistics[0][currentChamp.id].runes.stat[0] === 5005
                  ? "Stat_Box Selected"
                  : "Stat_Box"
              }
            >
              <img
                src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsAttackSpeedIcon.png`}
              ></img>
            </div>

            <div
              className={
                ChampionStatistics[0][currentChamp.id].runes.stat[0] === 5007
                  ? "Stat_Box Selected"
                  : "Stat_Box"
              }
            >
              <img
                src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsCDRScalingIcon.png`}
              ></img>
            </div>
          </div>
          <div className="Stats_Row">
            <div
              className={
                ChampionStatistics[0][currentChamp.id].runes.stat[1] === 5008
                  ? "Stat_Box Selected"
                  : "Stat_Box"
              }
            >
              <img
                src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png`}
              ></img>
            </div>

            <div
              className={
                ChampionStatistics[0][currentChamp.id].runes.stat[1] === 5002
                  ? "Stat_Box Selected"
                  : "Stat_Box"
              }
            >
              <img
                src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsArmorIcon.png`}
              ></img>
            </div>

            <div
              className={
                ChampionStatistics[0][currentChamp.id].runes.stat[1] === 5003
                  ? "Stat_Box Selected"
                  : "Stat_Box"
              }
            >
              <img
                src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsMagicResIcon.png`}
              ></img>
            </div>
          </div>
          <div className="Stats_Row">
            <div
              className={
                ChampionStatistics[0][currentChamp.id].runes.stat[2] === 5001
                  ? "Stat_Box Selected"
                  : "Stat_Box"
              }
            >
              <img
                src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsHealthScalingIcon.png`}
              ></img>
            </div>

            <div
              className={
                ChampionStatistics[0][currentChamp.id].runes.stat[2] === 5002
                  ? "Stat_Box Selected"
                  : "Stat_Box"
              }
            >
              <img
                src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsArmorIcon.png`}
              ></img>
            </div>

            <div
              className={
                ChampionStatistics[0][currentChamp.id].runes.stat[2] === 5003
                  ? "Stat_Box Selected"
                  : "Stat_Box"
              }
            >
              <img
                src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsMagicResIcon.png`}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
