import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 50%;
`;

const Guide__Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;

  @media only screen and (min-width: 768px) {
    width: 15vw;
    height: 12.5vh;
    border: solid black 1px;
    margin-bottom: 10px;
  }

  table {
    width: 100%;
    height: 100%;
    font-size: 1.35rem;
    text-align: center;
    table-layout: fixed;

    th {
      font-size: 1.6rem;
    }

    th:nth-child(1) {
      width: 30%;
    }

    div {
      position: relative;
      display: flex;
      margin: 5px;

      img {
        width: 50%;
      }

      span {
        position: absolute;
        height: 3%;
        top: 50%;
        right: 5%;
        color: white;
      }
    }

    .Green__Flag {
      color: green;
    }

    .Red__Flag {
      color: red;
    }
  }
`;

export default function MoreSuggestions() {
  const championImagesURL =
    "http://ddragon.leagueoflegends.com/cdn/12.21.1/img";

  return (
    <Wrapper>
      <Guide__Container>
        <table>
          <thead>
            <tr>
              <th>스펠</th>
              <th>승률</th>
              <th>선택률</th>
              <th>카운트 수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <img
                    src={`${championImagesURL}/spell/SummonerFlash.png`}
                  ></img>
                  <img src={`${championImagesURL}/spell/SummonerDot.png`}></img>
                </div>
              </td>
              <td>49.15</td>
              <td>66.60</td>
              <td>14,109</td>
            </tr>
            <tr>
              <td>
                <div>
                  <img
                    src={`${championImagesURL}/spell/SummonerFlash.png`}
                  ></img>
                  <img
                    src={`${championImagesURL}/spell/SummonerExhaust.png`}
                  ></img>
                </div>
              </td>
              <td>48.10</td>
              <td>27.27</td>
              <td>5,777</td>
            </tr>
            <tr>
              <td>
                <div>
                  <img
                    src={`${championImagesURL}/spell/SummonerFlash.png`}
                  ></img>
                  <img
                    src={`${championImagesURL}/spell/SummonerHeal.png`}
                  ></img>
                </div>
              </td>
              <td className="Green__Flag">52.08</td>
              <td>6.01</td>
              <td>1,273</td>
            </tr>
          </tbody>
        </table>
      </Guide__Container>
      <Guide__Container>
        <table>
          <thead>
            <tr>
              <th>스타트 아이템</th>
              <th>승률</th>
              <th>선택률</th>
              <th>카운트 수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <img src={`${championImagesURL}/item/3850.png`}></img>
                  <img src={`${championImagesURL}/item/2003.png`}></img>
                  <span>2x</span>
                </div>
              </td>
              <td>49.57</td>
              <td>89.97</td>
              <td>19,061</td>
            </tr>
            <tr>
              <td>
                <div>
                  <img src={`${championImagesURL}/item/3859.png`}></img>
                  <img src={`${championImagesURL}/item/2003.png`}></img>
                  <span>2x</span>
                </div>
              </td>
              <td className="Red__Flag">45.81</td>
              <td>7.60</td>
              <td>1,611</td>
            </tr>
          </tbody>
        </table>
      </Guide__Container>
    </Wrapper>
  );
}
