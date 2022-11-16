import { RankTab } from "./TypeTab";

export const UserInformation = ({
  lastRevisionDate,
  profileIconID,
  profileName,
  userSoloTier,
  userFreeRankTier,
}) => {
  const newLastRevisionDate = new Date(lastRevisionDate);
  return (
    <section className="User__Information__Container">
      <article className="User__Profil">
        <div className="Information__Contents">
          <img
            className="Icon__Image"
            src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/profileicon/${profileIconID}.png`}
          />
          <div>
            <span className="User__Name">{profileName}</span>
            <span>
              마지막 갱신일자:{newLastRevisionDate.toLocaleString()}{" "}
            </span>
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
