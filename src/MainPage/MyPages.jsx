import MainHeader from "../Components/header";
import "./MyPages.css";
import { UserInformation } from "../Components/UserInformation";
import TypeTab from "../Components/TypeTab";
import RecordList from "../Components/RecordList";
import Footer from "../Components/Footer";
import { useState } from "react";

export default function MyPages() {
  const [currentTab, setCurrentTab] = useState("All__Game__Record")

  return (
    <>
      <MainHeader/>
      <div id="Main__Container">
        <main>
          <UserInformation/>
          <div className="Information__transfer__Container">
            <span>혹시 알고 계셨나요?</span>
            <span>협곡의 전령은 바위개의 형이랍니다 응애</span>
          </div>
          <TypeTab 
            onTabChange={(index) => {
              if(index === 0) {
                setCurrentTab("All__Game__Record")
              } else if (index === 1) {
                setCurrentTab("Solo__Rank__Record")
              } else if (index === 2) {
                setCurrentTab("Free__Rank__Record")
              } else {
                setCurrentTab("Normal__Game__Record")
              }
            }}
          />
          <RecordList tab={currentTab}/>
        </main>
        <Footer/>
      </div>
    </>
  );
}
