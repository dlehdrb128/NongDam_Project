import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import FivedaysMarketsec2con from "./FivedaysMarketsec2con";
import FivedaysMarketsec2con2 from "./FivedaysMarketsec2con2";

// FDM 섹션 2 컨테이너(위치조정)
const Section2 = styled.section`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  //섹션2 콘텐츠 컨테이너(상품)(사이즈,위치,테두리조정)
  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1063px;
    height: 844px;
    border: 3px solid ${({ theme }) => theme.orange};
    border-radius: 30px;
    padding-top: 35px;
    position: relative;
    //섹션2 콘텐츠 장식용 타이틀 이미지(지역)(사이즈,백그라운드,위치,폰트조정)
    & > div:nth-child(1) {
      width: 186px;
      height: 123px;
      background: url("http://localhost:8080/market/Fday_sec2_decotitle.png")
        no-repeat center;
      background-size: cover;
      position: absolute;
      left: -37px;
      top: -23px;
      color: ${({ theme }) => theme.realWhite};
      font-size: ${({ theme }) => theme.fontSize_30};
      font-family: YANGJIN;
      padding: 63px 66px 0;
    }
    //장식응 타이틀 이미지 텍스트(폰트,컬러,위치조정)
    & > h2 {
      font-size: ${({ theme }) => theme.fontSize_30};
      color: ${({ theme }) => theme.orange};
      font-family: YANGJIN;
      letter-spacing: 1.5px;
      margin-bottom: 65px;
    }
  }
  //섹션2 콘텐츠 컨테이너(상품-충청)(간격조정,테두리컬러조정)
  & > div:nth-child(1) {
    margin-bottom: 180px;
  }
  //섹션2 콘텐츠 컨테이너(상품-전라)(테두리컬러 조정)
  & > div:nth-child(2) {
    border-color: ${({ theme }) => theme.green};
    //(상품-전라)장식용 타이틀 이미지 텍스트(컬러조정)
    & > h2 {
      color: ${({ theme }) => theme.green};
    }
  }
`;

const FivedaysMarketsec2 = ({ data }) => {
  const Productdata = data;
  return (
    <Section2>
      <div>
        {/* 상품(충청) */}
        {/* 장식용 타이틀 */}
        <div>충청</div>
        <h2>반가워요 충청도에유!</h2>
        {/* 충청도상품 컴포넌트 import */}
        <FivedaysMarketsec2con data={Productdata} />
      </div>
      <div>
        {/* 상품(전라) */}
        {/* 장식용 타이틀 */}
        <div>전라</div>
        <h2>아따 전라도 특산물 구경해 보랑께~</h2>
        {/* 전라도상품 컴포넌트 import */}
        <FivedaysMarketsec2con2 data={Productdata} />
      </div>
    </Section2>
  );
};
//end

export default FivedaysMarketsec2;
