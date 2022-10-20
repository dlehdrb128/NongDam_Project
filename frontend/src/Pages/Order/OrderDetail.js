import React, { useEffect } from "react";
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

  useEffect(() => {
    const request = async () => {
      try {
        const orderDetail = await axios.get(
          `http://localhost:8080/orders/${productId}`,
          {
            withCredentials: true,
          }
        );
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          console.log("실행!");
          alert(error.response.data.statusMessage);
          navigate("/login");
          return false;
        }
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
              <OrderTitle />

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
            <OrderInfo />
            {/* 받는 사람 정보 */}
            <OrderPerson />
            {/*  결제정보 */}
            <OrderPayment />
          </Wrapper>
        </Wrapper>
      </RsWrapper>
    </Wrapper>
  );
};

export default OrderDetail;
