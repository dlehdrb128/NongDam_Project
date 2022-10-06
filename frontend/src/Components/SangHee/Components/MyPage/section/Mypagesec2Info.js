import styled from 'styled-components';
import Theme from '../../../../../theme/theme';


//color,font Asset
const { fontSize_18, fontSize_13, lightblack, gray, lightgreen, realWhite } =
  Theme;

//섹션2 콘텐츠1 주문처리현황 컨테이너(사이즈,백그라운드,위치조정)
const Info = styled.div`
  width: inherit;
  height: 120px;
  padding: 0 18px;
  background: ${lightgreen};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  // 콘텐츠1 회원 등급 및 적립금 컨테이너(사이즈조정) 
  & > div:nth-child(1) {
    width: 150px;
    //회원이름(사이즈,글정렬,폰트,위치조정)
    & > h1 {
      width: inherit;
      color: ${lightblack};
      word-break: keep-all;
      font-family: SCD-6;
      font-size: ${fontSize_18};
      margin-bottom: 10px;
    }
    //적립금(폰트,컬러조정)
    & > span {
      color: ${gray};
      font-family: SCD-3;
      font-size: ${fontSize_13};
      word-break: keep-all;
    }
  }
  // 콘텐츠1 쿠폰,선호상품,적립금 컨테이너(사이즈조정 및 위치, 테두리조정) 
  & > div:nth-child(2) {
    background: ${realWhite};
    width: 550px;
    height: 80px;
    border-radius: 10px;
    display: flex;
    overflow: hidden;
    //쿠폰,적립금,선호상품 컨테이너(사이즈,위치조정)
    & > div {
      width: calc(100% / 3);
      height: inherit;
      position: relative;
      padding: 15px 26px;
      //정보 텍스트(폰트,글정렬,위치조정)
      & > p {
        font-family: SCD-6;
        font-size: ${fontSize_18};
        color: ${lightblack};
        text-align: right;
        margin-right: 9px;
        position: relative;
      }
      & > p:nth-child(1) {
        &::after {
          //화살표아이콘(백그라운드,사이즈,위치조정)
          content: '';
          background: url('/img/Direction.png') no-repeat center;
          background-size: cover;
          width: 7px;
          height: 13px;
          position: absolute;
          top: 7px;
          right: -20px;
        }
      }
     //쿠폰,적립금,선호상품 분류선(사이즈,위치조정)
      &::after {
        content: '';
        background: ${lightgreen};
        width: 1px;
        height: 50px;
        position: absolute;
        right: 0;
        top: 15px;
      }
    }
    //각각 아이콘 배치(사이즈,위치,백그라운드조정)
    & > div:nth-child(1) {
      &::before {
        content: '';
        background: url('/img/Coupon.svg') no-repeat center;
        width: 48px;
        height: 47px;
        position: absolute;
      }
    }
    & > div:nth-child(2) {
      &::before {
        content: '';
        background: url('/img/StackMoney.svg') no-repeat center;
        background-size: cover;
        width: 43px;
        height: 47px;
        position: absolute;
      }
    }
    & > div:nth-child(3) {
      &::before {
        content: '';
        background: url('/img/Favorite.svg') no-repeat center;
        width: 41px;
        height: 47px;
        position: absolute;
      }
    }
    //마지막 (선호상품) 위치 조정 및 분류선 제거
    & > div:nth-child(3) {
      & > p {
        margin-right: 0;
        &::after {
          display: none;
        }
      }
      &::after {
        display: none;
      }
    }
  }
`;

//dummy object
const member = {
  PersonalMember: [
    {
      name: '이상호',
      membership: '개인회원',
      TotoalCount: 14,
      Totoalpay: 152300,
      Stackpay: 1523,
      Favorite: 2,
    },
  ],
};

const Mypagesec2Info = () => {
  //구조분해할당
  const { PersonalMember } = member;
  return (
    <Info>
      {/* 회원정보 */}
      <div>
        <h1>
          {PersonalMember[0].name}님은[{PersonalMember[0].membership}]입니다.
        </h1>
        <span>
          총주문 {PersonalMember[0].Totoalpay.toLocaleString()}원(
          {PersonalMember[0].TotoalCount}회)
        </span>
      </div>
      {/* 쿠폰,적립금,관심상품 */}
      <div>
        <div>
          <p>쿠폰</p>
        </div>
        <div>
          <p>적립금</p>
          <p>{PersonalMember[0].Stackpay.toLocaleString()}원</p>
        </div>
        <div>
          <p>관심상품</p>
          <p>{PersonalMember[0].Favorite}개</p>
        </div>
      </div>
    </Info>
  );
};
//end

export default Mypagesec2Info;
