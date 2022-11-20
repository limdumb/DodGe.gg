import styled from "styled-components";

const ListContainer = styled.div`
  width: 1200px;
  height: 120vh;
  margin-top: 10px;
  display: flex;
`;

const RecordContents = styled.div`
  width: 1200px;
  height: 120px;
  margin-top: 10px;
  padding: 10px 18px;
  background-color: ${(props) =>
    props.backgroundColor ? "rgba(59, 130, 246, 0.5)" : "red"};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleSpan = styled.span`
  font-size: ${(props) => props.fontsize || "12px"};
  display: block;
  margin-bottom: ${(props) => props.marginBtm};
  color: ${(props) => props.changeColor};
  font-weight: ${(props) => props.fontweight};
`;

const ChampInforImage = styled.img`
  width: ${(props) => props.width};
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  margin-right: ${(props) => props.marginRgt};
`;

const PlayerList = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  margin-bottom: ${(props) => props.marginBTM};
  font-size: 14px;
`;

export default function RecordList({ tab, userMatchData }) {
  // 데이터 확인용
  console.log(userMatchData);
  const kdaScore = `${userMatchData.kills}/${userMatchData.deaths}/${userMatchData.assist}`;
  // 시간 노출 가공 예정
  const gameCreationTime = new Date(
    userMatchData.gameCreation
  ).toLocaleString();

  const getChartList = (tab) => {
    if (tab === "All__Game__Record") {
      return (
        <ListContainer>
          <RecordContents
            backgroundColor={
              userMatchData.win ? "red" : "rgba(59, 130, 246, 0.5)"
            }
          >
            <div className="Record__Information">
              <StyleSpan>{userMatchData.gameMode}</StyleSpan>
              <StyleSpan marginBtm="12px">{gameCreationTime}</StyleSpan>
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
              <StyleSpan>17:27</StyleSpan>
            </div>
            <div className="Record__My__Champ">
              <div className="My__Champ__Img">
                {/* 데이터 대체 예정 */}
                <ChampInforImage
                  width={64}
                  src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${userMatchData.championName}.png`}
                  marginRgt="5px"
                />
              </div>
              <div className="Spell__Content">
                <ChampInforImage
                  width={30}
                  src={
                    "http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/SummonerFlash.png"
                  }
                  marginRgt="2px"
                />
                <ChampInforImage
                  width={30}
                  src={process.env.PUBLIC_URL + "./Image/Exhaust.png"}
                />
                <div className="Spell__Content">
                  <ChampInforImage
                    width={30}
                    src={process.env.PUBLIC_URL + "./Image/DarkHarvest.png"}
                    backgroundColor="black"
                    marginRgt="2px"
                  />
                  <ChampInforImage
                    width={30}
                    src={process.env.PUBLIC_URL + "./Image/DetailedRun.png"}
                    backgroundColor="black"
                  />
                </div>
              </div>
              <div className="KDA__InfoContainer">
                <StyleSpan fontsize="25px">{kdaScore}</StyleSpan>
                <StyleSpan fontsize="16px">
                  CS:{userMatchData.totalMinionsKilled}개
                </StyleSpan>
              </div>
            </div>
            <div className="Game__Result__Information">
              <ul className="Game__Player__List">
                {userMatchData.redTeamSummonerName.map((el)=>{
                  return <PlayerList marginBTM="2px">{el}</PlayerList>
                })}
              </ul>
              <ul className="Game__Player__List2">
              {userMatchData.blueTeamSummonerName.map((el)=>{
                  return <PlayerList marginBTM="2px">{el}</PlayerList>
                })}
              </ul>
            </div>
            <ul className="Team__List"></ul>
          </RecordContents>
        </ListContainer>
      );
    }

    if (tab === "Solo__Rank__Record") {
      return (
        <ListContainer>
          <RecordContents>솔로랭크</RecordContents>
        </ListContainer>
      );
    }

    if (tab === "Free__Rank__Record") {
      return (
        <ListContainer>
          <RecordContents>자유랭크</RecordContents>
        </ListContainer>
      );
    }

    if (tab === "Normal__Game__Record") {
      return (
        <ListContainer>
          <RecordContents>일반</RecordContents>
        </ListContainer>
      );
    }
  };

  return <>{getChartList(tab)}</>;
}
