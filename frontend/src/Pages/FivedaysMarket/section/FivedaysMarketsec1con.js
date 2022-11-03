import styled from "styled-components";
import FivedaysMaps from "../../../common/Map";

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

const FivedaysMarektsec1con = ({ data }) => {
  const img = `http://localhost:8080/market/market_${data[1][0].market_key}.png`;
  return (
    <Section1con>
      {/* 시장이미지 */}
      <img src={img} alt="sec1_img" />
      {/* 텍스트 콘테이너 */}
      <div>
        <div>
          {/* 타이틀 */}
          <h1>{data && data[1][0].market_name}</h1>
          {/* 내용 */}
          <p>{data && data[1][0].market_desc}</p>
        </div>
        <FivedaysMaps data={data && data[1][0]}></FivedaysMaps>
      </div>
    </Section1con>
  );
};
//end

export default FivedaysMarektsec1con;
