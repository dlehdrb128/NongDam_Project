import '../../../../App/App.css';
import Theme from '../../../../theme/theme';
import styled from 'styled-components';

// color,font Asset
const { orange, realWhite, fontSize_60, fontSize_45 } = Theme;

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
  /* title */
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
  & > p {
    font-size: ${fontSize_45};
    font-family: YANGJIN;
    color: ${realWhite};
  }
`;

const FivedaysMakretTopvisual = () => {
  return (
    <FivedaysmakretTopvisual>
      <h1>
        오늘은 <span>충청,전라</span> 에서 왓슈~
      </h1>
      <p>다음 지역까지 00 : 00</p>
    </FivedaysmakretTopvisual>
  );
};

export default FivedaysMakretTopvisual;
