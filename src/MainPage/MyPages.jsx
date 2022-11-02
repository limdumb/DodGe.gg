import MainHeader from "../Components/header";
import "./MyPages.css"

export default function MyPages() {
  return (
    <>
      <MainHeader></MainHeader>
      <div id="Main__Container">
        <main>
          <section className="User__Information__Container">
            <article className="User__Profil">하이바이</article>
            <div className="Tier__InforMation">하이바이</div>
          </section>
          <div className="Information__transfer__Container"></div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}
