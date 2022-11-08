import styled from "styled-components";

const ListContainer = styled.div`
  width: 1200px;
  height: 100vh;
  margin-top: 10px;
  display: flex;
`;

const RecordContents = styled.div`
  width: 1200px;
  height: 90px;
  margin-top: 10px;
  padding: 10px 18px;
  background-color: rgba(59, 130, 246, 0.5);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleSpan = styled.span`
  font-size: ${(props) => props.fontsize || "12px"};
  display: block;
  margin-bottom: ${(props) => props.margin};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontweight};
`;

const ChampInforImage = styled.img`
  width: ${(props) => props.width};
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  margin-right: ${(props) => props.marginRgt};
`;

export default function RecordList(props) {
  const getChartList = (tab) => {
    if (tab === "All__Game__Record") {
      return (
        <ListContainer>
          <RecordContents>
            <div className="Record__Information">
              <StyleSpan>솔로랭크</StyleSpan>
              <StyleSpan margin="12px">11/08</StyleSpan>
              <StyleSpan
                fontsize="15px"
                color="rgba(49, 141, 239, 0.676)"
                fontweight="bold"
                margin="3px"
              >
                Win
              </StyleSpan>
              <StyleSpan>17:27</StyleSpan>
            </div>
            <div className="Record__My__Champ">
              <div className="My__Champ__Img">
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
            </div>
            <div className="Game__Result__Information">하이</div>
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

  return <>{getChartList(props.tab)}</>;
}
