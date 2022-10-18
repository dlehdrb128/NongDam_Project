import styled from "styled-components";
import Remocon from "../../LayOut/Remocon";
import Mypagesec1 from "./section/Mypagesec1";
import Mypagesec2 from "./section/Mypagesec2";
import { useState, useEffect } from 'react';
import axios from "axios";

// 메인 컨테이너
const Main = styled.main`
  width: inherit;
  padding-top: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  //섹션 컨테이너
  & > div.sec_wrap {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const Mypage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/orders');
        // console.log(response);
        setData(response);
      }
      catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    getData()
  }, [])
  if (loading) {
    return <h1>준비중입니다.</h1>;
  }
  if (data === undefined) {
    return null;
  }
  return (
    <Main>
      <div className="sec_wrap">
        <Mypagesec1 />
        {/* section1/왼쪽메뉴 */}
        <Mypagesec2 data={data} />
        <Remocon></Remocon>
        {/* section2/오른쪽 상세내역 */}
      </div>
    </Main>
  );
};

export default Mypage;
