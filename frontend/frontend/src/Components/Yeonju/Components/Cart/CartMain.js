import styled from 'styled-components';
import Theme from '../../../../theme/theme';
import CartTem from './CartTem';
import CartPrice from './CartPrice';
const MainBox = styled.div`
  width: inherit;
  padding-top: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SCD-6';
  color: ${Theme.lightblack};
`;

const CartMainBox = styled.div`
  width: 1280px;

  & > h1 {
    font-family: 'SCD-6';
    font-size: 4rem;
    text-align: center;
    padding-bottom: 80px;
  }

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
  border: 1px solid ${Theme.lightblack};
`;

const CartMain = () => {
  return (
    <MainBox>
      <CartMainBox>
        <h1>장바구니</h1>
        <CartTem></CartTem>
        <CartPrice></CartPrice>
        <div className='buttonBox'>
          <SelectOrderButton col={Theme.green} bgcol={Theme.realWhite}>
            선택주문
          </SelectOrderButton>
          <AllOrderButton col={Theme.realWhite} bgcol={Theme.green}>
            전체주문
          </AllOrderButton>
        </div>
      </CartMainBox>
    </MainBox>
  );
};

export default CartMain;
