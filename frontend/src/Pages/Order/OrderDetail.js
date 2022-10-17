import React from "react";
import OrderInfo from "../Order/OrderInfo";
import OrderTitle from "./OrderTitle";
import OrderPayment from "./OrderPaymentInfo";
import OrderPerson from "./OrderPerson";
import Mypagesec1 from "../MyPage/section/Mypagesec1";

import { RsWrapper, Wrapper } from "../../Theme/common";

const OrderDetail = () => {
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
                fontFamily={`SCD-6`}>
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
