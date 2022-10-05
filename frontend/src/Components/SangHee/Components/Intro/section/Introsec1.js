import '../../../../../App/App.css';
import { Theme } from '../../../../../theme/theme'
import styled from 'styled-components';

//color,font Asset
const { green, lightblack, fontSize_50, fontSize_30, fontSize_20 } = Theme;

//section1
const Section1 = styled.section`
  width: inherit;
  margin-bottom: 180px;

  //title
  & > h1 {
    font-family: YANGJIN;
    font-size: ${fontSize_50};
    margin-bottom: 40px;
    color: ${lightblack};
  }

  //sec1_contents
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    //img
    & > img {
      width: 700px;
      height: 720px;
    }
    //text
    & > div:nth-child(2) {
      & > div {
        margin-bottom: 60px;
        color: ${lightblack};
        & > p {
          word-break: keep-all;
          font-size: ${fontSize_20};
          width: 504px;
          text-align: right;
          font-family: SCD-4;
        }
        & > p:nth-child(1) {
          margin-bottom: 3rem;
        }
      }
      //bold text
      & > h1 {
        font-family: YANGJIN;
        font-size: ${fontSize_30};
        text-align: right;
        color: ${green};
        & > p {
          font-size: ${fontSize_30};
        }
      }
    }
  }
  //common
  p {
    color: ${lightblack};
  }
`;

const Introsec1 = () => {
  return (
    <Section1>
      <h1>워매~ 아까운거</h1>
      <div>
        <img
          src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmT3pV0ORYOOLX4j1iEqb1exodDLsoe_8JNfG90iAQhgeMmp56Di2T01LXMsqKDQ8zpb3UAgabI=w1920-h966'
          alt='sec1_img'
        ></img>
        <div>
          <div>
            <p>
              못난이 농산물이 버려지는 근본적인 원인은 농가의 소득문제 입니다.
              가공공장으로 판로가 존재하지만 낮은 수매단가로 인해 충분한 수익을
              기대하기 어렵습니다.
            </p>
            <p>
              갈아엎는게 속 편한 구조이니<br></br>
              자연히 폐기가 늘어나는 구조입니다.
            </p>
          </div>
          <h1>
            못난이 농산물
            <br />
            <p>어떻게 활용해야 할까요?</p>
          </h1>
        </div>
      </div>
    </Section1>
  );
};
export default Introsec1;
