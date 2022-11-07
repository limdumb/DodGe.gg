import MainHeader from "../Components/header";
import Search from "../Components/Search.jsx";
import Champion from "../api/Champion";
import Lotation from "../Components/Lotation";

export default function Home() {
  return (
    <>
      <MainHeader></MainHeader>
      <div id="Main__Container">
        <main>
          <section>
            <h2>Logo</h2>
            <Search />
          </section>
          <section>
            <Lotation></Lotation>
          </section>
          <section>
            <h3>소환사의 협곡 티어</h3>
            <div className="Tear">
              <div className="Tear-box Top-tear">
                <div className="tear-position">탑</div>
                <div className="role-container">
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                </div>
              </div>
              <div className="Tear-box">
                <div className="tear-position">정글</div>
                <div className="role-container">
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                </div>
              </div>
              <div className="Tear-box">
                <div className="tear-position">미드</div>
                <div className="role-container">
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                </div>
              </div>
              <div className="Tear-box">
                <div className="tear-position">원딜</div>
                <div className="role-container">
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                  <span className="role"></span>
                </div>
              </div>
              <div className="Tear-box support-tear">
                <div className="tear-position">서폿</div>
                <div className="role-container">
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
              <div className="patch-highlight">패치 하이라이트</div>
              <a href="https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-12-21-notes/">
                <div className="patch-content">패치 내용</div>
              </a>
            </div>
          </section>
        </main>
        <footer></footer>
      </div>
    </>
  );
}
