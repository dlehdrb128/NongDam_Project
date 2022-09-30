import styled from 'styled-components';
import Theme from '../../../theme/theme';
const MainBox = styled.div`
  width: inherit;
  padding-top: 14.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SCD-6';
  color: ${Theme.lightblack};

  & > div {
    width: 128rem;
    height: 66 rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 4.5rem;
  }
`;

const HeadlineBox = styled.span`
  width: inherit;
  height: 14.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    width: inherit;
    height: 7.7rem;
    font-size: 4rem;
  }
  & > div {
    width: 90rem;
    height: 6.8rem;
    border-top: 0.1rem solid;
    color: ${Theme.lightgray};
  }
`;

const StoreIconMainBox = styled.div`
  width: 95rem;
  height: 47rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;

  .box {
    width: 29.6rem;
    height: 22.4rem;
    border: ${Theme.realWhite} solid;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0.1rem 0.1rem 0.5rem rgba(149, 149, 149, 0.65);

    &:hover {
      cursor: pointer;
      background-color: rgba(149, 149, 149, 0.1);
      border: 0;
    }

    & > img {
      width: 6rem;
      height: 6rem;
      margin-bottom: 2rem;
    }
    & > h1 {
      font-size: 1.8rem;
      font-family: 'SCD-6';
      color: ${Theme.green};
    }
    & > span {
      font-size: 1.8rem;
      font-family: 'SCD-3';
    }
  }
`;

const AdminMain = () => {
  return (
    <MainBox>
      <div>
        <HeadlineBox>
          <h1>스토어관리</h1>
          <div></div>
        </HeadlineBox>
        <StoreIconMainBox>
          <div className='box'>
            <img
              src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmTkfZHxQY1yecWNjq2rRFJIVtNLaVrb-DYVFbVXvMxqqPkBP_kvkhxiPswvh8so_RFxpKn5CXE=w1416-h959'
              alt='icon'
            ></img>
            <h1>스토어개설</h1>
            <span>기본 스토어 개설</span>
          </div>
          <div className='box'>
            <img
              src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmSsCn2Iop_9xC9IAjxUDobSxGoA70TJt5zmkkVjfW9lccDW1BkDtFDKgirbI7GnhA8xfPr_Ugg=w1416-h959'
              alt='icon'
            ></img>
            <h1>스토어관리</h1>
            <span>기존 스토어 관리</span>
          </div>
          <div className='box'>
            <img
              src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmQTJEb-w1mZcJimPhpFRfDFSUwPhi9q-G7aYizQ_JDvDxu5o_fwdjZXLtCRGr-OJzSnWNqowAc=w1416-h959'
              alt='icon'
            ></img>
            <h1>상품관리</h1>
            <span>상품등록, 수정</span>
          </div>
          <div className='box'>
            <img
              src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmR9-R0sRo28duLqnNBLTn1ardIlRsy5w5N0_qyjzxIo1AQCV2PF1ZCxQhcSFF5VoTyCIgkqSfk=w1416-h959'
              alt='icon'
            ></img>
            <h1>게시판관리</h1>
            <span>공지사항, 후기 관련</span>
          </div>
          <div className='box'>
            <img
              src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmRcHw0W9ZwscrJC03Y_x15p7HYWMVdSVED0wKMneZENlmqogm8Jzr8J1rFRX-IuvLO3lAAxPPc=w1416-h959'
              alt='icon'
            ></img>
            <h1>정산</h1>
            <span>판매현황, 금액 관리</span>
          </div>
          <div className='box'>
            <img
              src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmSqrXVtl7h6cIyVbw2JDBfM2fTPSt3X2v8_DrDFUzYA4AmVoTItbrsPyPFUg0n6ouhLdXmcBYk=w1416-h959'
              alt='icon'
            ></img>
            <h1>마이페이지</h1>
            <span>나의 회원정보 수정</span>
          </div>
        </StoreIconMainBox>
      </div>
    </MainBox>
  );
};

export default AdminMain;
