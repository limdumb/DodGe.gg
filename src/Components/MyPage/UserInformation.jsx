import { RankTab } from "./TypeTab";
import "./UserInformation.css";

export const UserInformation = ({
  profileIconId,
  name,
  userRankTier,
  isDarkMode,
}) => {
  return (
    <section
      className={
        isDarkMode
          ? "User_Information_Container Dark_Mode"
          : "User_Information_Container Light_Mode"
      }
    >
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
      <div className="Tier_Information">
        <RankTab userRankTier={userRankTier}></RankTab>
      </div>
    </section>
  );
};
