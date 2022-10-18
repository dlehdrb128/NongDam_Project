import styled from "styled-components";

//최근 주분정보 아이템 콘테이너(사이즈,위치,하단 라인 조정)
const OrderItem = styled.a`
  width: inherit;
  height: 144px;
  display: flex;
  align-items: center;
  padding: 0 34px;
  border-bottom: 1px solid ${({ theme }) => theme.gray};

  &:hover {
    font-weight: bold;
  }
  //날짜,주문정보 컨테이너(위치조정)
  & > div {
    width:111px;
    margin-right: 39px;
  }
  //날짜,주문정보 (사이즈,위치조정)
  & > p:nth-child(3) {
    width: 130px;
    margin-right: 44px;
  }
  //상품개수(사이즈,위치조정)
  & > p:nth-child(4) {
    width: 56px;
    margin-right: 15px;
  }
  //가격(사이즈,위치조정)
  & > p:nth-child(5) {
    width: 52px;
    margin-right: 60px;
  }
  //상품이미지
  img {
    width: 64px;
    height: 60px;
    margin-right: 30px;
  }
  //텍스트 공통(폰트,컬러조정)
  p {
    font-size: ${({ theme }) => theme.fontSize_13};
    font-family: SCD-3;
    color: ${({ theme }) => theme.lightblack};
    word-break: keep-all;
  }
`;

const Mypagesec2OrderItem = ({ data }) => {
  const datas = data.data[0];
  const products = data.data[2];
  console.log(data);
  const img = `http://localhost:8080/product/${products[0].product_image}`
  return (
    <OrderItem href="/orderDetail">
      {/* 날짜,주문번호 */}
      <div>
        <p>{datas[0].covert_date}</p>
        <p>{datas[0].orders_number}</p>
      </div>
      {/* 상품이미지 */}
      <img src={img} alt="Product"></img>
      {/* 상품명 */}
      <p>{products[0].product_name}</p>
      {/* 상품구매갯수 */}
      <p>1개</p>
      {/* 가격 */}
      <p>{products[0].product_price}원</p>
      {/* 배송현황 */}
      <p>{datas[0].orders_status}</p>
    </OrderItem>
  );
};
//end

export default Mypagesec2OrderItem;
