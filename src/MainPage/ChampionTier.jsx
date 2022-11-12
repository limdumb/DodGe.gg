import Header from "../Components/Header";
import "./ChampionTier.css";
import BestChampion from "../Components/BestChampion";
import ChampionPrice from "../Components/ChampionPrice";
import Champion from "../Components/Champion";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../Components/Footer";

export default function ChampionTier() {
  return (
    <>
      <Header />
      <div id="Main__Container">
        <BestChampion />
        <div className="Contents__Container">
          <aside className="Championlist__Container">
            <ChampionPrice />
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
