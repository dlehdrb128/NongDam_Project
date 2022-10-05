import { OrderContent, Wrapper, Text, Imge } from '../common';

const OrderItem = ({ data }) => {
  return (
    <Wrapper key={data.id} ju={`space-around`} padding={`10px`} borderBottom>
      <OrderContent width={`140px`}>
        <Text> {data.created_at}</Text>
        <Text> {data.order_id}</Text>
      </OrderContent>

      <OrderContent width={`60px`}>
        <Imge src={data.image}></Imge>
      </OrderContent>
      <OrderContent width={`120px`}>{data.productName}</OrderContent>
      <OrderContent width={`100px`}>{data.productNum}개</OrderContent>
      <OrderContent width={`100px`}>{data.productPrice} 원</OrderContent>
      <OrderContent width={`100px`}>{data.delivery}</OrderContent>
      <OrderContent width={`110px`}>{data.status}</OrderContent>
    </Wrapper>
  );
};

export default OrderItem;
