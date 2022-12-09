import { useState } from "react";
import styled from "styled-components";
import './TypeTab.css'

const TabButton = styled.button`
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
  font-weight: bold;
  font-size: ${(props) => props.fontsize || "28px"};
  border-bottom: ${(props) => (props.borderBottom ? "2px solid gray" : "none")};
  color: ${(props) => (props.changeColor ? "black" : "rgb(187, 187, 187)")};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBtm};
  margin-left: ${(props)=> props.marginLft};
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

export const RankTab = ({ userSoloTier, userFreeRankTier }) => {
  const [rankInfo, setRankInfo] = useState(0);
console.log(userSoloTier)
  const tabHandler = (index) => {
    setRankInfo(index);
  };

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
          <img
            className="Icon_Image"
            src={process.env.PUBLIC_URL + "/Image/PlatinumImage.png"}
          />
          <div className="Tab_Tier_Contents">
            {userSoloTier && (
              <>
                <span className="Tab_Tier_Contents_1">
                  {userSoloTier.tier} {userSoloTier.rank}
                </span>
                <span className="Tab_Tier_Contents_2">
                  {userSoloTier.leaguePoints}LP
                </span>
              </>
            )}
          </div>
        </div>
      ),
    },
    {
      id: "2",
      rankTitle: (
        <TabButton
          fontsize="20px"
          marginLft='5px'
          changeColor={rankInfo === 1}
          onClick={() => tabHandler(1)}
        >
          자유랭크
        </TabButton>
      ),
      rankContent: (
        <div className="Tab_Tier_Container">
          <img
            className="Icon_Image"
            src={process.env.PUBLIC_URL + "/Image/PlatinumImage.png"}
          />
          <div className="Tab_Tier_Contents">
            {userFreeRankTier && (
              <>
                <span className="Tab_Tier_Contents_1">
                  {userFreeRankTier.tier} {userFreeRankTier.rank}
                </span>
                <span className="Tab_Tier_Contents_2">
                  {userFreeRankTier.leaguePoints}LP
                </span>
              </>
            )}
          </div>
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
