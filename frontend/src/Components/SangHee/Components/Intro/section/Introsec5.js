import '../../../../../App/App.css';
import { Theme, StyledButton } from '../../../../../theme/theme'
import styled from 'styled-components';

//color,font Asset
const { green, orange, white, fontSize_40, fontSize_25 } = Theme;

//section5
const Section5 = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //title
  & > h1 {
    font-family: YANGJIN;
    font-size: ${Theme.fontSize_60};
    color: ${orange};
    text-align: center;
    margin-bottom: 30px;
  }
  //sec5_contents
  & > div:nth-child(2) {
    width: 100%;
    height: 584px;
    background: url('/img/Intro_sec5_img.png')
      no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    //text_con_wrap
    & > div {
      background: rgba(21, 21, 21, 0.71);
      width: 685px;
      height: 583px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      //text_bold
      & > h1 {
        text-align: center;
        font-size: ${fontSize_40};
        font-family: YANGJIN;
        color: ${green};
        margin-bottom: 80px;
        & > span {
          font-size: ${fontSize_40};
          color: ${white};
        }
      }
      //text
      & > p {
        width: 412px;
        word-break: keep-all;
        font-family: SCD-4;
        font-size: ${fontSize_25};
        color: ${white};
        text-align: center;
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
      <StyledButton wd='400px' ht='80px' fs='3rem'>제보하러 가기</StyledButton>
    </Section5>
  );
};

export default Introsec5;
