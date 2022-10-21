import { OrderContent, Wrapper, Text, Imge } from "../../Theme/common";

const OrderItem = ({ orderDetail }) => {
  console.log(orderDetail);
  return (
    <>
      {orderDetail && (
        <Wrapper
          key={orderDetail.product_key}
          ju={`space-around`}
          padding={`10px`}
          borderBottom
        >
          <OrderContent width={`140px`}>
            <Text> {orderDetail.orders_date}</Text>
            <Text> {orderDetail.orders_number}</Text>
          </OrderContent>

          <OrderContent width={`60px`}>
            <Imge
              src={`http://localhost:8080/product/${orderDetail.product_image}`}
            ></Imge>
          </OrderContent>
          <OrderContent width={`120px`}>
            {orderDetail.product_name}
          </OrderContent>
          <OrderContent width={`100px`}>1 개</OrderContent>
          <OrderContent width={`100px`}>
            {orderDetail.product_price.toLocaleString()} 원
          </OrderContent>
          <OrderContent width={`100px`}>
            {orderDetail.orders_status}
          </OrderContent>
          <OrderContent width={`110px`}>
            {/* {orderDetail.orders_status} */}
          </OrderContent>
        </Wrapper>
      )}
    </>
  );
};

export default OrderItem;
