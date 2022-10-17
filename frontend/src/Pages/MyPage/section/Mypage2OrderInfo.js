import styled from "styled-components";
import Mypagesec2OrderItem from "./Mypagesec2OrderItem";

//섹션2 콘텐츠3 최근주문정보 컨테이너(사이즈조정)
const OrderInfo = styled.div`
  width: inherit;
  //최근 주문정보 타이틀 컨테이너(사이즈,위치,폰트조정)
  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px 20px;
    border-bottom: 1px solid ${({ theme }) => theme.gray};
    //최근 주문정보 타이틀(폰트,컬러조정)
    & > h1 {
      font-size: ${({ theme }) => theme.fontSize_18};
      font-family: SCD-6;
      color: ${({ theme }) => theme.lightblack};
    }
    //최근주문정보 타이틀 근황(폰트,컬러조정)
    & > span {
      font-size: ${({ theme }) => theme.fontSize_13};
      color: ${({ theme }) => theme.gray};
    }
  }
  //최근 주문정보 bar 컨테이너(사이즈조정)
  & > div:nth-child(2) {
    width: inherit;
    //bar1 컨테이너(사이즈,위치,백그라운드조정)
    & > div:nth-child(1) {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 34px;
      background: ${({ theme }) => theme.white};
      //bar1 텍스트 컨테이너(사이즈,위치조정)
      & > div:nth-child(1) {
        width: 300px;
        display: flex;
        justify-content: space-between;
        //bar1 텍스트(폰트,컬러조정)
        & > span {
          font-family: SCD-6;
          font-size: ${({ theme }) => theme.fontSize_15};
          color: ${({ theme }) => theme.lightblack};
        }
      }
      //bar2 컨테이너(사이즈,위치,백그라운드조정)
      & > div:nth-child(2) {
        width: 383px;
        display: flex;
        justify-content: space-between;
        //bar2 텍스트(폰트,컬러조정)
        & > span {
          font-family: SCD-6;
          font-size: ${({ theme }) => theme.fontSize_15};
          color: ${({ theme }) => theme.lightblack};
        }
      }
    }
  }
`;

//dummy object
const dummyData = [
  {
    date: "2022.9.11",
    number: 1000151095787,
    img: "/img/ProductExample.png",
    name: "일동후디스 그릭 요거트 플레인 2개입",
    count: 2,
    price: 10600,
    delivery: "배송 완료",
  },
  {
    date: "2022.9.11",
    number: 1000151095787,
    img: "/img/ProductExample.png",
    name: "일동후디스 그릭 요거트 플레인 2개입",
    count: 2,
    price: 10600,
    delivery: "배송 완료",
  },
  {
    date: "2022.9.11",
    number: 1000151095787,
    img: "/img/ProductExample.png",
    name: "일동후디스 그릭 요거트 플레인 2개입",
    count: 2,
    price: 10600,
    delivery: "배송 완료",
  },
  {
    date: "2022.9.11",
    number: 1000151095787,
    img: "/img/ProductExample.png",
    name: "일동후디스 그릭 요거트 플레인 2개입",
    count: 2,
    price: 10600,
    delivery: "배송 완료",
  },
  {
    date: "2022.9.11",
    number: 1000151095787,
    img: "/img/ProductExample.png",
    name: "일동후디스 그릭 요거트 플레인 2개입",
    count: 2,
    price: 10600,
    delivery: "배송 완료",
  },
];

const Mypage2OrderInfo = () => {
  return (
    <OrderInfo>
      {/* 최근 주문정보 타이틀 */}
      <div>
        <h1>최근 주문 정보</h1>
        <span>※ 최근 3개월 기준</span>
      </div>
      {/* 최근 주문정보 bar */}
      <div>
        <div>
          {/* bar1 */}
          <div>
            <span>주문일자/주문번호</span>
            <span>이미지</span>
            <span>상품정보</span>
          </div>
          {/* bar2 */}
          <div>
            <span>수량</span>
            <span>상품구매금액</span>
            <span>주문처리상태</span>
            <span>취소/교환/반품</span>
          </div>
        </div>
        {/* 최근 주문정보 리스트 콘테이너 */}
        <div>
          {/* 더미 오브젝트 props로 Mypagese2OrderItem 컴포넌트로 보냄,맵 사용해서 태그 생성 */}
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
//end

export default Mypage2OrderInfo;
