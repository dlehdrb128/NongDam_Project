import styled from 'styled-components';
import Theme from '../../../../../theme/theme';

const {
  fontSize_40,
  fontSize_18,
  fontSize_13,
  fontSize_15,
  lightblack,
  gray,
  white,
} = Theme;

const OrderState = styled.div`
  margin-bottom: 52px;
  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px 20px;
    border-bottom: 1px solid ${gray};
    & > h1 {
      font-size: ${fontSize_18};
      font-family: SCD-6;
      color: ${lightblack};
    }
    & > span {
      font-size: ${fontSize_13};
      color: ${gray};
    }
  }
  & > div:nth-child(2) {
    width: inherit;
    padding: 20px 18px 0;
    display: flex;
    justify-content: space-between;
    & > div:nth-child(1) {
      width: 588px;
      display: flex;
      justify-content: space-between;
      position: relative;
      & > div {
        & > p {
          text-align: center;
          font-size: ${fontSize_18};
          font-family: SCD-6;
          color: ${lightblack};
          margin-bottom: 10px;
        }
        & > div {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          color: ${lightblack};
          font-family: SCD-6;
          font-size: ${fontSize_40};
          background: ${white};
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      &::after {
        content: '';
        width: 382px;
        border: 1px solid ${gray};
        border-style: dashed solid;
        position: absolute;
        top: 84px;
        left: 102px;
        z-index: -1;
      }
    }
    & > div:nth-child(2) {
      width: 170px;
      height: 135px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & > div {
        width: inherit;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px 10px;
        border-bottom: 1px dashed ${gray};
        & > span:nth-child(1) {
          font-size: ${fontSize_15};
          font-family: SCD-6;
          color: ${lightblack};
        }
        & > span:nth-child(2) {
          font-size: ${fontSize_13};
          font-family: SCD-3;
          color: ${gray};
        }
      }
    }
  }
`;

const Mypagese2OrderState = () => {
  return (
    <OrderState>
      <div>
        <h1>나의주문처리현황</h1>
        <span>※ 최근 3개월 기준</span>
      </div>
      <div>
        <div>
          <div>
            <p>입금대기</p>
            <div>0</div>
          </div>
          <div>
            <p>배송준비중</p>
            <div>0</div>
          </div>
          <div>
            <p>배송중</p>
            <div>0</div>
          </div>
          <div>
            <p>배송완료</p>
            <div>0</div>
          </div>
        </div>
        <div>
          <div>
            <span>취소</span>
            <span>0건</span>
          </div>
          <div>
            <span>교환</span>
            <span>0건</span>
          </div>
          <div>
            <span>반품</span>
            <span>0건</span>
          </div>
        </div>
      </div>
    </OrderState>
  );
};

export default Mypagese2OrderState;
