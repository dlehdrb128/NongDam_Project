import '../../../App/App.css'
import styled from 'styled-components'
import IntroTopvisual from './IntroTopvisual';
import Introsec1 from './section/Introsec1';
import Introsec2 from './section/Introsec2';
import Introsec3 from './section/Introsec3';
import Introsec4 from './section/Introsec4';

const Main = styled.main`
  width: inherit;
  padding :200px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  &>div.sec_wrap{
    width:1280px;
  }
`

const Intro = () => {
  return (
    <>
      <IntroTopvisual />
      <Main>
        <div className='sec_wrap'>
          <Introsec1 />
          <Introsec2 />
          <Introsec3 />
          <Introsec4 />
        </div>
      </Main>
    </>
  );
};

export default Intro;
