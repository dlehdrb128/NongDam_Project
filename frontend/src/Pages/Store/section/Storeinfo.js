import styled from "styled-components";

const Info = styled.div`
  width: inherit;
  color: ${({ theme }) => theme.lightblack};
  & > h1 {
    font-family: SCD-6;
    font-size: ${({ theme }) => theme.fontSize_25};
    margin-bottom: 30px;
  }
  & > div {
    width: inherit;
    display: flex;
    border-top: 2px solid ${({ theme }) => theme.gray};
    & > div {
      width: 50%;
      & > div {
        display: flex;
        font-family: SCD-5;
        font-size: ${({ theme }) => theme.fontSize_18};
        color: ${({ theme }) => theme.lightblack};
        & > div {
          height: 80px;
          font-size: ${({ theme }) => theme.fontSize_18};
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid ${({ theme }) => theme.gray};
        }
        & > div:nth-child(1) {
          width: 40%;
          background: ${({ theme }) => theme.white};
        }
        & > div:nth-child(2) {
          width: 100%;
        }
      }
    }
  }
`;

const Storeinfo = ({ data }) => {
  console.log(data);
  return (
    <Info id="info">
      <h1>판매자정보</h1>
      <div>
        <div>
          <div>
            <div>상호명</div>
            <div>{data[0].store_name}</div>
          </div>
          <div>
            <div>사업자등록번호</div>
            <div>{data[0].user_admin_companyNum}</div>
          </div>
          <div>
            <div>대표전화</div>
            <div>{data[0].store_phone}</div>
          </div>
          <div>
            <div>E-mail</div>
            <div>{data[0].store_reciveEmail}</div>
          </div>
        </div>
        <div>
          <div>
            <div>대표자</div>
            <div>{data[0].store_ceo_name}</div>
          </div>
          <div>
            <div>사업장 소재지</div>
            <div>{data[0].store_address}</div>
          </div>
          <div>
            <div>상담전화</div>
            <div>{data[0].store_cs_call}</div>
          </div>
          <div>
            <div>cs 운영시간</div>
            <div>{data[0].store_cs_time}</div>
          </div>
        </div>
      </div>
    </Info>
  );
};

export default Storeinfo;
