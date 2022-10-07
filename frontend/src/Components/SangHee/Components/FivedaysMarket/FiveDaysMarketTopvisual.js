import '../../../../App/App.css';
import Theme from '../../../../theme/theme';
import styled from 'styled-components';

// color,font Asset
const { orange, realWhite, fontSize_60, fontSize_45 } = Theme;


//탑 비주얼 컨테이너(이미지/사이즈/위치(센터링),백그라운드,z-index조정)
const FivedaysmakretTopvisual = styled.div`
  width: inherit;
  height: 584px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('/img/FivedaysMarketTopvisual.png') no-repeat center;
  background-size: cover;
  position: relative;
  z-index: 3;
  //탑 비주얼 타이틀(컬러/폰트/위치조정)
  & > h1 {
    font-size: ${fontSize_60};
    font-family: YANGJIN;
    color: ${realWhite};
    margin-bottom: 50px;
    & > span {
      color: ${orange};
      font-size: ${fontSize_60};
    }
  }
  //탑 비주얼 카운트다운(컬러/폰트 조정)
  & > p {
    font-size: ${fontSize_45};
    font-family: YANGJIN;
    color: ${realWhite};
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
      <p>다음 지역까지 00 : 00</p>
    </FivedaysmakretTopvisual>
  );
};
//end

export default FivedaysMakretTopvisual;
