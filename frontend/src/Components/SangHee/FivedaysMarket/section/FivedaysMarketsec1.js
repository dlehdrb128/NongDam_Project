import '../../../../App/App.css'
import Theme from '../../../../theme/theme';
import styled from "styled-components";
import iframe from 'react-iframe'

const { fontSize_60, fontSize_20, lightblack, green, orange, white } = Theme

const Section1 = styled.section`
  &>div{
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &>div:nth-child(1){
    width: 603px;
    height: 311px;
    background: url('/img/Fdays_sec1_titlebillboard.png') no-repeat center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:56px;
    &>h1{
      font-size: ${fontSize_60};
      font-family: YANGJIN;
      color: ${orange};
    }
    &>span{
      font-size: ${fontSize_20};
      color: ${lightblack};
      font-family: SCD-4;
    }
  }
  &>div:nth-child(2){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &>div:nth-child(1){
      width: 1920px;
      height: 229px;
      background: url('/img/Fdays_sec1_roof.png') no-repeat center;
      background-size: cover;
      position: relative;
      z-index: 2;
    }
    &>div:nth-child(2){
      width: 1450px;
      position: relative;
      top: -226px;
      padding: 383px 80px 89px;
      display: flex;
      justify-content: space-between;
      border: 12px solid ${green};
      border-radius: 30px;
      box-shadow: 10px 10px 50px rgba(0,0,0,0.1);
      &>img{
        width: 625px;
        height: 865px;
      }
      &>div:nth-child(2){
        width: 1087px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        &>h1{
          font-size: ${fontSize_60};
          font-family:YANGJIN;
          color: ${green};
          text-align: right;
          margin-bottom: 55px;
        }
        &>p{
          width: 427px;
          font-size: ${fontSize_20};
          font-family: SCD-4;
          text-align: right;
          word-break:keep-all;
          white-space: pre-wrap;
          margin-bottom: 118px;
        }
      }
    }
  }
  }
`

const Market = {
  name: "'청주 육거리시장'",
  imgurl: `/img/Fdays_sec1_img1.png`,
  contents: `우리나라의 다양한 시장을 소개합니다.\n육거리 종합시장은 대표적인 전통 시장이자\n전국 5대 재래시장에 꼽힐 만큼 규모가 크고\n점포수, 방문객 수가 많은 시장입니다.\n12개의 시장이 합쳐져 전통시장의 현대화에\n 성공한 시장으로도 꼽힙니다.\n기와지붕과 청사 초롱을 달아놓은 입구에서\n우리나라 전통시장의 이미지를 느낄 수 있답니다.`
}

const FivedaysMakretsec1 = () => {
  const { name, imgurl, contents } = Market
  return (
    <Section1>
      <div>
        <div>
          <h1>오늘의시장</h1>
          <span>우리나라의 다양한 시장을 소개해드리겠구먼유</span>
        </div>
        <div>
          <div>
          </div>
          <div>
            <img src={imgurl} alt="sec1_img" />
            <div>
              <h1>{name}</h1>
              <p>{contents}</p>
            </div>
          </div>
        </div>
      </div>
    </Section1>
  )
}

export default FivedaysMakretsec1;