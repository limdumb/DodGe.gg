import MainHeader from "../Components/header";
import "./MyPages.css";
import { UserInformation } from "../Components/UserInformation";
import { TypeTab } from "../Components/TypeTab";
import RecordList from "../Components/RecordList";
import Footer from "../Components/Footer";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { SummonerData, SummonerLeagueData } from "../RiotAPI";

export default function MyPages() {
  const [currentTab, setCurrentTab] = useState("All__Game__Record");
  // 상태값 추후 수정 예정
  const [profileIconID, setProfilIconId] = useState(null);
  const [profileName, setProfilName] = useState(null);
  const [lastRevisionDate, setLastRevisionDate] = useState(null);
  const [userSoloTier, setUserSoloTier] = useState(null);
  const [userFreeRankTier, setUserFreeRankTier] = useState(null);

  useEffect(() => {
    const userInfoData = async () => {
      const response = await SummonerData();
      setProfilIconId(response.data.profileIconId);
      setProfilName(response.data.name);
      setLastRevisionDate(response.data.revisionDate);
    };

    const userTierData = async () => {
      const response = await SummonerLeagueData();
      setUserSoloTier(response.data[0]);
      setUserFreeRankTier(response.data[1]);
    };
    userTierData();
    userInfoData();
  }, []);

  const propsObj = {
    profileIconID,
    profileName,
    lastRevisionDate,
    userSoloTier,
    userFreeRankTier,
  };

  return (
    <>
      <MainHeader />
      <div id="Main__Container">
        <main>
          <UserInformation
          {...propsObj}
          />
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
          <RecordList tab={currentTab} />
        </main>
      </div>
      <Footer />
    </>
  );
}
