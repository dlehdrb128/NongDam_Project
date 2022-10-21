import React, { useEffect, useState } from "react";
import OrderInfo from "../Order/OrderInfo";
import OrderTitle from "./OrderTitle";
import OrderPayment from "./OrderPaymentInfo";
import OrderPerson from "./OrderPerson";
import Mypagesec1 from "../MyPage/section/Mypagesec1";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { RsWrapper, Wrapper } from "../../Theme/common";

const OrderDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  console.log(productId, "aaa");

  const [orderDetail, setOrderDetail] = useState();

  useEffect(() => {
    const request = async () => {
      const orderDetail = await axios.get(
        `http://localhost:8080/orders/${productId}`,
        {
          withCredentials: true,
        }
      );

      if (orderDetail.data.status === 401) {
        alert(orderDetail.data.statusMessage);
        navigate("/login");
      } else {
        console.log(orderDetail.data);
        setOrderDetail(orderDetail.data.orderDetail);
      }
    };

    request();
  }, []);

  return (
    <Wrapper>
      <RsWrapper>
        <Wrapper>
          {/* 메뉴 */}
          <Mypagesec1 Text={`주문상세`} />

          <Wrapper dir={`column`} ju={`flex-start`}>
            <Wrapper dir={`column`}>
              {/* 나의 주문 정보 */}
              <OrderTitle orderDetail={orderDetail} />

              <Wrapper
                ju={`flex-start`}
                fontSize={`1.8rem`}
                padding={`10px`}
                fontFamily={`SCD-6`}
              >
                주문 정보
              </Wrapper>
            </Wrapper>

            {/* 주문 상품 정보 */}
            <OrderInfo orderDetail={orderDetail} />
            {/* 받는 사람 정보 */}
            <OrderPerson orderDetail={orderDetail} />
            {/*  결제정보 */}
            <OrderPayment orderDetail={orderDetail} />
          </Wrapper>
        </Wrapper>
      </RsWrapper>
    </Wrapper>
  );
};

export default OrderDetail;
