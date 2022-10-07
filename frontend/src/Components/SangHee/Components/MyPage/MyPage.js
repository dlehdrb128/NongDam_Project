import styled from 'styled-components';
import Mypagesec1 from './section/Mypagesec1';
import Mypagesec2 from './section/Mypagesec2';

// 메인 컨테이너
const Main = styled.main`
  width: inherit;
  padding-top: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
     //섹션 컨테이너
  & > div.sec_wrap {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const Mypage = () => {
  return (
    <Main>
      <div className='sec_wrap'>
        <Mypagesec1 />
        {/* section1/왼쪽메뉴 */}
        <Mypagesec2 />
        {/* section2/오른쪽 상세내역 */}
      </div>
    </Main>
  );
};

export default Mypage;
