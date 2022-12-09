import MainHeader from "../Components/CommonComponents/Header";
import "./MyPages.css";
import { UserInformation } from "../Components/MyPage/UserInformation";
import { TypeTab } from "../Components/MyPage/TypeTab";
import RecordList from "../Components/MyPage/RecordList";
import Footer from "../Components/CommonComponents/Footer.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { summonerData, summonerLeagueData, matchSummoryData } from "../API/RiotAPI";

export default function MyPages() {
  const [currentTab, setCurrentTab] = useState("All__Game__Record");
  const [userProfile, setUserProfile] = useState(null);
  const [userSoloTier, setUserSoloTier] = useState(null);
  const [userFreeRankTier, setUserFreeRankTier] = useState(null);
  const [userMatchData, setUserMatchData] = useState(null);

  useEffect(() => {
    const userInfoData = async () => {
      const response = await summonerData();
      setUserProfile(response);
    };

    const userTierData = async () => {
      const response = await summonerLeagueData();
      setUserSoloTier(response.data[0]);
      setUserFreeRankTier(response.data[1]);
    };

    const userMatchSummory = async () => {
      const response = await matchSummoryData();
      setUserMatchData(response);
    };

    userMatchSummory();
    userTierData();
    userInfoData();
  }, []);

  return (
    <>
      <MainHeader />
      <div id="Main_Container">
        <main>
          {userProfile && (
            <UserInformation
              userSoloTier={userSoloTier}
              userFreeRankTier={userFreeRankTier}
              profileIconId={userProfile.profileIconId}
              name={userProfile.name}
            />
          )}
          <div className="Information_transfer_Container">
            <span>혹시 알고 계셨나요?</span>
            <span>협곡의 전령은 바위개의 형이랍니다 응애</span>
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
          {userMatchData && (
            <RecordList tab={currentTab} userMatchData={userMatchData} />
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
