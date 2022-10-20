import styled from "styled-components";
import FivedaysMakretTopvisual from "./FiveDaysMarketTopvisual";
import FivedaysMakretsec1 from "./section/FivedaysMarketsec1";
import FivedaysMarketsec2 from "./section/FivedaysMarketsec2";
import Remocon from "../../LayOut/Remocon";
import { useState, useEffect } from "react";
import axios from "axios";

// 메인 컨테이너
const Main = styled.main`
  width: inherit;
  padding-top: 200px;
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

  useEffect(() => {
    setLoading(true);
    const Product = async () => {
      try {
        let response = await axios.get('http://localhost:8080/market/', { withCredentials: true });
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

  return (
    <>
      <FivedaysMakretTopvisual />
      <Remocon />
      {/* Visual */}
      <Main>
        <FivedaysMakretsec1 data={data} />
        {/* section1 */}
        <div className="sec_wrap">
          <FivedaysMarketsec2 data={data} />
          {/*section2 */}
        </div>
      </Main>
    </>
  );
};
//end

export default FivedaysMakret;
