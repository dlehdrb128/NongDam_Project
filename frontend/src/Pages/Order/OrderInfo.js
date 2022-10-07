import { Wrapper, OrderTitle } from "../../Theme/common";
import OrderItem from "./OrderItem";

const OrderInfo = () => {
  let Data = [
    {
      id: 1,
      order_id: "1000151095787",
      image: "/img/product_order_1.png",
      productName: "일동후디스 그릭 요거트 플레인 2개입",
      productNum: 1,
      productPrice: 10600,
      delivery: "배송 완료",
      status: null,
      created_at: "2022.9.11",
    },
    {
      id: 2,
      order_id: "1000151095787",
      image: "/img/product_order_1.png",
      productName: "일동후디스 그릭 요거트 플레인 2개입",
      productNum: 1,
      productPrice: 10600,
      delivery: "배송 완료",
      status: null,
      created_at: "2022.9.11",
    },
    {
      id: 3,
      order_id: "1000151095787",
      image: "/img/product_order_1.png",
      productName: "일동후디스 그릭 요거트 플레인 2개입",
      productNum: 1,
      productPrice: 10600,
      delivery: "배송 완료",
      status: null,
      created_at: "2022.9.11",
    },
  ];
  return (
    <>
      <Wrapper ju={`space-around`} borderTop padding={`10px`}>
        <OrderTitle width={`140px`}>주문일자/주문번호</OrderTitle>
        <OrderTitle width={`60px`}>이미지</OrderTitle>
        <OrderTitle width={`120px`}>상품정보</OrderTitle>
        <OrderTitle width={`100px`}>수량</OrderTitle>
        <OrderTitle width={`100px`}>구매금액</OrderTitle>
        <OrderTitle width={`100px`}>주문처리상태</OrderTitle>
        <OrderTitle width={`110px`}>취소/교환/반품</OrderTitle>
      </Wrapper>

      {Data.map((value) => (
        <OrderItem key={value.id} data={value} />
      ))}
    </>
  );
};

export default OrderInfo;
