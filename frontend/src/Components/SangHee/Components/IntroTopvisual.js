import '../../../App/App';
import { Common } from './Common';
import styled from 'styled-components';

const { Maincol, placeholder, text, red, orange, bar, gray, white, fontSize_60, fontSize_50, fontSize_30, fontSize_20 } = Common


const Introvisual = styled.div`
  width: inherit;
  height: 58.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("https://lh3.googleusercontent.com/drive-viewer/AJc5JmQWuRb5tiuRhF_ExgOHafqIEfoROyg99aR8hdFbqEmBnxsSGdUxoC3iiMG5EMKbrT07ufmHlJI=w1915-h968") no-repeat center;
  background-size: cover;
  &>h1{
    text-align: center;
    font-family: YANGJIN;
    color: ${white};
    font-size: ${fontSize_60};
    letter-spacing: 0.28rem;
    margin-bottom: 8rem;
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &>span{
      font-size: ${fontSize_60};
      color:${Maincol}
    }
    &::after{
      content: "";
      position: absolute;
      background-color: ${white};
      width: 38.6rem;
      height: 1px;
      top:18.7rem
    }
  }
  &>span:nth-child(2){
    font-size: ${fontSize_30};
    color: ${white};
    letter-spacing: 0.016rem;
  }
`

const IntroTopvisual = () => {
  return (
    <Introvisual>
      <h1>지구에서 일어나고 있는<br />
        <span>농담같은 이야기</span></h1>
      <span>한번 듣고 가유~</span>
    </Introvisual>
  )
}

export default IntroTopvisual