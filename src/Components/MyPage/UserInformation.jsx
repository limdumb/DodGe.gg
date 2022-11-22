import { RankTab } from "./TypeTab";

export const UserInformation = ({
  profileIconId,
  name,
  userFreeRankTier,
  userSoloTier,
}) => {
  return (
    <section className="User__Information__Container">
      <article className="User__Profil">
        <div className="Information__Contents">
          <img
            className="Icon__Image"
            src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/profileicon/${profileIconId}.png`}
          />
          <div>
            <span className="User__Name">{name}</span>
          </div>
        </div>
      </article>
      <div className="Tier__InforMation">
        <RankTab
          userSoloTier={userSoloTier}
          userFreeRankTier={userFreeRankTier}
        ></RankTab>
      </div>
    </section>
  );
};
