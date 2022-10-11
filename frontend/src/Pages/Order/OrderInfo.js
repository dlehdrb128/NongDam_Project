import { Wrapper, OrderTitle } from '../../Theme/common';
import OrderItem from './OrderItem';
import axios from 'axios';
import { useEffect, useState } from 'react';

const OrderInfo = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const getData = async () => {
        const result = await axios.get('http://localhost:8080/order');
        setOrderData(result.data);
      };

      getData();
    }, 2000);
  }, []);

  return (
    <>
      {orderData && orderData.length === 0 ? (
        <div>로딩중</div>
      ) : (
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
          {orderData.map((value) => (
            <OrderItem key={value.order_id} data={value} />
          ))}
        </>
      )}
    </>
  );
};

export default OrderInfo;
