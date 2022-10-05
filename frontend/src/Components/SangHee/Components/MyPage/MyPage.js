import styled from 'styled-components'
import Mypagesec1 from './section/Mypagesec1';
import Mypagesec2 from './section/Mypagesec2';

const Main = styled.main`
  width: inherit;
  padding-top: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div.sec_wrap {
    width: 1062px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Mypage = () => {
  return (
    <Main>
      <div className='sec_wrap'>
        <Mypagesec1 />
        <Mypagesec2 />
      </div>
    </Main>
  )
}

export default Mypage