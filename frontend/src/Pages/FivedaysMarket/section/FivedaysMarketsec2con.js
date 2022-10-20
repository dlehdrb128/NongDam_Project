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

const FivedaysMarketsec2con = ({ data }) => {
  console.log(data[0]);
  return (
    <Section2con>
      {data[0].map((value, index) => {
        if (value.product_local[0] === "충") {
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
