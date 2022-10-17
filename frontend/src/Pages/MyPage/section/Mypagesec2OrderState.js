import styled from "styled-components";

//섹션2 콘텐츠2 주문처리현황 컨테이너(위치조정)
const OrderState = styled.div`
  margin-bottom: 52px;
  //주문 처리현황 타이틀 부분 컨테이너(위치,테두리조정)
  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px 20px;
    border-bottom: 1px solid ${({ theme }) => theme.gray};
    //주문 처리현황 타이틀(폰트,컬러조정)
    & > h1 {
      font-size: ${({ theme }) => theme.fontSize_18};
      font-family: SCD-6;
      color: ${({ theme }) => theme.lightblack};
    }
    //주문 처리현황 타이틀 근황(폰트,컬러조정)
    & > span {
      font-size: ${({ theme }) => theme.fontSize_13};
      color: ${({ theme }) => theme.gray};
    }
  }
  //주문처리현황 콘텐츠 컨테이너(위치,사이즈조정)
  & > div:nth-child(2) {
    width: inherit;
    padding: 20px 18px 0;
    display: flex;
    justify-content: space-between;
    //주문처리현황 심볼 컨테이너(위치,사이즈조정)
    & > div:nth-child(1) {
      width: 588px;
      display: flex;
      justify-content: space-between;
      position: relative;
      //각 심볼 컨테이너
      & > div {
        //심볼 타이틀(폰트,위치,컬러조정)
        & > p {
          text-align: center;
          font-size: ${({ theme }) => theme.fontSize_18};
          font-family: SCD-6;
          color: ${({ theme }) => theme.lightblack};
          margin-bottom: 10px;
        }
        //심볼(쉐잎,사이즈,폰트,백그라운드,컬러조정)
        & > div {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          color: ${({ theme }) => theme.lightblack};
          font-family: SCD-6;
          font-size: ${({ theme }) => theme.fontSize_40};
          background: ${({ theme }) => theme.white};
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      //심볼 연결 dash선(사이즈,위치,컬러,선두께조정)
      &::after {
        content: "";
        width: 382px;
        border: 1px solid ${({ theme }) => theme.gray};
        border-style: dashed solid;
        position: absolute;
        top: 84px;
        left: 102px;
        z-index: -1;
      }
    }
    //취소/교환/반품 현황 콘텐츠 컨테이너(사이즈,위치조정)
    & > div:nth-child(2) {
      width: 170px;
      height: 135px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      //취소/교환/반폼 각 컨테이너(위치,사이즈,하단 선 조정)
      & > div {
        width: inherit;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px 10px;
        border-bottom: 1px dashed ${({ theme }) => theme.gray};
        //타이틀(폰트,컬러조정)
        & > span:nth-child(1) {
          font-size: ${({ theme }) => theme.fontSize_15};
          font-family: SCD-6;
          color: ${({ theme }) => theme.lightblack};
        }
        //상태(폰트,컬러조정)
        & > span:nth-child(2) {
          font-size: ${({ theme }) => theme.fontSize_13};
          font-family: SCD-3;
          color: ${({ theme }) => theme.gray};
        }
      }
    }
  }
`;

const Mypagese2OrderState = () => {
  return (
    <OrderState>
      {/* 주문 처리현황 타이틀  */}
      <div>
        <h1>나의주문처리현황</h1>
        <span>※ 최근 3개월 기준</span>
      </div>
      {/* 주문 처리현황 콘텐츠 컨테이너 */}
      <div>
        {/* 심볼 콘텐츠 콘테이너 */}
        <div>
          <div>
            {/* 타이틀 */}
            <p>입금대기</p>
            {/* 심볼 */}
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
          {/*취소/교환/반폼  */}
          <div>
            {/* 타이틀 */}
            <span>취소</span>
            {/* 상태 */}
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
//end

export default Mypagese2OrderState;
