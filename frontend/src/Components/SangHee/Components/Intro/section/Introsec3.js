import '../../../../../App/App.css';
import { Theme } from '../../../../../theme/theme'
import styled from 'styled-components';

//color,font Asset
const { green, lightblack, fontSize_60, fontSize_50, fontSize_30, fontSize_25 } = Theme;

//section3
const Section3 = styled.section`
  width: inherit;
  margin-bottom: 180px;

  //title
  & > h1 {
    text-align: center;
    font-size: ${fontSize_50};
    color: ${lightblack};
    font-family: YANGJIN;
    margin-bottom: 30px;
    & > span {
      color: ${green};
      font-size: ${fontSize_50};
    }
  }
  //sec3_con
  p {
    color: ${lightblack};
    font-family: SCD-4;
    text-align: center;
  }
  & > p:nth-child(2) {
    font-size: ${fontSize_25};
    margin-bottom: 45px;
  }
  //img
  & > img {
    width: 100%;
    height: 509px;
    margin-bottom: 45px;
  }
  //text_bold
  & > p:nth-child(4) {
    font-family: YANGJIN;
    font-size: ${fontSize_30};
    line-height: ${fontSize_60};
    & > span {
      font-size: ${fontSize_30};
      color: ${green};
    }
  }
`;

const Introsec3 = () => {
  return (
    <Section3>
      <h1>
        배부르게 <span>지키는 환경</span>
      </h1>
      <p>
        상품 가치가 낮다는 이유로 판매되지 않고 버려지는 음식물 쓰레기의 양이
        <br />
        전 세계 음식물 소비량의 3분의 1인 13억 톤에 달한다니,
        <br />그 심각성이 짐작이 가나요?
      </p>
      <img
        src='/img/Intro_sec3_img.png'
        alt='sec3_img'
      ></img>
      <p>
        <span>못난이 농산물</span>을 이용한다면
        <br />
        음식물 쓰레기와 농산물 폐기가 줄어들어 환경을 보호할 수 있어요 !
      </p>
    </Section3>
  );
};

export default Introsec3;
