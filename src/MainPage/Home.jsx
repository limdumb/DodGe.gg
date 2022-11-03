import MainHeader from "../Components/header";

export default function Home() {
  return (
    <>
      <MainHeader></MainHeader>
      <div id="Main__Container">
        <main>
          <section>
            <h2>Logo</h2>
            <div className="search-box">
              <form action="." method="post">
                <input
                  className="search-text"
                  type="text"
                  placeholder="아이디를 입력해 주세요"
                />
                <button className="search-btn">검색</button>
              </form>
            </div>
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
            <div className="patch"></div>
          </section>
        </main>
        <footer></footer>
      </div>
    </>
  );
}
