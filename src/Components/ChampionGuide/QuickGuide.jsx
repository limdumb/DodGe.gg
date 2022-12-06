import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { fetchChampData } from "../../API/RiotAPI";
import QuickBuild from "./QuickBuild";
import DetailedData from "./Data/DetailedData.json";

const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-wrap: wrap;

  .Champion_Portrait {
    width: 150px;
    height: 150px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .Champion_Info {
    flex: 1;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px gray solid;

    h2 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      padding: 5px;
      font-size: 12px;
      height: 120px;
    }

    .Skill_Set {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }

    .Rate_Info_Wrapper {
      height: 75px;
      width: 100%;
      font-size: 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .Rate {
        padding-left: 5px;
        border-left: solid 1px rgba(0, 0, 0, 0.7);

        span {
          color: gray;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    height: 350px;

    .Champion_Portrait {
      width: 200px;
      height: 200px;
    }

    .Champion_Info {
      padding: 15px 10px;
      height: 200px;

      h2 {
        font-size: 25px;
        font-weight: bold;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .Champion_Portrait {
      width: 200px;
      height: 200px;
    }
  }
`;

export default function QuickGuide({ currentChamp }) {
  const ImagesURL = "http://ddragon.leagueoflegends.com/cdn/12.21.1/img";
  return (
    <Container>
      <div className="Champion_Portrait">
        <img src={`${ImagesURL}/champion/${currentChamp.id}.png`}></img>
      </div>
      <div className="Champion_Info">
        <h2>
          {currentChamp.name}, {currentChamp.title}
        </h2>
        <div className="Skill_Set">
          <img
            src={`${ImagesURL}/passive/${currentChamp.passive.image.full}`}
          ></img>
          <img
            src={`${ImagesURL}/spell/${currentChamp.spells[0].image.full}`}
          ></img>
          <img
            src={`${ImagesURL}/spell/${currentChamp.spells[1].image.full}`}
          ></img>
          <img
            src={`${ImagesURL}/spell/${currentChamp.spells[2].image.full}`}
          ></img>
          <img
            src={`${ImagesURL}/spell/${currentChamp.spells[3].image.full}`}
          ></img>
        </div>
        <div className="Rate_Info_Wrapper">
          <div className="Rate">
            승률 <span>{DetailedData[0][currentChamp.id].rates.win_rate}</span>
          </div>
          <div className="Rate">
            픽률 <span>{DetailedData[0][currentChamp.id].rates.pick_rate}</span>
          </div>
          <div className="Rate">
            밴률 <span>{DetailedData[0][currentChamp.id].rates.ban_rate}</span>
          </div>
        </div>
      </div>
      <QuickBuild currentChamp={currentChamp} />
    </Container>
  );
}
