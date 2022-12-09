import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { fetchRunesData } from "../../API/RiotAPI";
import DetailedData from "./Data/DetailedData.json";

const Runes_Container = styled.div`
  height: 800px;
  background-color: rgba(0, 0, 0, 0.5);

  .Runes_Section_Wrapper {
    display: flex;
    flex-direction: column;
  }

  .Main_Runes {
    display: flex;
    flex-direction: column;
    border-bottom: solid rgba(255, 255, 255, 0.4) 1px;
    padding-bottom: 15px;

    .Runes_Row {
      width: 350px;
      height: 75px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: auto;

      img {
        height: 60px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
      }

      &:not(:first-child) {
        width: 300px;
        height: 65px;

        img {
          height: 45px;
        }
      }
    }
  }

  .Sub_Runes {
    display: flex;
    flex-direction: column;

    .Runes_Row {
      display: flex;
      height: 75px;
      justify-content: space-evenly;
      align-items: center;
      width: 300px;
      margin: auto;

      img {
        height: 50px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
      }
    }

    .Stats_Row {
      margin: auto;
      text-align: center;
      display: flex;
      justify-content: space-between;
      width: 150px;
      height: 40px;

      img {
        height: 32.5px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }

    .Runes_Wrapper {
      margin-bottom: 15px;
    }
  }

  .Runes_Header {
    display: flex;
    justify-content: center;
    padding: 15px 0;
    color: blanchedalmond;

    h3 {
      margin-right: 10px;
    }

    img {
      height: 30px;
    }
  }

  .Runes_Wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .Selected {
    border-radius: 50%;
    border: solid goldenrod 2.5px;
  }
`;

export default function RunesGuide({ currentChamp }) {
  const [runes, setRunes] = useState(null);

  useEffect(() => {
    fetchRunesData().then((data) => {
      setRunes(data);
    });
  }, []);

  return (
    <Runes_Container>
      {runes && <RunesSection currentChamp={currentChamp} runes={runes} />}
    </Runes_Container>
  );
}

/**
 *  룬 섹션을 구성하는 컴포넌트입니다.
 *  현재 페이지로부터 props를 전달받아 데이터(DetailedData)에서 현재 챔피언에 알맞는 룬 정보를 가져옵니다.
 * @param {DetailedData, currentChamp, runes} props
 * @returns {메인 룬, 서브 룬 섹션을 포함한 Wrapper}
 * @author 심민섭
 */
function RunesSection(props) {
  const ImagesURL = "https://ddragon.canisback.com/img/";

  const mainRuneTitle =
    DetailedData[0][props.currentChamp.id].runes.main_rune_id;
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

  const subRuneTitle = DetailedData[0][props.currentChamp.id].runes.sub_rune_id;
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
          <h3>{props.runes[0][mainRunesIdx].name}</h3>
          <img src={`${ImagesURL}/${props.runes[0][mainRunesIdx].icon}`}></img>
        </div>
        <div className="Runes_Wrapper">
          {props.runes[0][mainRunesIdx].slots.map((row, rowIdx) => {
            return (
              <div className="Runes_Row" key={`row_${rowIdx}`}>
                {row.runes.map((rune, runeIdx) => {
                  return (
                    <div
                      className={
                        DetailedData[0][
                          props.currentChamp.id
                        ].runes.main_rune_order.includes(rune.id)
                          ? "Rune_Box Selected"
                          : "Rune_Box"
                      }
                      key={`${rune.id}`}
                    >
                      <img
                        src={`${ImagesURL}/${props.runes[0][mainRunesIdx].slots[rowIdx].runes[runeIdx].icon}`}
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
          <h3>{props.runes[0][subRunesIdx].name}</h3>
          <img src={`${ImagesURL}/${props.runes[0][subRunesIdx].icon}`}></img>
        </div>
        <div className="Runes_Wrapper">
          {props.runes[0][subRunesIdx].slots.map((row, rowIdx) => {
            if (rowIdx !== 0)
              return (
                <div className="Runes_Row" key={`row_${rowIdx}`}>
                  {row.runes.map((rune, runeIdx) => {
                    return (
                      <div
                        className={
                          DetailedData[0][
                            props.currentChamp.id
                          ].runes.sub_rune_order.includes(rune.id)
                            ? "Rune_Box Selected"
                            : "Rune_Box"
                        }
                        key={`${rune.id}`}
                      >
                        <img
                          src={`${ImagesURL}/${props.runes[0][subRunesIdx].slots[rowIdx].runes[runeIdx].icon}`}
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
            <img
              className={
                DetailedData[0][props.currentChamp.id].runes.stat[0] === 5008
                  ? "Selected"
                  : null
              }
              src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png`}
            ></img>
            <img
              className={
                DetailedData[0][props.currentChamp.id].runes.stat[0] === 5005
                  ? "Selected"
                  : null
              }
              src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsAttackSpeedIcon.png`}
            ></img>
            <img
              className={
                DetailedData[0][props.currentChamp.id].runes.stat[0] === 5007
                  ? "Selected"
                  : null
              }
              src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsCDRScalingIcon.png`}
            ></img>
          </div>
          <div className="Stats_Row">
            <img
              className={
                DetailedData[0][props.currentChamp.id].runes.stat[1] === 5008
                  ? "Selected"
                  : null
              }
              src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png`}
            ></img>
            <img
              className={
                DetailedData[0][props.currentChamp.id].runes.stat[1] === 5002
                  ? "Selected"
                  : null
              }
              src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsArmorIcon.png`}
            ></img>
            <img
              className={
                DetailedData[0][props.currentChamp.id].runes.stat[1] === 5003
                  ? "Selected"
                  : null
              }
              src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsMagicResIcon.png`}
            ></img>
          </div>
          <div className="Stats_Row">
            <img
              className={
                DetailedData[0][props.currentChamp.id].runes.stat[2] === 5001
                  ? "Selected"
                  : null
              }
              src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsHealthScalingIcon.png`}
            ></img>
            <img
              className={
                DetailedData[0][props.currentChamp.id].runes.stat[2] === 5002
                  ? "Selected"
                  : null
              }
              src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsArmorIcon.png`}
            ></img>
            <img
              className={
                DetailedData[0][props.currentChamp.id].runes.stat[2] === 5003
                  ? "Selected"
                  : null
              }
              src={`https://ddragon.canisback.com/img/perk-images/StatMods/StatModsMagicResIcon.png`}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
