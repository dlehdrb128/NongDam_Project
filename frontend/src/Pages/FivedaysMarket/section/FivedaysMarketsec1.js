import styled from "styled-components";
import FivedaysMarektsec1con from "./FivedaysMarketsec1con";

// FDM 섹션 1 컨테이너
const Section1 = styled.section`
  //섹션1 콘텐츠 컨테이너
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    //상단 장식 빌보드(사이즈,백그라운드,위치조정)
    & > div:nth-child(1) {
      width: 603px;
      height: 311px;
      background: url("http://localhost:8080/market/Fdays_sec1_titlebillboard.png") no-repeat center;
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 56px;
      //상단 장식 빌보드 타이틀(폰트,컬러조정)
      & > h1 {
        font-size: ${({ theme }) => theme.fontSize_60};
        font-family: YANGJIN;
        color: ${({ theme }) => theme.orange};
      }
      //상단 장식 빌보드 텍스트(폰트,컬러조정)
      & > span {
        font-size: ${({ theme }) => theme.fontSize_20};
        color: ${({ theme }) => theme.lightblack};
        font-family: SCD-4;
      }
    }
    //상단 지붕장식(사이즈,위치,z-index조정)
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > div:nth-child(1) {
        width: 1920px;
        height: 229px;
        background: url("http://localhost:8080/market/Fdays_sec1_roof.png") no-repeat center;
        background-size: cover;
        position: relative;
        z-index: 1;
      }
    }
  }
`;

const FivedaysMakretsec1 = ({ data }) => {
  return (
    <Section1>
      {/* 섹션1 콘텐츠 컨테이너 */}
      <div>
        {/* 상단 장식 빌보드 */}
        <div>
          {/* 빌보드 타이틀 */}
          <h1>오늘의시장</h1>
          {/* 빌보드 텓스트 */}
          <span>우리나라의 다양한 시장을 소개해드리겠구먼유</span>
        </div>
        {/* 상단 지붕작식 */}
        <div>
          <div></div>
          {/* 섹션1 콘텐츠 컴포넌트 Import */}
          <FivedaysMarektsec1con data={data} />
        </div>
      </div>
    </Section1>
  );
};
// end

export default FivedaysMakretsec1;
