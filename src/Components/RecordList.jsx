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
    props.backgroundColor ? "rgba(59, 130, 246, 0.5)" : "#935560"};
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyleSpan = styled.span`
  font-size: ${(props) => props.fontsize || "12px"};
  display: block;
  margin-bottom: ${(props) => props.marginBtm};
  color: ${(props) => props.changeColor};
  font-weight: ${(props) => props.fontweight};
`;

const GameInfoImage = styled.img`
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

  const month_Day = () => {
    const time = new Date(userMatchData.gameCreation);

    let month = ("0" + (time.getMonth() + 1)).slice(-2);
    let day = ("0" + time.getDate()).slice(-2);

    return `${month}월${day}일`;
  };

  const minute_Second = () => {
    const time = new Date(userMatchData.gameDuration * 1000);

    let minutes = ("0" + time.getMinutes()).slice(-2);
    let secounds = ("0" + time.getSeconds()).slice(-2);

    return `${minutes}분 ${secounds}초`;
  };

  const getChartList = (tab) => {
    if (tab === "All__Game__Record") {
      return (
        <ListContainer>
          <RecordContents backgroundColor={userMatchData.win}>
            <div className="Record__Information">
              <StyleSpan>{userMatchData.gameMode}</StyleSpan>
              <StyleSpan marginBtm="12px">{month_Day()}</StyleSpan>
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
              <StyleSpan>{minute_Second()}</StyleSpan>
            </div>
            <div className="Record__My__Champ">
              <div className="My__Champ__Img">
                {/* 데이터 대체 예정 */}
                <GameInfoImage
                  width={64}
                  src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${userMatchData.championName}.png`}
                  marginRgt="5px"
                />
              </div>
              <div className="Spell__Content">
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
              <div className="KDA__InfoContainer">
                <StyleSpan fontsize="25px">{kdaScore}</StyleSpan>
                <StyleSpan fontsize="16px">
                  CS:{userMatchData.totalMinionsKilled}개
                </StyleSpan>
              </div>
            </div>
            <ul className="Record__Item__List">
              {userMatchData.itemSlot.map((el) => {
                return el !== 0 ?
                  <li>
                    <GameInfoImage
                      width={30}
                      key={el}
                      marginRgt="3px"
                      src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/${el}.png`}
                    ></GameInfoImage>
                  </li>
              : <li className="No__Item__List"></li> })}
            </ul>
            <div className="Game__Result__Information">
              <ul className="Game__Player__List">
                {userMatchData.redTeamSummonerName.map((el) => {
                  return (
                    <PlayerList marginBTM="2px" key={el}>
                      {el}
                    </PlayerList>
                  );
                })}
              </ul>
              <ul className="Game__Player__List2">
                {userMatchData.blueTeamSummonerName.map((el) => {
                  return (
                    <PlayerList marginBTM="2px" key={el}>
                      {el}
                    </PlayerList>
                  );
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
