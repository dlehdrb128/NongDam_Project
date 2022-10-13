import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// 섹션1 콘텐츠 컨테이너(너비,위치,그림자 조정)
const Section1con = styled.div`
  //constructor
  width: 1450px;
  position: relative;
  top: -190px;
  padding: 300px 80px 89px;
  display: flex;
  justify-content: space-between;
  border: 12px solid ${({ theme }) => theme.green};
  border-radius: 30px;
  box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.1);
  //섹션1 콘텐츠 이미지(시장)(사이즈 조정)
  & > img {
    width: 625px;
    height: 865px;
  }
  //섹션1 콘텐츠 텍스트 컨테이너(사이즈,위치조정)
  & > div:nth-child(2) {
    width: 1087px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    //섹션1 텍스트 컨테이너(위치조정)
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      //섹션1 텍스트 컨테이너 타이틀(폰트,컬러,글정렬,위치조정)
      & > h1 {
        font-size: ${({ theme }) => theme.fontSize_60};
        font-family: YANGJIN;
        color: ${({ theme }) => theme.green};
        text-align: right;
        margin-bottom: 55px;
      }
      //섹션1 텍스트 컨테이너 내용(사이즈,폰트,컬러,글정렬,위치조정)
      & > p {
        width: 427px;
        font-size: ${({ theme }) => theme.fontSize_20};
        color: ${({ theme }) => theme.lightblack};
        font-family: SCD-4;
        text-align: right;
        word-break: keep-all;
        white-space: pre-wrap;
      }
    }
    //섹션1 텍스트 지도이미지(사이즈조정)
    & > img {
      width: 496px;
      height: 333px;
    }
  }
`;

//dummy Text

const FivedaysMarektsec1con = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    const Product = async () => {
      try {
        let response = await axios.get('http://localhost:8080/FIvedaysMarket');
        setData(response.data[1])
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
    <Section1con>
      {/* 시장이미지 */}
      <img src={data[0].marketimg} alt="sec1_img" />
      {/* 텍스트 콘테이너 */}
      <div>
        <div>
          {/* 타이틀 */}
          <h1>{data[0].marketname}</h1>
          {/* 내용 */}
          <p>{data[0].marketdesc}</p>
        </div>
        {/* <div></div> MAP API용 div*/}
        {/* 지도이미지 */}
        <img src="/img/Fday_sec1_Map_1.png" alt="Map"></img>
      </div>
    </Section1con>
  );
};
//end

export default FivedaysMarektsec1con;
