import { useState } from 'react';
import styled from 'styled-components';
import Theme from '../../../../theme/theme';

// 상품 목록 전체 박스
const ItemBox = styled.div`
  width: inherit;
  height: 237px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Theme.gray};

  // 체크박스
  & > div:nth-child(1) {
    width: 79px;
    padding-left: 20px;

    // 체크박스 사이즈 조정
    & > input {
      width: 24px;
      height: 24px;
    }
  }
  // 상품이미지

  & > div:nth-child(2) {
    width: 219px;
    & > img {
      width: 188px;
      height: 188px;
      border-radius: 2px;
    }
  }
  // 상품정보 (상품이름)
  & > div:nth-child(3) {
    width: 357px;
    padding-right: 3px;
    font-size: 1.5rem;
    font-family: 'SCD-3';
  }
  // 판매가
  & > div:nth-child(4) {
    width: 79px;
    font-size: 1.5rem;
    font-family: 'SCD-3';
    text-align: center;
  }
  // 할인금액
  & > div:nth-child(6) {
    width: 80px;
    font-size: 1.5rem;
    font-family: 'SCD-3';
    text-align: center;
  }
  // 합계
  & > div:nth-child(7) {
    width: 139px;
    font-size: 1.5rem;
    font-family: 'SCD-3';
    text-align: center;
  }
  // 선택
  & > div:nth-child(8) {
    width: 188px;
    display: flex;
    flex-direction: column;
    align-items: center;

    // 바로구매 버튼
    & > button {
      width: 117px;
      height: 40px;
      font-size: 1.5rem;
      font-family: 'SCD-6';
      background-color: ${Theme.green};
      color: ${Theme.realWhite};
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
    // 아래 찜하기랑, 휴지통 큰 박스
    & > div {
      width: 117px;
      height: 49px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      // 하트, 휴지통 넣을 회색 박스
      & > div {
        width: 52px;
        height: 40px;
        border-radius: 3px;
        border: 1px solid ${Theme.gray};
        cursor: pointer;

        // 아이콘
        & > img {
          width: 52px;
          height: 40px;
        }
      }
    }
  }
`;
// 수량부분 박스화

const CountBox = styled.div`
  width: 139px;
  display: flex;
  justify-content: center;
  & > button {
    width: 26px;
    height: 26px;
    font-family: 'SCD-6';
    font-size: 1.5rem;
  }
  & > input {
    width: 26px;
    height: 26px;
    font-family: 'SCD-3';
    font-size: 1.5rem;
    text-align: center;
  }
`;

//
const CartItem = () => {
  //수량
  const [number, setNumber] = useState(1);

  // 값 바뀔때마다 number로 받고 있는 input창 변화
  const onChange = (e) => setNumber(e.target.value);

  // 플러스버튼 누르면 1씩 증가
  const clickPlus = () => {
    setNumber(number + 1);
  };

  // 마이너스버튼 누르면 1씩 감소
  const clickMinus = () => {
    setNumber(number - 1);
  };

  return (
    <ItemBox>
      <div>
        <input type='checkbox'></input>
      </div>
      <div>
        <img src='/img/cart1.png' alt='productimage'></img>
      </div>
      <div>[전북] 서영암농협 학이 머문 유기농 쌀(일 미) 4kg, 2021년산...</div>
      <div>9,500원</div>
      <CountBox>
        <button onClick={clickMinus}>-</button>
        <input value={number} onChange={onChange}></input>
        <button onClick={clickPlus}>+</button>
      </CountBox>
      <div>0원</div>
      <div>9,500원</div>
      <div>
        <button>바로구매</button>
        <div>
          <div>
            <img src='/img/cart_heart.png' alt='icon'></img>
          </div>
          <div>
            <img src='img/cart_trash.png' alt='icon'></img>
          </div>
        </div>
      </div>
    </ItemBox>
  );
};

export default CartItem;
