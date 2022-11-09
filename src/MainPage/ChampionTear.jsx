import MainHeader from "../Components/MainHeader";
import "./ChampionTear.css";
import BestChampion from "../Components/BestChampion";
import ChampionList from "../Components/ChampionList";
import Champion from "../Components/Champion";

export default function ChampionTear() {
  return (
    <>
      <MainHeader />
      <div id="Main__Container">
        <BestChampion />
        <div className="contents_container">
          <aside className="championlist_container">
            <ChampionList />
          </aside>
          <main>
            <Champion />
          </main>
        </div>
      </div>
    </>
  );
}
