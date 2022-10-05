import { OrderContent, Wrapper, Text, Imge } from "../common";

const OrderItem = () => {
  let Data = [
    {
      id: "1",
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
      id: "2",
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
      id: "2",
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

  return Data.map((data) => {
    return (
      <>
        <Wrapper ju={`space-around`} padding={`10px`} borderBottom>
          <OrderContent width={`140px`}>
            <Text> {data.created_at}</Text>
            <Text> {data.order_id}</Text>
          </OrderContent>

          <OrderContent width={`60px`}>
            <Imge src={data.image}></Imge>
          </OrderContent>
          <OrderContent width={`120px`}>{data.productName}</OrderContent>
          <OrderContent width={`100px`}>{data.productNum}r</OrderContent>
          <OrderContent width={`100px`}>
            {data.productPrice.toLocaleString()} 원
          </OrderContent>
          <OrderContent width={`100px`}>{data.delivery}</OrderContent>
          <OrderContent width={`110px`}>{data.status}</OrderContent>
        </Wrapper>
      </>
    );
  });
};

export default OrderItem;
