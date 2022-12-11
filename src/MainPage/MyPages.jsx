import MainHeader from "../Components/CommonComponents/Header";
import "./MyPages.css";
import { UserInformation } from "../Components/MyPage/UserInformation";
import { TypeTab } from "../Components/MyPage/TypeTab";
import RecordList from "../Components/MyPage/RecordList";
import Footer from "../Components/CommonComponents/Footer.jsx";
import { useState } from "react";
import { useEffect } from "react";
import {
  summonerData,
  summonerLeagueData,
  matchSummoryData,
  gameUuid,
} from "../API/RiotAPI";
import { StyleSpan } from "../Components/MyPage/RecordList";
import styled from "styled-components";

const EasterEggSpan = styled(StyleSpan)`
  display: flex;
  justify-content: center;
`;

export default function MyPages() {
  const [currentTab, setCurrentTab] = useState("All_Game_Record");
  const [getUserProfile, setGetUserProfile] = useState(null);
  const [userSoloTier, setUserSoloTier] = useState(null);
  const [userFreeRankTier, setUserFreeRankTier] = useState(null);
  const [getUserMatchData, setGetUserMatchData] = useState(null);
  const [gameUuidData, setGameUuidData] = useState(null);

  useEffect(() => {
    const userInfoData = async () => {
      const userResponse = await summonerData();
      const gameUuidResponse = await gameUuid(userResponse.puuid);
      const matchResponse = await matchSummoryData(gameUuidResponse.data);
      const leagueDataResponse = await summonerLeagueData(userResponse.id);
      setUserSoloTier(leagueDataResponse.data[0]);
      setUserFreeRankTier(leagueDataResponse.data[1]);
      setGameUuidData(gameUuidResponse);
      setGetUserMatchData(matchResponse);
      setGetUserProfile(userResponse);
    };

    userInfoData();
  }, []);

  return (
    <>
      <MainHeader />
      <div id="Main_Container">
        <main>
          {getUserProfile && (
            <UserInformation
              userSoloTier={userSoloTier}
              userFreeRankTier={userFreeRankTier}
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
          <RecordList tab={currentTab} getUserMatchData={getUserMatchData}/>
        </main>
      </div>
      <Footer />
    </>
  );
}
