import "./MyPages.css";
import { UserInformation } from "../Components/MyPage/UserInformation";
import { TypeTab } from "../Components/MyPage/TypeTab";
import RecordList from "../Components/MyPage/RecordList";
import { useState, useEffect } from "react";
import {
  summonerData,
  summonerLeagueData,
  matchSummoryData,
  gameUuid,
  summonerSpell,
} from "../API/RiotAPI";
import { StyleSpan } from "../Components/MyPage/RecordList";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const EasterEggSpan = styled(StyleSpan)`
  display: flex;
  justify-content: center;
`;

export default function MyPages() {
  let summonerName = useParams();

  const [currentTab, setCurrentTab] = useState("All_Game_Record");
  const [getUserProfile, setGetUserProfile] = useState(null);
  const [userRankTier, setUserRankTier] = useState(null)
  const [getUserMatchData, setGetUserMatchData] = useState(null);
  const [getSpell, setGetSpell] = useState(null);
  useEffect(() => {
    const userInfoData = async () => {
      const userResponse = await summonerData(summonerName.summoner);
      const gameUuidResponse = await gameUuid(userResponse.puuid);
      const matchResponse = await matchSummoryData(
        gameUuidResponse.data,
        summonerName.summoner
      );
      const leagueDataResponse = await summonerLeagueData(userResponse.id);
      const spellDataResponse = await summonerSpell(
        matchResponse.map((el) => {
          return el.spellId1;
        }),
        matchResponse.map((el) => {
          return el.spellId2;
        })
      );

      setUserRankTier(leagueDataResponse.data);
      setGetUserMatchData(matchResponse);
      setGetUserProfile(userResponse);
      setGetSpell(spellDataResponse);
    };
    userInfoData();
  }, [summonerName]);

  console.log(userRankTier)
  return (
    <>
      <div id="Main_Container">
        <main>
          {getUserProfile && (
            <UserInformation
              userRankTier={userRankTier}
              profileIconId={getUserProfile.profileIconId}
              name={getUserProfile.name}
            />
          )}
          <div>
            <EasterEggSpan>혹시 알고 계셨나요?</EasterEggSpan>
            <EasterEggSpan>
              협곡의 전령은 바위개의 형이랍니다 응애
            </EasterEggSpan>
          </div>
          <TypeTab
            onTabChange={(index) => {
              if (index === 0) {
                setCurrentTab("All_Game_Record");
              } else if (index === 1) {
                setCurrentTab("Solo_Rank_Record");
              } else if (index === 2) {
                setCurrentTab("Free_Rank_Record");
              } else {
                setCurrentTab("Normal_Game_Record");
              }
            }}
          />
          <RecordList
            tab={currentTab}
            getUserMatchData={getUserMatchData}
            getSpell={getSpell}
          />
        </main>
      </div>
    </>
  );
}
