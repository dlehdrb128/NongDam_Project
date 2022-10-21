import styled from "styled-components";
import Countdown from "./Countdown";

//탑 비주얼 컨테이너(이미지/사이즈/위치(센터링),백그라운드,z-index조정)
const FivedaysmakretTopvisual = styled.div`
  width: inherit;
  height: 584px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("http://localhost:8080/market/FivedaysMarketTopvisual.png") no-repeat center;
  background-size: cover;
  position: relative;
  z-index: 3;
  //탑 비주얼 타이틀(컬러/폰트/위치조정)
  & > h1 {
    font-size: ${({ theme }) => theme.fontSize_60};
    font-family: YANGJIN;
    color: ${({ theme }) => theme.realWhite};
    margin-bottom: 50px;
    & > span {
      color: ${({ theme }) => theme.orange};
      font-size: ${({ theme }) => theme.fontSize_60};
    }
  }
  //탑 비주얼 카운트다운(컬러/폰트 조정)
  & > p {
    font-size: ${({ theme }) => theme.fontSize_45};
    font-family: YANGJIN;
    color: ${({ theme }) => theme.realWhite};
  }
`;

const FivedaysMakretTopvisual = () => {
  return (
    // 비주얼 컨테이너
    <FivedaysmakretTopvisual>
      {/* 타이틀 */}
      <h1>
        오늘은 <span>충청,전라</span> 에서 왓슈~
      </h1>
      {/* 카운트다운 */}
      <Countdown></Countdown>
    </FivedaysmakretTopvisual>
  );
};
//end

export default FivedaysMakretTopvisual;
