import '../../../../App/App.css';
import Theme from '../../../../theme/theme'
import styled from 'styled-components';

//color,font Asset
const { green, white, fontSize_60, fontSize_30 } = Theme

//Topvisual
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
  //title
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
    & > span {
      font-size: ${fontSize_60};
      color: ${green};
    }
    &::after {
      content: '';
      position: absolute;
      background-color: ${white};
      width: 386px;
      height: 1px;
      top: 187px;
    }
  }
  //text
  & > span:nth-child(2) {
    font-size: ${fontSize_30};
    color: ${white};
  }
`;

const IntroTopvisual = () => {
  return (
    <Introvisual>
      <h1>
        지구에서 일어나고 있는
        <br />
        <span>농담같은 이야기</span>
      </h1>
      <span>한번 듣고 가유~</span>
    </Introvisual>
  );
};

export default IntroTopvisual;