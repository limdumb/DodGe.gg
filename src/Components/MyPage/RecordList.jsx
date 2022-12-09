import styled from "styled-components";
import { month_Day, minute_Second } from "../../Function/TimeStemp";
import './RecordList.css'

const ListContainer = styled.div`
  height: 120vh;
  margin-top: 10px;
  display: flex;
`;

const RecordContents = styled.div`
  height: 120px;
  margin-top: 10px;
  padding: 10px 18px;
  background-color: ${(props) =>
    props.backgroundColor ? "rgba(59, 130, 246, 0.5)" : "#935560"};
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyleSpan = styled.span`
  font-size: ${(props) => props.fontsize};
  display: block;
  margin-bottom: ${(props) => props.marginBtm};
  color: ${(props) => props.changeColor};
  font-weight: ${(props) => props.fontweight};
  margin-left: ${(props) => props.marginLft};
`;

export const GameInfoImage = styled.img`
  width: ${(props) => props.width};
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.backgroundColor};
  margin-right: ${(props) => props.marginRgt};
  border: ${(props) => props.border};
`;

const PlayerList = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  margin-bottom: ${(props) => props.marginBTM};
  font-size: 14px;
`;

export default function RecordList({ tab, userMatchData }) {
  const kdaScore = `${userMatchData.kills}/${userMatchData.deaths}/${userMatchData.assist}`;

  const getChartList = (tab) => {
    if (tab === "All_Game_Record") {
      return (
        <ListContainer>
          <RecordContents backgroundColor={userMatchData.win}>
            <div className="Record_Information">
              <StyleSpan>{userMatchData.gameMode}</StyleSpan>
              <StyleSpan marginBtm="12px">
                {month_Day(userMatchData.gameCreation)}
              </StyleSpan>
              <StyleSpan
                fontsize="15px"
                changeColor={
                  userMatchData.win ? "rgba(49, 141, 239, 0.676)" : "red"
                }
                fontweight="bold"
                margin="3px"
              >
                {userMatchData.win ? "Win" : "Lose"}
              </StyleSpan>
              <StyleSpan>{minute_Second(userMatchData.gameDuration)}</StyleSpan>
            </div>
            <div className="Record_My_Champ">
              <div className="My_Champ_Img">
                <GameInfoImage
                  width={64}
                  src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${userMatchData.championName}.png`}
                  marginRgt="5px"
                />
              </div>
              <div className="Spell_Content">
                <GameInfoImage
                  width={30}
                  src={
                    "http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/SummonerFlash.png"
                  }
                  marginRgt="2px"
                />
                <GameInfoImage
                  width={30}
                  src={process.env.PUBLIC_URL + "./Image/Exhaust.png"}
                />
                <div className="Spell__Content">
                  <GameInfoImage
                    width={30}
                    src={process.env.PUBLIC_URL + "./Image/DarkHarvest.png"}
                    backgroundColor="black"
                    marginRgt="2px"
                  />
                  <GameInfoImage
                    width={30}
                    src={process.env.PUBLIC_URL + "./Image/DetailedRun.png"}
                    backgroundColor="black"
                  />
                </div>
              </div>
              <div className="KDA_InfoContainer">
                <StyleSpan fontsize="25px">{kdaScore}</StyleSpan>
                <StyleSpan fontsize="16px">
                  CS:{userMatchData.totalMinionsKilled}개
                </StyleSpan>
              </div>
            </div>
            <ul className="Record_Item_List">
              {userMatchData.itemSlot.map((el) => {
                return el !== 0 ? (
                  <li >
                    <GameInfoImage
                      width={30}
                      marginRgt="3px"
                      src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/${el}.png`}
                    ></GameInfoImage>
                  </li>
                ) : (
                  <li className="No_Item_List" key={el[0]}></li>
                );
              })}
            </ul>
            <div className="Game_Result_Information">
              <ul className="Game_Player_List">
                {userMatchData.redTeamSummonerName.map((el) => {
                  return (
                    <PlayerList marginBTM="2px" key={el}>
                      {el}
                    </PlayerList>
                  );
                })}
              </ul>
              <ul className="Game_Player_List2">
                {userMatchData.blueTeamSummonerName.map((el) => {
                  return (
                    <PlayerList marginBTM="2px" key={el}>
                      {el}
                    </PlayerList>
                  );
                })}
              </ul>
            </div>
            <ul className="Team_List"></ul>
          </RecordContents>
        </ListContainer>
      );
    }

    if (tab === "Solo_Rank_Record") {
      return (
        <ListContainer>
          <RecordContents>솔로랭크</RecordContents>
        </ListContainer>
      );
    }

    if (tab === "Free_Rank_Record") {
      return (
        <ListContainer>
          <RecordContents>자유랭크</RecordContents>
        </ListContainer>
      );
    }

    if (tab === "Normal_Game_Record") {
      return (
        <ListContainer>
          <RecordContents>일반</RecordContents>
        </ListContainer>
      );
    }
  };

  return <>{getChartList(tab)}</>;
}
