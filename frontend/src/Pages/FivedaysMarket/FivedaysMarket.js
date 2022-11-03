import styled from "styled-components";
import FivedaysMakretTopvisual from "./FiveDaysMarketTopvisual";
import FivedaysMakretsec1 from "./section/FivedaysMarketsec1";
import FivedaysMarketsec2 from "./section/FivedaysMarketsec2";
import Remocon from "../../LayOut/Remocon";
import useInterval from "../../common/UseInterval";
import { useState, useEffect } from "react";
import axios from "axios";

// 메인 컨테이너
const Main = styled.main`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //섹션 컨테이너
  & > div.sec_wrap {
    width: 1280px;
  }
`;

const FivedaysMakret = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [Timedata, setTimeData] = useState({
    day: null,
    hour: null,
    min: null,
    sec: null,
  });

  let Timer = () => {
    let current = new Date();
    let next = (current.getTime()) + (1000 * 60 * 60 * 24 * 5);
    let nextGet = new Date(next);
    let RealCurrent = current.getTime();
    let Realnext = new Date(`2022-${nextGet.getMonth() + 1}-${nextGet.getDate()}`)
    let expected = Realnext - RealCurrent
    let day = Math.floor(expected / (1000 * 60 * 60 * 24));
    let hour = Math.floor((expected / (1000 * 60 * 60)) % 24);
    let min = Math.floor((expected / (1000 * 60)) % 60);
    let sec = Math.floor(((expected / 1000) % 60) % 60);
    setTimeData({
      day: day,
      hour: hour,
      min: min,
      sec: sec,
    });
  }
  let count = 1;

  useInterval(() => {
    Timer()
    if (Timedata.day <= 0) {
      if (Timedata.hour <= 0) {
        if (Timedata.min <= 0) {
          if (Timedata.sec <= 0) {
            count = count + 1
            Timer()
          }
        }
      }
    }
  }, 1000);

  useEffect(() => {
    setLoading(true);
    const Product = async () => {
      try {
        let response = await axios.get(`http://localhost:8080/market/${count}`, { withCredentials: true });
        console.log(response.data);
        setData(response.data)
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    Product();
  }, []);

  if (loading) {
    return <h1>준비중입니다.</h1>;
  }
  if (data === undefined) {
    return null;
  }
  if (Timedata.day === null) {
    return <h1>로딩중</h1>;
  }

  return (
    <>
      {/* Visual */}
      <Main>
        <FivedaysMakretTopvisual Local={data[1][0].market_local} Timedata={Timedata} />
        <Remocon />
        <FivedaysMakretsec1 data={data} />
        {/* section1 */}
        <div className="sec_wrap">
          <FivedaysMarketsec2 productData={data[0].filter((value) => {
            if (value.product_local[0] === data[1][0].market_local[0]) {
              return value
            }
          })} data={data} />
          {/*section2 */}
        </div>
      </Main>
    </>
  );
};
//end

export default FivedaysMakret;
