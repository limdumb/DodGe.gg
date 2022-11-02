import MainHeader from "../Components/header";
import "./MyPages.css"
import {UserInformation} from "../Components/UserInformation";

export default function MyPages() {
  return (
    <>
      <MainHeader></MainHeader>
      <div id="Main__Container">
        <main>
          {UserInformation}
          <div className="Information__transfer__Container"></div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}
