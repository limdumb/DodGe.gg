import styled from "styled-components";

const Wrapper = styled.div`
  height: 500px;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Guide_Container = styled.div`
  height: 250px;
  padding: 20px 0;

  table {
    width: 100%;
    height: 200px;
    font-size: 16px;
    text-align: center;
    table-layout: fixed;

    th {
      font-size: 18px;
    }

    th:nth-child(1) {
      width: 30%;
    }

    .Image_Container {
      position: relative;
      display: flex;
      justify-content: center;

      img {
        width: 40%;
        margin: 1px;
      }

      span {
        position: absolute;
        font-size: 16px;
        height: 20px;
        width: 20px;
        top: 55%;
        right: 10%;
        color: white;
        background-color: rgba(0, 0, 0, 0.25);
      }
    }

    .Green_Flag {
      color: green;
    }

    .Red_Flag {
      color: red;
    }
  }

  @media only screen and (min-width: 768px) {
    flex: 1;
    height: 350px;
    padding: 25px;

    table {
      height: 300px;
      font-size: 18px;
      th {
        font-size: 25px;
      }

      .Image_Container {
        img {
          width: 32.5%;
          margin: 2px;
        }

        span {
          font-size: 16px;
          height: 20px;
          width: 20px;
          top: 47.5%;
          right: 5%;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 300px;
    padding: 0 5px;

    &:first-child {
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    }

    table {
      padding: 10px;

      tr {
        height: 75px;
      }

      th {
        font-size: 18px;
      }

      .Image_Container {
        img {
          width: 47.5%;
          margin: 0;
        }
      }
    }
  }
`;

export default function MoreSuggestions() {
  const ImagesURL = "http://ddragon.leagueoflegends.com/cdn/12.21.1/img";

  return (
    <Wrapper>
      <Guide_Container>
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
                <div className="Image_Container">
                  <img src={`${ImagesURL}/spell/SummonerFlash.png`}></img>
                  <img src={`${ImagesURL}/spell/SummonerDot.png`}></img>
                </div>
              </td>
              <td>49.15</td>
              <td>66.60</td>
              <td>14,109</td>
            </tr>
            <tr>
              <td>
                <div className="Image_Container">
                  <img src={`${ImagesURL}/spell/SummonerFlash.png`}></img>
                  <img src={`${ImagesURL}/spell/SummonerExhaust.png`}></img>
                </div>
              </td>
              <td>48.10</td>
              <td>27.27</td>
              <td>5,777</td>
            </tr>
            <tr>
              <td>
                <div className="Image_Container">
                  <img src={`${ImagesURL}/spell/SummonerFlash.png`}></img>
                  <img src={`${ImagesURL}/spell/SummonerHeal.png`}></img>
                </div>
              </td>
              <td className="Green_Flag">52.08</td>
              <td>6.01</td>
              <td>1,273</td>
            </tr>
          </tbody>
        </table>
      </Guide_Container>
      <Guide_Container>
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
                <div className="Image_Container">
                  <img src={`${ImagesURL}/item/3850.png`}></img>
                  <img src={`${ImagesURL}/item/2003.png`}></img>
                  <span>2x</span>
                </div>
              </td>
              <td>49.57</td>
              <td>89.97</td>
              <td>19,061</td>
            </tr>
            <tr>
              <td>
                <div className="Image_Container">
                  <img src={`${ImagesURL}/item/3859.png`}></img>
                  <img src={`${ImagesURL}/item/2003.png`}></img>
                  <span>2x</span>
                </div>
              </td>
              <td className="Red_Flag">45.81</td>
              <td>7.60</td>
              <td>1,611</td>
            </tr>
          </tbody>
        </table>
      </Guide_Container>
    </Wrapper>
  );
}
