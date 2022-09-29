import '../../../../App/App.css';
import { Common } from '../Common';
import styled from 'styled-components';

//color,font Asset
const { Maincol, orange, white, fontSize_60, fontSize_40, fontSize_25 } =
  Common;

//section5
const Section5 = styled.section`
  width: 100%;
  //title
  & > h1 {
    font-family: YANGJIN;
    font-size: ${fontSize_60};
    letter-spacing: 0.3rem;
    color: ${orange};
    text-align: center;
    margin-bottom: 3rem;
  }
  //sec5_contents
  & > div:nth-child(2) {
    height: 58.4rem;
    background: url('https://lh3.googleusercontent.com/drive-viewer/AJc5JmSO5zlxwGaLiNbopmkmkYv7GHrWANZy_GToUOx_AhRXOLXsZpIrd9ke-SOwYLATJA8Epfi-UcQ=w1920-h966')
      no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    //text_con_wrap
    & > div {
      background: rgba(21, 21, 21, 0.71);
      width: 68.5rem;
      height: 58.3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      //text_bold
      & > h1 {
        text-align: center;
        font-size: ${fontSize_40};
        font-family: YANGJIN;
        color: ${Maincol};
        line-height: 6rem;
        letter-spacing: 0.2rem;
        margin-bottom: 8rem;
        & > span {
          font-size: ${fontSize_40};
          color: ${white};
        }
      }
      //text
      & > p {
        width: 41.2rem;
        word-break: keep-all;
        font-family: SCD-4;
        font-size: ${fontSize_25};
        color: ${white};
        text-align: center;
        line-height: 3.5rem;
        letter-spacing: 0.15rem;
      }
    }
  }
`;

const Introsec5 = () => {
  return (
    <Section5>
      <h1>혹시 도움이 필요하신가요?</h1>
      <div>
        <div>
          <h1>
            WE SAVE# 농가
            <br />
            <span>위기에 처한 밭을 구해요</span>
          </h1>
          <p>
            작황이 좋지 않아 갈아엎을 위기에 처한 밭을 구합니다.
            <br /> 농가와 소비자를 웃게 할 수 있다면 우리는 어디든 달려갑니다.
            <br /> 주위에 위기의 밭이 있으신가요?
            <br /> 여러분의 제보를 기다립니다!
          </p>
        </div>
      </div>
    </Section5>
  );
};

export default Introsec5;
