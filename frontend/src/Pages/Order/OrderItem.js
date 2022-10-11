import { OrderContent, Wrapper, Text, Imge } from '../../Theme/common';

const OrderItem = ({ data }) => {
  return (
    <Wrapper
      key={data.order_id}
      ju={`space-around`}
      padding={`10px`}
      borderBottom
    >
      <OrderContent width={`140px`}>
        <Text> {data.orderDate.substring(0, 10)}</Text>
        <Text> {data.orderNum}</Text>
      </OrderContent>

      <OrderContent width={`60px`}>
        <Imge src={data.orderImage}></Imge>
      </OrderContent>
      <OrderContent width={`120px`}>{data.orderPinfo}</OrderContent>
      <OrderContent width={`100px`}>{data.orderPNum}개</OrderContent>
      <OrderContent width={`100px`}>{data.orderPrice} 원</OrderContent>
      <OrderContent width={`100px`}>{data.orderStatus}</OrderContent>
      <OrderContent width={`110px`}>{data.status}</OrderContent>
    </Wrapper>
  );
};

export default OrderItem;
