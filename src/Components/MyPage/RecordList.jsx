import styled from "styled-components";
import { month_Day, minute_Second } from "../../Function/TimeStemp";
import "./RecordList.css";

const ListContainer = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  color: white;
`;

const RecordContents = styled.div`
  width: 100%;
  height: 100px;
  margin: 10px 1px;
  padding: 5px 2.5px;
  background-color: ${(props) =>
    props.backgroundColor ? "rgba(59, 130, 246, 0.5)" : "#935560"};
  border-radius: 10px;
  display: flex;
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

// 해당 스타일드 컴포넌트는 필요 없을 시 삭제하겠습니다. 코드 리뷰 시 확인 부탁드리겠습니다.
const PlayerList = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  margin-bottom: ${(props) => props.marginBTM};
  font-size: 14px;
`;

export default function RecordList({
  tab,
  getUserMatchData,
  getSpell,
  runesData,
}) {
  return (
    <>
      {getUserMatchData &&
        getUserMatchData.map((el, index) => {
          const runes = runeSlot(getUserMatchData, index);
          const redTeam = el.allChampionName.slice(0, 5);
          const blueTeam = el.allChampionName.slice(5, 10);
          const kdaScore = `${el.kills}/${el.deaths}/${el.assist}`;
          if (tab === "All_Game_Record") {
            return (
              <ListContainer key={index}>
                <RecordContents backgroundColor={el.win}>
                  <div className="Record_Information">
                    <StyleSpan fontsize={"12px"}>
                      {gameType(getUserMatchData, index)}
                    </StyleSpan>
                    <StyleSpan fontsize={"10px"}>
                      {month_Day(el.gameCreation)}
                    </StyleSpan>
                    <StyleSpan
                      fontsize="22px"
                      changeColor={el.win ? "#7DE5ED" : "#850E35"}
                      fontweight="bold"
                      margin="3px"
                    >
                      {el.win ? "Win" : "Lose"}
                    </StyleSpan>
                    <StyleSpan fontsize="10px">
                      {minute_Second(el.gameDuration)}
                    </StyleSpan>
                  </div>
                  <div className="Record_Detail">
                    <div className="Record_My_Champ">
                      <div className="My_Champ_Img">
                        <GameInfoImage
                          radius={"10px"}
                          width={55}
                          src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${el.championName}.png`}
                          marginRgt="5px"
                        />
                      </div>
                      <div className="Rune_Spell_Info">
                        <div className="Runes_Content">
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={getSpell[index][1]}
                            marginRgt="5px"
                          />
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={getSpell[index][0]}
                          />
                        </div>
                        <div className="Spells_Content">
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={`https://ddragon.canisback.com/img/${
                              runesData[0][runes[0]].icon
                            }`}
                            backgroundColor="black"
                            marginRgt="5px"
                          />
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={`https://ddragon.canisback.com/img/${
                              runesData[0][runes[1]].icon
                            }`}
                            backgroundColor="black"
                          />
                        </div>
                      </div>
                      <div className="KDA_InfoContainer">
                        <StyleSpan fontsize="16px">{kdaScore}</StyleSpan>
                        <StyleSpan fontsize="12px">
                          CS:{el.totalMinionsKilled}개
                        </StyleSpan>
                      </div>
                    </div>
                    <ul className="Record_Item_List">
                      {el &&
                        el.itemSlot.map((el, index) => {
                          return el !== 0 ? (
                            <li key={index}>
                              <GameInfoImage
                                radius={"5px"}
                                width={25}
                                marginRgt="2.5px"
                                key={index}
                                src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/${el}.png`}
                              ></GameInfoImage>
                            </li>
                          ) : (
                            <li className="No_Item_List" key={index}></li>
                          );
                        })}
                    </ul>
                  </div>
                  <div className="Game_Result_Information">
                    <ul className="Game_Player_List">
                      {redTeam.map((el) => {
                        if (el === "FiddleSticks") {
                          return (
                            <li key={el}>
                              <GameInfoImage
                                width={20}
                                src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Fiddlesticks.png`}
                              />
                            </li>
                          );
                        }
                        return (
                          <li key={el}>
                            <GameInfoImage
                              width={20}
                              src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${el}.png`}
                            />
                          </li>
                        );
                      })}
                    </ul>
                    <ul className="Game_Player_List2">
                      {blueTeam.map((el) => {
                        if (el === "FiddleSticks") {
                          return (
                            <li key={el}>
                              <GameInfoImage
                                width={20}
                                src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Fiddlesticks.png`}
                              />
                            </li>
                          );
                        }
                        return (
                          <li key={el}>
                            <GameInfoImage
                              width={20}
                              src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${el}.png`}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </RecordContents>
              </ListContainer>
            );
          }

          if (
            tab === "Solo_Rank_Record" &&
            gameType(getUserMatchData, index) === "솔로랭크"
          ) {
            return (
              <ListContainer key={index}>
                <RecordContents backgroundColor={el.win}>
                  <div className="Record_Information">
                    <StyleSpan fontsize={"12px"}>
                      {gameType(getUserMatchData, index)}
                    </StyleSpan>
                    <StyleSpan fontsize={"10px"}>
                      {month_Day(el.gameCreation)}
                    </StyleSpan>
                    <StyleSpan
                      fontsize="22px"
                      changeColor={el.win ? "#7DE5ED" : "#850E35"}
                      fontweight="bold"
                      margin="3px"
                    >
                      {el.win ? "Win" : "Lose"}
                    </StyleSpan>
                    <StyleSpan fontsize="10px">
                      {minute_Second(el.gameDuration)}
                    </StyleSpan>
                  </div>
                  <div className="Record_Detail">
                    <div className="Record_My_Champ">
                      <div className="My_Champ_Img">
                        <GameInfoImage
                          radius={"10px"}
                          width={55}
                          src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${el.championName}.png`}
                          marginRgt="5px"
                        />
                      </div>
                      <div className="Rune_Spell_Info">
                        <div className="Runes_Content">
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={getSpell[index][1]}
                            marginRgt="5px"
                          />
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={getSpell[index][0]}
                          />
                        </div>
                        <div className="Spells_Content">
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={`https://ddragon.canisback.com/img/${
                              runesData[0][runes[0]].icon
                            }`}
                            backgroundColor="black"
                            marginRgt="5px"
                          />
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={`https://ddragon.canisback.com/img/${
                              runesData[0][runes[1]].icon
                            }`}
                            backgroundColor="black"
                          />
                        </div>
                      </div>
                      <div className="KDA_InfoContainer">
                        <StyleSpan fontsize="16px">{kdaScore}</StyleSpan>
                        <StyleSpan fontsize="12px">
                          CS:{el.totalMinionsKilled}개
                        </StyleSpan>
                      </div>
                    </div>
                    <ul className="Record_Item_List">
                      {el &&
                        el.itemSlot.map((el, index) => {
                          return el !== 0 ? (
                            <li key={index}>
                              <GameInfoImage
                                radius={"5px"}
                                width={25}
                                marginRgt="2.5px"
                                key={index}
                                src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/${el}.png`}
                              ></GameInfoImage>
                            </li>
                          ) : (
                            <li className="No_Item_List" key={index}></li>
                          );
                        })}
                    </ul>
                  </div>
                  <div className="Game_Result_Information">
                    <ul className="Game_Player_List">
                      {redTeam.map((el) => {
                        if (el === "FiddleSticks") {
                          return (
                            <li key={el}>
                              <GameInfoImage
                                width={20}
                                src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Fiddlesticks.png`}
                              />
                            </li>
                          );
                        }
                        return (
                          <li key={el}>
                            <GameInfoImage
                              width={20}
                              src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${el}.png`}
                            />
                          </li>
                        );
                      })}
                    </ul>
                    <ul className="Game_Player_List2">
                      {blueTeam.map((el) => {
                        if (el === "FiddleSticks") {
                          return (
                            <li key={el}>
                              <GameInfoImage
                                width={20}
                                src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Fiddlesticks.png`}
                              />
                            </li>
                          );
                        }
                        return (
                          <li key={el}>
                            <GameInfoImage
                              width={20}
                              src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${el}.png`}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </RecordContents>
              </ListContainer>
            );
          }

          if (
            tab === "Free_Rank_Record" &&
            gameType(getUserMatchData, index) === "자유랭크"
          ) {
            return (
              <ListContainer key={index}>
                <RecordContents backgroundColor={el.win}>
                  <div className="Record_Information">
                    <StyleSpan fontsize={"12px"}>
                      {gameType(getUserMatchData, index)}
                    </StyleSpan>
                    <StyleSpan fontsize={"10px"}>
                      {month_Day(el.gameCreation)}
                    </StyleSpan>
                    <StyleSpan
                      fontsize="22px"
                      changeColor={el.win ? "#7DE5ED" : "#850E35"}
                      fontweight="bold"
                      margin="3px"
                    >
                      {el.win ? "Win" : "Lose"}
                    </StyleSpan>
                    <StyleSpan fontsize="10px">
                      {minute_Second(el.gameDuration)}
                    </StyleSpan>
                  </div>
                  <div className="Record_Detail">
                    <div className="Record_My_Champ">
                      <div className="My_Champ_Img">
                        <GameInfoImage
                          radius={"10px"}
                          width={55}
                          src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${el.championName}.png`}
                          marginRgt="5px"
                        />
                      </div>
                      <div className="Rune_Spell_Info">
                        <div className="Runes_Content">
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={getSpell[index][1]}
                            marginRgt="5px"
                          />
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={getSpell[index][0]}
                          />
                        </div>
                        <div className="Spells_Content">
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={`https://ddragon.canisback.com/img/${
                              runesData[0][runes[0]].icon
                            }`}
                            backgroundColor="black"
                            marginRgt="5px"
                          />
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={`https://ddragon.canisback.com/img/${
                              runesData[0][runes[1]].icon
                            }`}
                            backgroundColor="black"
                          />
                        </div>
                      </div>
                      <div className="KDA_InfoContainer">
                        <StyleSpan fontsize="16px">{kdaScore}</StyleSpan>
                        <StyleSpan fontsize="12px">
                          CS:{el.totalMinionsKilled}개
                        </StyleSpan>
                      </div>
                    </div>
                    <ul className="Record_Item_List">
                      {el &&
                        el.itemSlot.map((el, index) => {
                          return el !== 0 ? (
                            <li key={index}>
                              <GameInfoImage
                                radius={"5px"}
                                width={25}
                                marginRgt="2.5px"
                                key={index}
                                src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/${el}.png`}
                              ></GameInfoImage>
                            </li>
                          ) : (
                            <li className="No_Item_List" key={index}></li>
                          );
                        })}
                    </ul>
                  </div>
                  <div className="Game_Result_Information">
                    <ul className="Game_Player_List">
                      {redTeam.map((el) => {
                        if (el === "FiddleSticks") {
                          return (
                            <li key={el}>
                              <GameInfoImage
                                width={20}
                                src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Fiddlesticks.png`}
                              />
                            </li>
                          );
                        }
                        return (
                          <li key={el}>
                            <GameInfoImage
                              width={20}
                              src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${el}.png`}
                            />
                          </li>
                        );
                      })}
                    </ul>
                    <ul className="Game_Player_List2">
                      {blueTeam.map((el) => {
                        if (el === "FiddleSticks") {
                          return (
                            <li key={el}>
                              <GameInfoImage
                                width={20}
                                src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Fiddlesticks.png`}
                              />
                            </li>
                          );
                        }
                        return (
                          <li key={el}>
                            <GameInfoImage
                              width={20}
                              src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${el}.png`}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </RecordContents>
              </ListContainer>
            );
          }

          if (
            tab === "Normal_Game_Record" &&
            (gameType(getUserMatchData, index) === "일반게임" ||
              gameType(getUserMatchData, index) === "무작위 총력전")
          ) {
            return (
              <ListContainer key={index}>
                <RecordContents backgroundColor={el.win}>
                  <div className="Record_Information">
                    <StyleSpan fontsize={"12px"}>
                      {gameType(getUserMatchData, index)}
                    </StyleSpan>
                    <StyleSpan fontsize={"10px"}>
                      {month_Day(el.gameCreation)}
                    </StyleSpan>
                    <StyleSpan
                      fontsize="22px"
                      changeColor={el.win ? "#7DE5ED" : "#850E35"}
                      fontweight="bold"
                      margin="3px"
                    >
                      {el.win ? "Win" : "Lose"}
                    </StyleSpan>
                    <StyleSpan fontsize="10px">
                      {minute_Second(el.gameDuration)}
                    </StyleSpan>
                  </div>
                  <div className="Record_Detail">
                    <div className="Record_My_Champ">
                      <div className="My_Champ_Img">
                        <GameInfoImage
                          radius={"10px"}
                          width={55}
                          src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${el.championName}.png`}
                          marginRgt="5px"
                        />
                      </div>
                      <div className="Rune_Spell_Info">
                        <div className="Runes_Content">
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={getSpell[index][1]}
                            marginRgt="5px"
                          />
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={getSpell[index][0]}
                          />
                        </div>
                        <div className="Spells_Content">
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={`https://ddragon.canisback.com/img/${
                              runesData[0][runes[0]].icon
                            }`}
                            backgroundColor="black"
                            marginRgt="5px"
                          />
                          <GameInfoImage
                            radius={"5px"}
                            width={25}
                            src={`https://ddragon.canisback.com/img/${
                              runesData[0][runes[1]].icon
                            }`}
                            backgroundColor="black"
                          />
                        </div>
                      </div>
                      <div className="KDA_InfoContainer">
                        <StyleSpan fontsize="16px">{kdaScore}</StyleSpan>
                        <StyleSpan fontsize="12px">
                          CS:{el.totalMinionsKilled}개
                        </StyleSpan>
                      </div>
                    </div>
                    <ul className="Record_Item_List">
                      {el &&
                        el.itemSlot.map((el, index) => {
                          return el !== 0 ? (
                            <li key={index}>
                              <GameInfoImage
                                radius={"5px"}
                                width={25}
                                marginRgt="2.5px"
                                key={index}
                                src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/${el}.png`}
                              ></GameInfoImage>
                            </li>
                          ) : (
                            <li className="No_Item_List" key={index}></li>
                          );
                        })}
                    </ul>
                  </div>
                  <div className="Game_Result_Information">
                    <ul className="Game_Player_List">
                      {redTeam.map((el) => {
                        if (el === "FiddleSticks") {
                          return (
                            <li key={el}>
                              <GameInfoImage
                                width={20}
                                src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Fiddlesticks.png`}
                              />
                            </li>
                          );
                        }
                        return (
                          <li key={el}>
                            <GameInfoImage
                              width={20}
                              src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${el}.png`}
                            />
                          </li>
                        );
                      })}
                    </ul>
                    <ul className="Game_Player_List2">
                      {blueTeam.map((el) => {
                        if (el === "FiddleSticks") {
                          return (
                            <li key={el}>
                              <GameInfoImage
                                width={20}
                                src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Fiddlesticks.png`}
                              />
                            </li>
                          );
                        }
                        return (
                          <li key={el}>
                            <GameInfoImage
                              width={20}
                              src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${el}.png`}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </RecordContents>
              </ListContainer>
            );
          }
        })}

      {getUserMatchData &&
        (getUserMatchData.length === 0 ? (
          <div className="No_Games_Found">
            {" "}
            최근 게임을 플레이한 기록이 없습니다.
          </div>
        ) : null)}
      {tab === "Solo_Rank_Record" &&
      getUserMatchData.filter((match) => match.queueId === 420).length === 0 ? (
        <div className="No_Games_Found">
          최근 솔로 랭크 게임을 플레이한 기록이 없습니다.
        </div>
      ) : null}
      {tab === "Free_Rank_Record" &&
      getUserMatchData.filter((match) => match.queueId === 440).length === 0 ? (
        <div className="No_Games_Found">
          최근 자유 랭크 게임을 플레이한 기록이 없습니다.
        </div>
      ) : null}
      {tab === "Normal_Game_Record" &&
      getUserMatchData.filter(
        (match) => match.queueId === 400 || match.queueId === 430
      ).length === 0 ? (
        <div className="No_Games_Found">
          최근 일반 모드 게임을 플레이한 기록이 없습니다.
        </div>
      ) : null}
    </>
  );
}

function runeSlot(summonerData, idx) {
  const runesArr = [];
  const runeData_01 = summonerData[idx].runeId1;
  const runeData_02 = summonerData[idx].runeId2;
  let runeIdx_01 = 0;
  let runeIdx_02 = 0;

  switch (runeData_01) {
    case 8100:
      runeIdx_01 = 0;
      break;

    case 8300:
      runeIdx_01 = 1;
      break;

    case 8000:
      runeIdx_01 = 2;
      break;

    case 8400:
      runeIdx_01 = 3;
      break;

    case 8200:
      runeIdx_01 = 4;
      break;

    default:
      runeIdx_01 = 0;
  }

  switch (runeData_02) {
    case 8100:
      runeIdx_02 = 0;
      break;

    case 8300:
      runeIdx_02 = 1;
      break;

    case 8000:
      runeIdx_02 = 2;
      break;

    case 8400:
      runeIdx_02 = 3;
      break;

    case 8200:
      runeIdx_02 = 4;
      break;

    default:
      runeIdx_02 = 0;
  }

  runesArr.push(runeIdx_01, runeIdx_02);

  return runesArr;
}

function gameType(summonerData, idx) {
  if (summonerData[idx].queueId === 400 || summonerData[idx].queueId === 430) {
    return "일반게임";
  }

  if (summonerData[idx].queueId === 420) {
    return "솔로랭크";
  }

  if (summonerData[idx].queueId === 440) {
    return "자유랭크";
  }

  if (summonerData[idx].queueId === 450) {
    return "무작위 총력전";
  }
}
