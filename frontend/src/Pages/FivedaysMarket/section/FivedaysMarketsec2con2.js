import axios from 'axios';
import { useState, useEffect } from 'react';
import FivedaysMarketitems from './FivedaysMarketItems';
import styled from 'styled-components';

// color,font Asset

//섹션2 상품 콘텐츠(전라) 컨테이너(사이즈,위치조정)
const Section2con = styled.div`
  //common constructor
  width: 934px;
  display: grid;
  column-gap: 30px;
  row-gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 300px 300px;
`;

const FivedaysMarketsec2con2 = () => {
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
    return <h1>상품이 존재하지 않습니다.</h1>;
  }
  return (
    <Section2con>
      {data.map((value, index) => {
        if (value.PRODUCT_AREA === '전라') {
          return (
            <FivedaysMarketitems key={index} data={value}></FivedaysMarketitems>
          );
        }
      })}
    </Section2con>
  );
};
//end

export default FivedaysMarketsec2con2;
