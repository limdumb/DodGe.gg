import { RankTab } from "./TypeTab";
import './UserInformation.css'

export const UserInformation = ({
  profileIconId,
  name,
  userRankTier,
}) => {
  return (
    <section className="User_Information_Container">
      <article className="User_Profile">
        <div className="Information_Contents">
          <img
            className="Icon_Image"
            src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${profileIconId}.png`}
          />
          <div>
            <span className="User_Name">{name}</span>
          </div>
        </div>
      </article>
      <div className="Tier_InforMation">
        <RankTab
          userRankTier={userRankTier}
        ></RankTab>
      </div>
    </section>
  );
};
