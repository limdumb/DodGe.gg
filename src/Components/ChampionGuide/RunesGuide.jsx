import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { fetchRunesData } from "../../API/RiotAPI";
import DetailedData from "./Data/DetailedData.json";

const Runes_Container = styled.div`
  height: 250px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  text-align: center;

  .Main_Runes {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 10px 0;
  }

  .Runes_Header {
    display: flex;
    justify-content: center;
    padding: 10px;
    color: blanchedalmond;

    img {
      height: 45px;
    }
  }

  .Runes_Wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .Runes_Row {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 400px;
    margin: auto;

    img {
      height: 70px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
    }

    &:not(:first-child) {
      width: 250px;

      img {
        height: 50px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    height: 350px;
    padding: 0 100px;
  }

  @media only screen and (min-width: 1024px) {
    height: 400px;
    padding: 25px 75px;
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
      {runes && <MainRunes currentChamp={currentChamp} runes={runes} />}
    </Runes_Container>
  );
}

function MainRunes(props) {
  const ImagesURL = "https://ddragon.canisback.com/img/";

  const mainRuneTitle =
    DetailedData[0][props.currentChamp.id].runes.main_rune_id;

  let runesIdx = 0;

  switch (mainRuneTitle) {
    case 8100:
      runesIdx = 0;
      break;

    case 8300:
      runesIdx = 1;
      break;

    case 8000:
      runesIdx = 2;
      break;

    case 8400:
      runesIdx = 3;
      break;

    case 8200:
      runesIdx = 4;
      break;
  }

  // console.log(props.runes[0][runesIdx]);

  return (
    <div className="Main_Runes">
      <div className="Runes_Header">
        <h3>{props.runes[0][runesIdx].name}</h3>
        <img src={`${ImagesURL}/${props.runes[0][runesIdx].icon}`}></img>
      </div>
      <div className="Runes_Wrapper">
        {props.runes[0][runesIdx].slots.map((row, rowIdx) => {
          return (
            <div className="Runes_Row" key={`row_${rowIdx}`}>
              {row.runes.map((rune, runeIdx) => {
                return (
                  <div className="Rune_Box" key={`${rune.id}`}>
                    <img
                      src={`${ImagesURL}/${props.runes[0][runesIdx].slots[rowIdx].runes[runeIdx].icon}`}
                    ></img>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
