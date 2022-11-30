import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 50%;

  @media only screen and (min-width: 768px) {
    height: 45%;
  }
`;

const Guide__Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;

  table {
    width: 100%;
    height: 100%;
    font-size: 1.35rem;
    text-align: center;
    table-layout: fixed;

    th {
      font-size: 1.5rem;
    }

    th:nth-child(1) {
      width: 30%;
    }

    div.Image__Container {
      position: relative;
      display: flex;
      justify-content: center;

      img {
        width: 40%;
      }

      span {
        position: absolute;
        font-size: 1.05rem;
        height: 40%;
        width: 15%;
        top: 60%;
        right: 12.5%;
        color: white;
        background-color: rgba(0, 0, 0, 0.25);
      }
    }

    .Green__Flag {
      color: green;
    }

    .Red__Flag {
      color: red;
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 1px;
    border: solid rgba(0, 0, 0, 0.25) 1px;

    table {
      font-size: 0.85rem;

      th {
        font-size: 1rem;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    div.Image__Container {
      span {
        top: 40%;
        right: 10%;
      }
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
                <div className="Image__Container">
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
                <div className="Image__Container">
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
                <div className="Image__Container">
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
                <div className="Image__Container">
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
                <div className="Image__Container">
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
