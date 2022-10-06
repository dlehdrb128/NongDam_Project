import '../../../../../App/App.css';
import Theme from '../../../../../theme/theme';
import styled from 'styled-components';

//color,font Asset
const { fontSize_60, fontSize_20, lightblack, green } = Theme;

// 섹션1 콘텐츠 컨테이너(너비,위치,그림자 조정)
const Section1con = styled.div`
  //constructor
  width: 1450px;
  position: relative;
  top: -190px;
  padding: 300px 80px 89px;
  display: flex;
  justify-content: space-between;
  border: 12px solid ${green};
  border-radius: 30px;
  box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.1);
  //섹션1 콘텐츠 이미지(시장)(사이즈 조정)
  & > img {
    width: 625px;
    height: 865px;
  }
  //섹션1 콘텐츠 텍스트 컨테이너(사이즈,위치조정)
  & > div:nth-child(2) {
    width: 1087px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    //섹션1 텍스트 컨테이너(위치조정)
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      //섹션1 텍스트 컨테이너 타이틀(폰트,컬러,글정렬,위치조정)
      & > h1 {
        font-size: ${fontSize_60};
        font-family: YANGJIN;
        color: ${green};
        text-align: right;
        margin-bottom: 55px;
      }
      //섹션1 텍스트 컨테이너 내용(사이즈,폰트,컬러,글정렬,위치조정)
      & > p {
        width: 427px;
        font-size: ${fontSize_20};
        color: ${lightblack};
        font-family: SCD-4;
        text-align: right;
        word-break: keep-all;
        white-space: pre-wrap;
      }
    }
  //섹션1 텍스트 지도이미지(사이즈조정)
    & > img {
      width: 496px;
      height: 333px;
    }
  }
`;

//dummy Text
const Market = {
  name: "'청주 육거리시장'",
  imgurl: `/img/Fdays_sec1_img1.png`,
  contents: `우리나라의 다양한 시장을 소개합니다.\n육거리 종합시장은 대표적인 전통 시장이자\n전국 5대 재래시장에 꼽힐 만큼 규모가 크고\n점포수, 방문객 수가 많은 시장입니다.\n12개의 시장이 합쳐져 전통시장의 현대화에\n 성공한 시장으로도 꼽힙니다.\n기와지붕과 청사 초롱을 달아놓은 입구에서\n우리나라 전통시장의 이미지를 느낄 수 있답니다.`,
};

const FivedaysMarektsec1con = () => {
  const { name, imgurl, contents } = Market;
  return (
    <Section1con>
      {/* 시장이미지 */}
      <img src={imgurl} alt='sec1_img' />
      {/* 텍스트 콘테이너 */}
      <div>
        <div>
          {/* 타이틀 */}
          <h1>{name}</h1>
          {/* 내용 */}
          <p>{contents}</p>
        </div>
        {/* <div></div> MAP API용 div*/}
        {/* 지도이미지 */}
        <img src='/img/Fday_sec1_Map_1.png' alt='Map'></img>
      </div>
    </Section1con>
  );
};
//end

export default FivedaysMarektsec1con;
