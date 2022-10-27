import styled from "styled-components";
import FivedaysMarketitems from "./FivedaysMarketItems";

const Wrapper = styled.section`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  color : ${(props) => props.title};
  margin-bottom: ${(props) => props.marignbt};
  //섹션2 콘텐츠 컨테이너(상품)(사이즈,위치,테두리조정)
  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1063px;
    height: 844px;
    border: 3px solid ${(props) => props.brcol || `${props.theme.orange}`};
    border-radius: 30px;
    padding-top: 35px;
    position: relative;
    //섹션2 콘텐츠 장식용 타이틀 이미지(지역)(사이즈,백그라운드,위치,폰트조정)
    & > div:nth-child(1) {
      width: 186px;
      height: 123px;
      background: url("http://localhost:8080/market/Fday_sec2_decotitle.png") no-repeat center;
      background-size: cover;
      position: absolute;
      left: -37px;
      top: -23px;
      color: ${({ theme }) => theme.realWhite};
      font-size: ${({ theme }) => theme.fontSize_30};
      font-family: YANGJIN;
      padding: 63px 66px 0;
    }
    &>div.wrap{
        width: 934px;
        display: grid;
        column-gap: 30px;
        row-gap: 40px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 300px 300px;
      }
    //장식응 타이틀 이미지 텍스트(폰트,컬러,위치조정)
    & > h2 {
      font-size: ${({ theme }) => theme.fontSize_30};
      color: ${(props) => props.title || `${props.theme.green}`};
      font-family: YANGJIN;
      margin-bottom: 65px;
    }
     //상품 컨테이너(사이즈 조정)
  }
`;


const FivedaysMarketsec2conwrapper = ({ local, title, brcol, data, marignbt }) => {
  console.log(data);
  return (
    <Wrapper title={title} brcol={brcol} marignbt={marignbt}>
      <div>
        {/* 상품(충청) */}
        {/* 장식용 타이틀 */}
        <div>{local}</div>
        <h2>반가워요 {local}도 에유!</h2>
        {/* 충청도상품 컴포넌트 import */}
        <div class="wrap">
          {data.map((value, index) => {
            return <FivedaysMarketitems data={value} key={index}></FivedaysMarketitems>
          })}
        </div>
      </div>
    </Wrapper >
  )
}

export default FivedaysMarketsec2conwrapper