import '../../../../../App/App.css';
import styled from 'styled-components';
import Theme from '../../../../../theme/theme';
import FivedaysMarketsec2con from './FivedaysMarketsec2con';
import FivedaysMarketsec2con2 from './FivedaysMarketsec2con2';

//color,font Asset
const { fontSize_30, orange, realWhite, green } = Theme;

const Section2 = styled.section`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  //common
  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1063px;
    height: 844px;
    border: 3px solid ${orange};
    border-radius: 30px;
    padding-top: 35px;
    position: relative;
    //decoTItle
    & > div:nth-child(1) {
      width: 186px;
      height: 123px;
      background: url('/img/Fday_sec2_decotitle.png') no-repeat center;
      background-size: cover;
      position: absolute;
      left: -37px;
      top: -23px;
      color: ${realWhite};
      font-size: ${fontSize_30};
      font-family: YANGJIN;
      padding: 63px 66px 0;
    }
    //local name
    & > h2 {
      font-size: ${fontSize_30};
      color: ${orange};
      font-family: YANGJIN;
      letter-spacing: 1.5px;
      margin-bottom: 65px;
    }
  }
  & > div:nth-child(1) {
    margin-bottom: 180px;
  }
  & > div:nth-child(2) {
    border-color: ${green};
    & > h2 {
      color: ${green};
    }
  }
`;

const FivedaysMarketsec2 = () => {
  return (
    <Section2>
      <div>
        {/* section2_con */}
        <div>충청</div>
        <h2>반가워요 충청도에유!</h2>
        <FivedaysMarketsec2con />
      </div>
      <div>
        {/* section2_con */}
        <div>전라</div>
        <h2>아따 전라도 특산물 구경해 보랑께~</h2>
        <FivedaysMarketsec2con2 />
      </div>
    </Section2>
  );
  // section2 end
};

export default FivedaysMarketsec2;
