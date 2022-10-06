import '../../../../App/App.css';
import styled from 'styled-components';
import FivedaysMakretTopvisual from './FiveDaysMarketTopvisual';
import FivedaysMakretsec1 from './section/FivedaysMarketsec1';
import FivedaysMarketsec2 from './section/FivedaysMarketsec2';
import Remocon from '../Remocon';

// 메인 컨테이너
const Main = styled.main`
  width: inherit;
  padding-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
   //섹션 컨테이너
  & > div.sec_wrap {
    width: 1280px;
  }
`;

const FivedaysMakret = () => {
  return (
    <>
      <FivedaysMakretTopvisual />
      <Remocon />
      {/* Visual */}
      <Main>
        <FivedaysMakretsec1 />
        {/* section1 */}
        <div className='sec_wrap'>
          <FivedaysMarketsec2 />
          {/*section2 */}
        </div>
      </Main>
    </>
  );
};
//end

export default FivedaysMakret;
