import '../../../../../App/App.css';
import styled from 'styled-components';
import Theme from '../../../../../theme/theme';
import FivedaysMarektsec1con from './FivedaysMarketsec1con';

//color,font Asset
const { fontSize_60, fontSize_20, lightblack, orange } = Theme;

const Section1 = styled.section`
  //top billboard title
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    & > div:nth-child(1) {
      width: 603px;
      height: 311px;
      background: url('/img/Fdays_sec1_titlebillboard.png') no-repeat center;
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 56px;
      & > h1 {
        font-size: ${fontSize_60};
        font-family: YANGJIN;
        color: ${orange};
      }
      & > span {
        font-size: ${fontSize_20};
        color: ${lightblack};
        font-family: SCD-4;
      }
    }
    //decorative roof
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > div:nth-child(1) {
        width: 1920px;
        height: 229px;
        background: url('/img/Fdays_sec1_roof.png') no-repeat center;
        background-size: cover;
        position: relative;
        z-index: 1;
      }
    }
  }
`;

const FivedaysMakretsec1 = () => {
  return (
    <Section1>
      <div>
        <div>
          <h1>오늘의시장</h1>
          <span>우리나라의 다양한 시장을 소개해드리겠구먼유</span>
        </div>
        <div>
          <div></div>
          {/* section1_con */}
          <FivedaysMarektsec1con />
        </div>
      </div>
    </Section1>
  );
  // section1 end
};

export default FivedaysMakretsec1;
