import styled from 'styled-components';
import Theme from '../../../../../theme/theme';

const { fontSize_18, fontSize_13, lightblack, gray, lightgreen, realWhite } =
  Theme;

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
  & > div:nth-child(1) {
    width: 150px;
    & > h1 {
      width: inherit;
      color: ${lightblack};
      word-break: keep-all;
      font-family: SCD-6;
      font-size: ${fontSize_18};
      margin-bottom: 10px;
    }
    & > span {
      color: ${gray};
      font-family: SCD-3;
      font-size: ${fontSize_13};
      word-break: keep-all;
    }
  }
  & > div:nth-child(2) {
    background: ${realWhite};
    width: 550px;
    height: 80px;
    border-radius: 10px;
    display: flex;
    overflow: hidden;
    & > div {
      width: calc(100% / 3);
      height: inherit;
      position: relative;
      padding: 15px 26px;
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
  const { PersonalMember } = member;
  return (
    <Info>
      <div>
        <h1>
          {PersonalMember[0].name}님은[{PersonalMember[0].membership}]입니다.
        </h1>
        <span>
          총주문 {PersonalMember[0].Totoalpay.toLocaleString()}원(
          {PersonalMember[0].TotoalCount}회)
        </span>
      </div>
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

export default Mypagesec2Info;
