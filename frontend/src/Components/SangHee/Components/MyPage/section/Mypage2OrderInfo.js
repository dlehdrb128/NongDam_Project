import styled from 'styled-components';
import Theme from '../../../../../theme/theme';
import Mypagesec2OrderItem from './Mypagesec2OrderItem';

const { fontSize_18, fontSize_13, fontSize_15, lightblack, gray, white } =
  Theme;

const OrderInfo = styled.div`
  width: inherit;
  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px 20px;
    border-bottom: 1px solid ${gray};
    & > h1 {
      font-size: ${fontSize_18};
      font-family: SCD-6;
      color: ${lightblack};
    }
    & > span {
      font-size: ${fontSize_13};
      color: ${gray};
    }
  }
  & > div:nth-child(2) {
    width: inherit;
    & > div:nth-child(1) {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 34px;
      background: ${white};
      & > div:nth-child(1) {
        width: 300px;
        display: flex;
        justify-content: space-between;
        & > span {
          font-family: SCD-6;
          font-size: ${fontSize_15};
          color: ${lightblack};
        }
      }
      & > div:nth-child(2) {
        width: 383px;
        display: flex;
        justify-content: space-between;
        & > span {
          font-family: SCD-6;
          font-size: ${fontSize_15};
          color: ${lightblack};
        }
      }
    }
  }
`;

const dummyData = [
  {
    date: '2022.9.11',
    number: 1000151095787,
    img: '/img/ProductExample.png',
    name: '일동후디스 그릭 요거트 플레인 2개입',
    count: 2,
    price: 10600,
    delivery: '배송 완료',
  },
  {
    date: '2022.9.11',
    number: 1000151095787,
    img: '/img/ProductExample.png',
    name: '일동후디스 그릭 요거트 플레인 2개입',
    count: 2,
    price: 10600,
    delivery: '배송 완료',
  },
  {
    date: '2022.9.11',
    number: 1000151095787,
    img: '/img/ProductExample.png',
    name: '일동후디스 그릭 요거트 플레인 2개입',
    count: 2,
    price: 10600,
    delivery: '배송 완료',
  },
  {
    date: '2022.9.11',
    number: 1000151095787,
    img: '/img/ProductExample.png',
    name: '일동후디스 그릭 요거트 플레인 2개입',
    count: 2,
    price: 10600,
    delivery: '배송 완료',
  },
  {
    date: '2022.9.11',
    number: 1000151095787,
    img: '/img/ProductExample.png',
    name: '일동후디스 그릭 요거트 플레인 2개입',
    count: 2,
    price: 10600,
    delivery: '배송 완료',
  },
];

const Mypage2OrderInfo = () => {
  return (
    <OrderInfo>
      <div>
        <h1>최근 주문 정보</h1>
        <span>※ 최근 3개월 기준</span>
      </div>
      <div>
        <div>
          <div>
            <span>주문일자/주문번호</span>
            <span>이미지</span>
            <span>상품정보</span>
          </div>
          <div>
            <span>수량</span>
            <span>상품구매금액</span>
            <span>주문처리상태</span>
            <span>취소/교환/반품</span>
          </div>
        </div>
        <div>
          {dummyData.map((value, index) => {
            return (
              <Mypagesec2OrderItem
                key={index}
                data={value}
              ></Mypagesec2OrderItem>
            );
          })}
        </div>
      </div>
    </OrderInfo>
  );
};

export default Mypage2OrderInfo;
