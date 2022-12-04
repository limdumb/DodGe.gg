import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { fetchChampData } from "../../API/RiotAPI";
import QuickBuild from "./QuickBuild";

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
    text-align: center;
    border-bottom: 1px gray solid;
    text-overflow: ellipsis;
    overflow: hidden;

    h2 {
      font-size: 20px;
      font-weight: bold;
    }

    p {
      padding: 5px;
      font-size: 12px;
      height: 120px;
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

      p {
        font-size: 16px;
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
  const championImagesURL =
    "http://ddragon.leagueoflegends.com/cdn/12.21.1/img";
  return (
    <Container>
      <div className="Champion_Portrait">
        <img src={`${championImagesURL}/champion/${currentChamp.id}.png`}></img>
      </div>
      <div className="Champion_Info">
        <h2>
          {currentChamp.name}, {currentChamp.title}
        </h2>
        <p>{currentChamp.lore}</p>
      </div>
      <QuickBuild currentChamp={currentChamp} />
    </Container>
  );
}
