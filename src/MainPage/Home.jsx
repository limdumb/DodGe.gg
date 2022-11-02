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
        </main>
        <footer></footer>
      </div>
    </>
  );
}
