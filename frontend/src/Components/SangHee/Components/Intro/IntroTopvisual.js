import '../../../../App/App.css';
import Theme from '../../../../theme/theme'
import styled from 'styled-components';

//color,font Asset
const { green, white, fontSize_60, fontSize_30 } = Theme

//탑 비주얼 컨테이너(이미지/사이즈/위치조정(센터링))
const Introvisual = styled.div`
  width: inherit;
  height: 584px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('/img/Intro_visualTop.png')
    no-repeat center;
  background-size: cover;
  //탑 비주얼 타이틀(컬러/폰트/위치조정)
  & > h1 {
    text-align: center;
    font-family: YANGJIN;
    color: ${white};
    font-size: ${fontSize_60};
    margin-bottom: 80px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //탑 비주얼 포인트 텍스트
    & > span {
      font-size: ${fontSize_60};
      color: ${green};
    }
    //탑 비주얼 타이틀과 부타이틀 사이의 선(위치조정,컬러,사이즈)
    &::after {
      content: '';
      position: absolute;
      background-color: ${white};
      width: 386px;
      height: 1px;
      top: 187px;
    }
  }
  //부타이틀(컬러,폰트)
  & > span:nth-child(2) {
    font-size: ${fontSize_30};
    color: ${white};
  }
`;

const IntroTopvisual = () => {
  return (
    <Introvisual>
      {/* 타이틀 */}
      <h1>
        지구에서 일어나고 있는
        <br />
        <span>농담같은 이야기</span>
      </h1>
      {/* 부타이틀 */}
      <span>한번 듣고 가유~</span>
    </Introvisual>
  );
};
//end

export default IntroTopvisual;
