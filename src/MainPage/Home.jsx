import MainHeader from "../Components/Header";
import Search from "../Components/Search.jsx";
import Lotation from "../Components/Lotation";
import "bootstrap/dist/css/bootstrap.css";
import MainFooter from "../Components/Footer";
import "./Home.css"

export default function Home() {
  return (
    <>
      <MainHeader></MainHeader>
      <section className="lol">
        <h2>Logo</h2>
        <Search />
      </section>
      <div id="Main__Container">
        <main>
          <section>
            <Lotation></Lotation>
          </section>
          <section>
            <h3>소환사의 협곡 티어</h3>
            <div className="Tear">
              <div className="Tear__Box Top__Tear">
                <div className="Tear__Position">탑</div>
                <div className="Role__Container">
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                </div>
              </div>
              <div className="Tear__Box">
                <div className="Tear__Position">정글</div>
                <div className="Role__Container">
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                </div>
              </div>
              <div className="Tear__Box">
                <div className="Tear__Position">미드</div>
                <div className="Role__Container">
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                </div>
              </div>
              <div className="Tear__Box">
                <div className="Tear__Position">원딜</div>
                <div className="Role__Container">
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                </div>
              </div>
              <div className="Tear__Box support-tear">
                <div className="Tear__Position">서폿</div>
                <div className="Role__Container">
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3>소환사의 협곡 패치내용</h3>
            <div className="patch">
              <div className="Patch__Header">
                <a href="https://www.youtube.com/watch?v=YweGTpzIYgU">
                  <div className="Patch__Highlight">패치 하이라이트</div>
                </a>
                <a href="https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-12-21-notes/">
                  <div className="Patch__Content">패치 내용</div>
                </a>
              </div>
              <div className="Patch__Container">
                <span className="Patch__Role"></span>
                <span className="Patch__Role"></span>
                <span className="Patch__Role"></span>
                <span className="Patch__Role"></span>
                <span className="Patch__Role"></span>
                <span className="Patch__Role"></span>
                <span className="Patch__Role"></span>
              </div>
            </div>
          </section>
        </main>
      </div>
      <MainFooter />
    </>
  );
}
