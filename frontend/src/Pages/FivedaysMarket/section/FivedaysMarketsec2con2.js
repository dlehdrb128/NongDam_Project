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

const FivedaysMarketsec2con2 = ({ data }) => {
  return (
    <Section2con>
      {data[0].map((value, index) => {
        if (value.product_local[0] === '전') {
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
