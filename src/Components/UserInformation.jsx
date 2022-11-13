import { RankTab } from "./TypeTab";

export const UserInformation = (props) => {
  console.log(props.lastRevisionDate);
  const lastRevisionDate = new Date(props.lastRevisionDate);
  console.log(lastRevisionDate);
  return (
    <section className="User__Information__Container">
      <article className="User__Profil">
        <div className="Information__Contents">
          <img
            className="Icon__Image"
            src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/profileicon/${props.profilIconID}.png`}
          />
          <div>
            <span className="User__Name">{props.profileName}</span>
            <span> 마지막 갱신일자:{lastRevisionDate.toLocaleString()} </span>
          </div>
        </div>
      </article>
      <div className="Tier__InforMation">
        <RankTab></RankTab>
      </div>
    </section>
  );
};
