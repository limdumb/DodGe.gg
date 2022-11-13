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
        <div className="Tab__Tier__Container">
          <img
            className="Icon__Image"
            src={process.env.PUBLIC_URL + "./Image/PlatinumImage.png"}
          />
          <div className="Tab__Tier__Contents">
            <span className="Tab__Tier__Contents__1">Platinum 3</span>
            <span className="Tab__Tier__Contents__2">29LP</span>
          </div>
        </div>
      </div>
    </section>
  );
};
