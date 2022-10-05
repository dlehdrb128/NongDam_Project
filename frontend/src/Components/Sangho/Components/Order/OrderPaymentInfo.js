import { Wrapper, Text } from "../common";

const OrderPayment = () => {
  return (
    <Wrapper dir={`column`} padding={`10px`} margin={`50px 0 0 0`} borderTop>
      <Wrapper
        ju={`flex-start`}
        fontSize={`1.8rem`}
        fontFamily={`SCD-6`}
        margin={`0 0 30px 0`}
      >
        결재 정보
      </Wrapper>

      <Wrapper ju={`space-between`} padding={`0 0 10px 0`}>
        <Wrapper width={`auto`}>
          <Text margin={`0 15px 0 0`} fontFamily={`SCD-6`} fontSize={`1.3rem`}>
            결제 수단
          </Text>
          <Text fontSize={`1.5rem`}>무통장 입금</Text>
        </Wrapper>

        <Wrapper width={`auto`} dir={`column`}>
          <Wrapper ju={`space-between`}>
            <Text
              margin={`0 15px 0 0`}
              fontFamily={`SCD-6`}
              fontSize={`1.3rem`}
            >
              총 상품 가격
            </Text>
            <Text fontSize={`1.5rem`}>30,000원</Text>
          </Wrapper>

          <Wrapper ju={`space-between`}>
            <Text
              margin={`0 15px 0 0`}
              fontFamily={`SCD-6`}
              fontSize={`1.3rem`}
            >
              배송비
            </Text>
            <Text fontSize={`1.5rem`}>3,000원</Text>
          </Wrapper>

          <Wrapper ju={`space-between`}>
            <Text
              margin={`0 15px 0 0`}
              fontFamily={`SCD-6`}
              fontSize={`1.1rem`}
            >
              포인트
            </Text>
            <Text fontSize={`1.5rem`}>100원</Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper ju={`flex-end`} borderTop padding={`10px 0 0 0`}>
        <Text margin={`0 15px 0 0`} fontFamily={`SCD-6`} fontSize={`1.3rem`}>
          총 결제 금액
        </Text>
        <Text fontSize={`1.5rem`}>26,900원</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default OrderPayment;
