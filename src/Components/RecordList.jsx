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
    props.backgroundColor ? "red" : "rgba(59, 130, 246, 0.5)"};
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
  const kdaScore = `${userMatchData.kills}/${userMatchData.deaths}/${userMatchData.assist}`;
  const getChartList = (tab) => {
    if (tab === "All__Game__Record") {
      return (
        <ListContainer>
          <RecordContents>
            <div className="Record__Information">
              <StyleSpan>{userMatchData.gameMode}</StyleSpan>
              <StyleSpan marginBtm="12px">11/08</StyleSpan>
              <StyleSpan
                fontsize="15px"
                changeColor="rgba(49, 141, 239, 0.676)"
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
                  src={process.env.PUBLIC_URL + "./Image/kassadin.png"}
                  marginRgt="5px"
                />
              </div>
              <div className="Spell__Content">
                <ChampInforImage
                  width={30}
                  src={process.env.PUBLIC_URL + "./Image/Flesh.png"}
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
                <StyleSpan fontsize="16px">CS:{userMatchData.totalMinionsKilled}개</StyleSpan>
              </div>
            </div>
            <div className="Game__Result__Information">
              {/* 데이터로 변경 예정 */}
              <ul className="Game__Player__List">
                <li>
                  <PlayerList marginBTM="2px">덤 사 늑</PlayerList>
                </li>
                <li>
                  <PlayerList marginBTM="2px">늑 사 덤</PlayerList>
                </li>
                <li>
                  <PlayerList marginBTM="2px">일하는감자</PlayerList>
                </li>
                <li>
                  <PlayerList marginBTM="2px">민세공주</PlayerList>
                </li>
                <li>
                  <PlayerList>민세왕자</PlayerList>
                </li>
              </ul>
              <ul className="Game__Player__List2">
                <li>
                  <PlayerList>정세민</PlayerList>
                </li>
                <li>
                  <PlayerList>바보</PlayerList>
                </li>
                <li>
                  <PlayerList>메롱</PlayerList>
                </li>
                <li>
                  <PlayerList>하하</PlayerList>
                </li>
                <li>
                  <PlayerList>헤헤</PlayerList>
                </li>
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
