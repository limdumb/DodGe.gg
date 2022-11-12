import Header from "../Components/Header";
import "./ChampionTear.css";
import BestChampion from "../Components/BestChampion";
import ChampionList from "../Components/ChampionList";
import Champion from "../Components/Champion";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../Components/Footer";

export default function ChampionTear() {
  return (
    <>
      <Header />
      <div id="Main__Container">
        <BestChampion />
        <div className="Contents__Container">
          <aside className="Championlist__Container">
            <ChampionList />
          </aside>
          <main>
            <Champion />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}