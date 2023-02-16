import { useState } from "react";
import styled from "styled-components";
import "./TypeTab.css";

const TabButton = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  font-weight: bold;
  font-size: ${(props) => props.fontsize || "28px"};
  border-bottom: ${(props) => (props.borderBottom ? "2px solid gray" : "none")};
  color: ${(props) => (props.changeColor ? "white" : "#B2B2B2")};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBtm};
  margin-left: ${(props) => props.marginLft};
`;

export function TypeTab({ onTabChange }) {
  const [activate, setActivate] = useState(0);

  const tabClickHandler = (index) => {
    setActivate(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  const tabContArr = [
    {
      id: "1",
      tabTitle: (
        <TabButton
          borderBottom={activate === 0}
          changeColor={activate === 0}
          onClick={() => tabClickHandler(0)}
        >
          전체큐
        </TabButton>
      ),
    },
    {
      id: "2",
      tabTitle: (
        <TabButton
          borderBottom={activate === 1}
          changeColor={activate === 1}
          onClick={() => tabClickHandler(1)}
        >
          솔로랭크
        </TabButton>
      ),
    },
    {
      id: "3",
      tabTitle: (
        <TabButton
          borderBottom={activate === 2}
          changeColor={activate === 2}
          onClick={() => tabClickHandler(2)}
        >
          자유랭크
        </TabButton>
      ),
    },
    {
      id: "4",
      tabTitle: (
        <TabButton
          borderBottom={activate === 3}
          changeColor={activate === 3}
          onClick={() => tabClickHandler(3)}
        >
          일반
        </TabButton>
      ),
    },
  ];

  return (
    <div className="Record_Tab__Container">
      <ul className="Tab_Type">
        {tabContArr.map((section) => {
          return <li key={section.id}>{section.tabTitle}</li>;
        })}
      </ul>
    </div>
  );
}

export const RankTab = ({ userRankTier }) => {
  const soloRankTier =
    userRankTier &&
    userRankTier.filter((el) => {
      //Open API에 변경된 값으로 변경 ( 추후 또 변경시 재변경 예정 )
      return el.queueType === "RANKED_TFT_DOUBLE_UP";
    });

  const FreeRankTier =
    userRankTier &&
    userRankTier.filter((el) => {
      return el.queueType === "RANKED_FLEX_SR";
    });

  const [rankInfo, setRankInfo] = useState(0);
  const tabHandler = (index) => {
    setRankInfo(index);
  };
  const lowerCaseSoloTierName =
    soloRankTier.length !== 0 ? soloRankTier[0].tier.toLowerCase() : undefined;
  const lowerCaseFreeTierName =
    FreeRankTier.length !== 0 ? FreeRankTier[0].tier.toLowerCase() : undefined;
  const userTierArr = [
    {
      id: "1",
      rankTitle: (
        <TabButton
          fontsize="20px"
          changeColor={rankInfo === 0}
          onClick={() => tabHandler(0)}
        >
          솔로랭크
        </TabButton>
      ),
      rankContent: (
        <div className="Tab_Tier_Container">
          {soloRankTier.length !== 0 ? (
            <div className="Tab_Tier_Contents">
              {soloRankTier && (
                <>
                  <img
                    className="Tier_Icon_Image"
                    src={`https://blitz-cdn.blitz.gg/80x0/ranks/2022/${lowerCaseSoloTierName}.webp`}
                  />
                  <div className="Tab_Tier_Contents_Wrapper">
                    <p className="Tab_Tier_Contents_1">
                      {soloRankTier[0].tier} {soloRankTier[0].rank}
                    </p>
                    <span className="Tab_Tier_Contents_2">
                      {soloRankTier[0].leaguePoints}LP
                    </span>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div>Unranked</div>
          )}
        </div>
      ),
    },
    {
      id: "2",
      rankTitle: (
        <TabButton
          fontsize="20px"
          marginLft="5px"
          changeColor={rankInfo === 1}
          onClick={() => tabHandler(1)}
        >
          자유랭크
        </TabButton>
      ),
      rankContent: (
        <div className="Tab_Tier_Container">
          {FreeRankTier.length !== 0 ? (
            <>
              <div className="Tab_Tier_Contents">
                {FreeRankTier && (
                  <>
                    <img
                      className="Tier_Icon_Image"
                      src={`https://blitz-cdn.blitz.gg/80x0/ranks/2022/${lowerCaseFreeTierName}.webp`}
                    />
                    <div className="Tab_Tier_Contents_Wrapper">
                      <p className="Tab_Tier_Contents_1">
                        {FreeRankTier[0].tier} {FreeRankTier[0].rank}
                      </p>
                      <span className="Tab_Tier_Contents_2">
                        {FreeRankTier[0].leaguePoints}LP
                      </span>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <div>Unranked</div>
          )}
        </div>
      ),
    },
  ];

  return (
    <div>
      <ul className="Tab_User_Tier">
        {userTierArr.map((section) => {
          return <li key={section.id}>{section.rankTitle}</li>;
        })}
      </ul>
      <div>{userTierArr[rankInfo].rankContent}</div>
    </div>
  );
};
