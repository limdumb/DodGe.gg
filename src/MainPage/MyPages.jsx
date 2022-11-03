import MainHeader from "../Components/header";
import "./MyPages.css";
import { UserInformation } from "../Components/UserInformation";
import TypeTab from "../Components/TypeTab";
import RecordList from "../Components/RecordList";

export default function MyPages() {
  return (
    <>
      <MainHeader></MainHeader>
      <div id="Main__Container">
        <main>
          {UserInformation()}
          <div className="Information__transfer__Container">
            <span>혹시 알고 계셨나요?</span>
            <span>협곡의 전령은 바위개의 형이랍니다 응애</span>
          </div>
          {TypeTab()}
          {RecordList()}
        </main>
        <footer></footer>
      </div>
    </>
  );
}
