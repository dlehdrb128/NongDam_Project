import styled from 'styled-components';
import CartTitle from './CartTitle';
import CartItem from './CartItem';
import Remocon from '../../LayOut/Remocon';
import Theme from '../../Theme/theme';

// 장바구니 메인 큰 박스
const MainBox = styled.div`
  width: inherit;
  padding-top: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SCD-6';
  color: ${(theme) => theme.lightblack};
`;

// 장바구니 전체로 묶음

const CartMainBox = styled.div`
  width: 1280px;

  // 메인 이름 - 장바구니
  & > h1 {
    font-family: 'SCD-6';
    font-size: 4rem;
    text-align: center;
    padding-bottom: 80px;
  }

  // 선택주문, 전체주문 담을 박스
  .buttonBox {
    width: inherit;
    height: 130px;
    padding-top: 80px;
    display: flex;
    justify-content: center;
  }
`;

// 전체주문 버튼
const AllOrderButton = styled.button`
  width: 187px;
  height: 50px;
  color: ${(props) => props.col};
  background-color: ${(props) => props.bgcol};
  font-family: 'SCD-6';
  font-size: 1.8rem;
  border: none;
  border-radius: 3px;
  margin: 0 15px 0 15px;
  padding: 5px;
  cursor: pointer;
`;

// 전체주문버튼에 테두리만 줘서 선택주주문버튼을 만듬
const SelectOrderButton = styled(AllOrderButton)`
  border: 1px solid ${(theme) => theme.lightblack};
`;
// 전체적인 구성
//  h1 장바구니 + 상품 정보 이름 담을 (CartTitle.js)  + + 상품금액 담길 목록(CartPrice.js) + 상품 가격(CartPrice.js)
const CartMain = () => {
  const productList = [
    {
      name: '[전북] 서영암농협 학이 머문 유기농 쌀(일 미) 4kg, 2021년산...',
      price: 9500,
      discount: 10,
      img: 'http://localhost:8080/icon/cart1.png',
    },
  ];

  return (
    <MainBox>
      <CartMainBox>
        <h1>장바구니</h1>
        <CartTitle></CartTitle>
        {productList.map((product, index) => {
          return <CartItem product={product} key={index}></CartItem>;
        })}

        <div className='buttonBox'>
          <SelectOrderButton col={Theme.green} bgcol={Theme.realWhite}>
            선택주문
          </SelectOrderButton>
          <AllOrderButton col={Theme.realWhite} bgcol={Theme.green}>
            전체주문
          </AllOrderButton>
        </div>
      </CartMainBox>
      <Remocon></Remocon>
    </MainBox>
  );
};

export default CartMain;
