import axios from 'axios';
import { useState, useEffect } from 'react';
import FivedaysMarketitems from './FivedaysMarketItems';
import styled from 'styled-components';
//섹션2 상품 콘텐츠(충청) 컨테이너(사이즈,위치조정)
const Section2con = styled.div`
  width: 934px;
  display: grid;
  column-gap: 30px;
  row-gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 300px 300px;
  //상품 컨테이너(사이즈 조정)
`;

const FivedaysMarketsec2con = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    const Product = async () => {
      try {
        let response = await axios.get('http://localhost:8080/FIvedaysMarket');
        setData(response.data);
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
  // 객체 구조분해 할당
  return (
    <Section2con>
      {data.map((value, index) => {
        if (value.PRODUCT_AREA === '충청') {
          return (
            <FivedaysMarketitems key={index} data={value}></FivedaysMarketitems>
          );
        }
      })}
    </Section2con>
  );
};
//end

export default FivedaysMarketsec2con;
