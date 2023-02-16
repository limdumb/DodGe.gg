import { RankTab } from "./TypeTab";
import "./UserInformation.css";

export const UserInformation = ({
  profileIconId,
  name,
  userRankTier,
  darkMode,
}) => {
  return (
    <section
      className={
        darkMode
          ? "Dark_User_Information_Container"
          : "Light_User_Information_Container"
      }
    >
      <div
        className={darkMode ? "Dark_Wrapper_Line" : "Light_Wrapper_Line"}
      ></div>
      <div className={darkMode ? "Dark_Trapezoid" : "Light_Trapezoid"}></div>
      <div className="User_Information_Wrapper">
        <article className="User_Profile">
          <div className="Information_Contents">
            <img
              className="Icon_Image"
              src={`https://ddragon.leagueoflegends.com/cdn/13.3.1/img/profileicon/${profileIconId}.png`}
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
