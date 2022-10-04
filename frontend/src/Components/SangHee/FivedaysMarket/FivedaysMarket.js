import '../../../App/App.css';
import styled from 'styled-components';
import FivedaysMakretTopvisual from './FiveDaysMarketTopvisual';
import FivedaysMakretsec1 from './section/FivedaysMarketsec1';
import FivedaysMarketsec2 from './section/FivedaysMarketsec2';

const Main = styled.main`
  width: inherit;
  padding-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > div.sec_wrap {
    width: 1280px;
  }
`;

const FivedaysMakret = () => {
  return (
    <>
      <FivedaysMakretTopvisual />
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

export default FivedaysMakret;
