import styled from 'styled-components';
import Theme from '../../../../../theme/theme';
const { fontSize_13, lightblack, gray } = Theme;

const OrderItem = styled.div`
  width: inherit;
  height: 144px;
  display: flex;
  align-items: center;
  padding: 0 34px;
  border-bottom: 1px solid ${gray};
  & > div {
    margin-right: 48px;
  }
  & > p:nth-child(3) {
    width: 130px;
    margin-right: 45px;
  }
  & > p:nth-child(4) {
    width: 56px;
    margin-right: 15px;
  }
  & > p:nth-child(5) {
    width: 52px;
    margin-right: 60px;
  }
  img {
    margin-right: 30px;
  }
  p {
    font-size: ${fontSize_13};
    font-family: SCD-3;
    color: ${lightblack};
    word-break: keep-all;
  }
`;

const Mypagesec2OrderItem = ({ data }) => {
  return (
    <OrderItem>
      <div>
        <p>{data.date}</p>
        <p>{data.number}</p>
      </div>
      <img src={data.img} alt='Productt'></img>
      <p>{data.name}</p>
      <p>{data.count}개</p>
      <p>{data.price.toLocaleString()}원</p>
      <p>{data.delivery}</p>
    </OrderItem>
  );
};

export default Mypagesec2OrderItem;
