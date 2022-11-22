import MainHeader from "../Components/Header";
import "./MyPages.css";
import { UserInformation } from "../Components/UserInformation";
import { TypeTab } from "../Components/TypeTab";
import RecordList from "../Components/RecordList";
import Footer from "../Components/Footer";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { SummonerData, SummonerLeagueData, MatchSummoryData } from "../RiotAPI";

export default function MyPages() {
  const [currentTab, setCurrentTab] = useState("All__Game__Record");
  const [userProfile, setUserProfile] = useState(null);
  const [userSoloTier, setUserSoloTier] = useState(null);
  const [userFreeRankTier, setUserFreeRankTier] = useState(null);
  const [userMatchData, setUserMatchData] = useState(null);

  useEffect(() => {
    const userInfoData = async () => {
      const response = await SummonerData();
      setUserProfile(response);
    };

    const userTierData = async () => {
      const response = await SummonerLeagueData();
      setUserSoloTier(response.data[0]);
      setUserFreeRankTier(response.data[1]);
    };

    const userMatchSummory = async () => {
      const response = await MatchSummoryData();
      setUserMatchData(response);
    };

    userMatchSummory();
    userTierData();
    userInfoData();
  }, []);

  return (
    <>
      <MainHeader />
      <div id="Main__Container">
        <main>
          {userProfile && (
            <UserInformation
              userSoloTier={userSoloTier}
              userFreeRankTier={userFreeRankTier}
              profileIconId={userProfile.profileIconId}
              name={userProfile.name}
            />
          )}
          <div className="Information__transfer__Container">
            <span>혹시 알고 계셨나요?</span>
            <span>협곡의 전령은 바위개의 형이랍니다 응애</span>
          </div>
          <TypeTab
            onTabChange={(index) => {
              if (index === 0) {
                setCurrentTab("All__Game__Record");
              } else if (index === 1) {
                setCurrentTab("Solo__Rank__Record");
              } else if (index === 2) {
                setCurrentTab("Free__Rank__Record");
              } else {
                setCurrentTab("Normal__Game__Record");
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
