import styled from "styled-components";

const ListContainer = styled.div`
  width: 1200px;
  height: 100vh;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const RecordContents = styled.div`
  width: 1200px;
  height: 90px;
  margin-top: 10px;
  padding: 10px 18px;
  background-color: rgba(59, 130, 246, 0.5);
  border-radius: 10px;
`;

export default function RecordList(props) {
  const getChartList = (tab) => {
    if (tab === "All__Game__Record") {
      return (
        <ListContainer>
          <RecordContents>전체큐</RecordContents>
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

  return (
    <>
      {getChartList(props.tab)}
    </>
  );
}
