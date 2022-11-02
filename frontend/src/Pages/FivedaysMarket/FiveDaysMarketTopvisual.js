import styled from "styled-components";

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
  margin-bottom: 200px;
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

const FivedaysMakretTopvisual = ({ Local, Timedata }) => {
  let locals
  switch (Local[0]) {
    case '충':
      locals = '충청도'
      break;
    case '전':
      locals = '전라도'
      break;
    case '경':
      locals = '경상도'
      break;
    case '강':
      locals = '강원도'
      break;
    default:
      locals = '해당되는 지역이 없네요.'
  }

  return (
    // 비주얼 컨테이너
    <FivedaysmakretTopvisual>
      {/* 타이틀 */}
      <h1>
        오늘은 <span>{locals}</span> 에서 왓슈~
      </h1>
      {/* 카운트다운 */}
      <p>다음지역까지 {Timedata.day}일 {Timedata.hour < 10 ? `0${Timedata.hour}` : Timedata.hour}시 {Timedata.min < 10 ? `0${Timedata.min}` : Timedata.min}분 {Timedata.sec < 10 ? `0${Timedata.sec}` : Timedata.sec}초</p>
    </FivedaysmakretTopvisual>
  );
};
//end

export default FivedaysMakretTopvisual;
