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
          ? "Dark_User_Information_Container"
          : "Light_User_Information_Container"
      }
    >
      <div
        className={isDarkMode ? "Dark_Wrapper_Line" : "Light_Wrapper_Line"}
      ></div>
      <div className={isDarkMode ? "Dark_Trapezoid" : "Light_Trapezoid"}></div>
      <div className="User_Information_Wrapper">
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
      </div>
    </section>
  );
};
