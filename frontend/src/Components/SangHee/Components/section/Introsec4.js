import '../../../../App/App.css';
import { Common } from '../Common';
import styled from 'styled-components';

//color,font Asset
const { Maincol, text, fontSize_60, fontSize_50, fontSize_30, fontSize_20 } =
  Common;

//section4
const Section4 = styled.section`
  width: inherit;
  margin-bottom: 18rem;
  //title
  & > h1 {
    font-family: YANGJIN;
    font-size: ${fontSize_50};
    margin-bottom: 4rem;
    color: ${text};
    letter-spacing: 0.4rem;
  }
  //sec4_contents
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    //img
    & > img {
      width: 70rem;
      height: 65rem;
    }
    //text
    & > div:nth-child(2) {
      & > div {
        margin-bottom: 6rem;
        color: ${text};
        & > p {
          word-break: keep-all;
          font-size: ${fontSize_20};
          width: 46.4rem;
          text-align: right;
          font-family: SCD-4;
        }
        & > p:nth-child(1) {
          margin-bottom: 3rem;
        }
      }
      //text_bold
      & > h1 {
        font-family: YANGJIN;
        font-size: ${fontSize_30};
        text-align: right;
        line-height: 4.48rem;
        color: ${Maincol};
        letter-spacing: 0.15rem;
        margin-bottom: 6rem;
      }
      & > h1:nth-child(3) {
        font-size: ${fontSize_60};
        color: ${text};
        letter-spacing: 0.3rem;
        & > span {
          font-size: ${fontSize_60};
          color: ${Maincol};
        }
      }
    }
  }
  //common
  p {
    color: ${text};
    letter-spacing: 0.025rem;
  }
`;

const Introsec4 = () => {
  return (
    <Section4>
      <h1>가벼운 가격 가벼운 부담</h1>
      <div>
        <img
          src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmS0Tc_KDYZh_tpK_IrNELhGslOgDZYUEFWNPbXyl3Bx23w59tLKl6UDRSKZZ4L0u80UZvsVtX4=w1920-h969'
          alt='sec4_img'
        ></img>
        <div>
          <div>
            <p>
              기존 시세 대비 최소 30% 이상!
              <br />
              농가의 가외 소득원으로 분류되기 때문에 못난이 농산물은 도매시장을
              거치지 않을 뿐더러 저렴한 가격에 구매할 수 있습니다!
            </p>
          </div>
          <h1>건강한 채소생활</h1>
          <h1>
            <span>농담</span>과 함께!
          </h1>
        </div>
      </div>
    </Section4>
  );
};

export default Introsec4;
