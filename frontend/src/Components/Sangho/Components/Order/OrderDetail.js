import React from "react";
import OrderInfo from "../Order/OrderInfo";
import Menu from "../Order/Menu";
import OrderTitle from "./OrderTitle";
import OrderPayment from "./OrderPaymentInfo";
import OrderPerson from "./OrderPerson";

import { RsWrapper, Wrapper } from "../common";

const OrderDetail = () => {
  return (
    <Wrapper>
      <RsWrapper>
        <Wrapper ju={`start`} margin={`30px 0 20px 0`} fontFamily={`SCD-6`}>
          주문상세
        </Wrapper>

        <Wrapper>
          <Menu />

          <Wrapper dir={`column`} ju={`flex-start`}>
            <Wrapper dir={`column`}>
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

            <OrderInfo />

            <OrderPerson />
            <OrderPayment />
          </Wrapper>
        </Wrapper>
      </RsWrapper>
    </Wrapper>
  );
};

export default OrderDetail;
