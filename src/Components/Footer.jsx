import Member from "./Member";
import "./Footer.css";

export default function MainFooter() {
  return (
    <footer className="Footer__Wrapper">
      <div className="Members__Container">
        <Member
          name={"임경인"}
          git={"https://github.com/limdumb"}
          blog={"https://velog.io/@limdumb"}
          email={"ruddls10@naver.com"}
        />
        <Member
          name={"심민섭"}
          git={"https://github.com/shim5505"}
          blog={"https://code-in-law.tistory.com/"}
          email={"shim5505@gmail.com"}
        />
        <Member
          name={"김재우"}
          git={"https://github.com/rlawodn46465"}
          blog={
            "https://quiet-paste-3d3.notion.site/9930d759c4a64012a2e9abefe20b99e7"
          }
          email={"rlawodn46465@naver.com"}
        />
      </div>
      <div>
        <a href="https://github.com/limdumb/DodGe.gg">프로젝트 링크</a>
        <p>© 2022 DodGe.gg</p>
      </div>
    </footer>
  );
}
