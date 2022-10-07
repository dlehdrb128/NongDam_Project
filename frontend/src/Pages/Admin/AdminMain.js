import { Link } from "react-router-dom";
import styled from "styled-components";

// 메인박스 / 화면 전체 박스
const MainBox = styled.div`
  width: inherit;
  padding-top: 145px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "SCD-6";
  color: ${({ theme }) => theme.lightblack};

  & a {
    &:link {
      text-decoration: none;
      color: ${({ theme }) => theme.lightblack};
    }
    &:visited {
      text-decoration: none;
      color: ${({ theme }) => theme.lightblack};
    }
    &:active {
      text-decoration: none;
      color: ${({ theme }) => theme.lightblack};
    }

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.orange};
    }
  }

  // ( 스토어관리 + 각 스토어관리 네모박스) ->  전체 감싼 div
  & > div {
    width: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 45px;

    // 스토어 관리  + 밑줄용 div
    & > div:nth-child(1) {
      width: inherit;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      // 스토어관리
      & > h1 {
        width: inherit;
        height: 77px;
        font-size: 4rem;
      }
      // 밑줄용 div
      & > div {
        width: 900px;
        height: 68px;
        border-top: 1px solid;
        color: ${({ theme }) => theme.lightgray};
      }
    }
  }
`;
// 스토어관리 박스를 묶을 큰 div
const StoreIconMainBox = styled.div`
  width: 950px;
  height: 470px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;

  // 각각의 스토어 관리페이지가 div 6개로 이루어져있다
  // 구조가 다 똑같음
  // 아이콘 + h1 + span 감싼 div
  & div {
    width: 296px;
    height: 224px;
    border: 1px solid ${({ theme }) => theme.realWhite};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 5px rgba(149, 149, 149, 0.65);

    &:hover {
      cursor: pointer;
      background-color: rgba(149, 149, 149, 0.1);
      border: none;
    }
    // 아이콘 박스 사이즈 지정
    & > img {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;
    }
    // h1 ->  각 스토어관리 카테고리 타이틀
    & > h1 {
      font-size: 1.8rem;
      font-family: "SCD-6";
      color: ${({ theme }) => theme.green};
    }
    // span -> 각 스토어관리 설명
    & > span {
      font-size: 1.8rem;
      font-family: "SCD-3";
    }
  }
`;

const AdminMain = () => {
  return (
    <MainBox>
      <div>
        <div>
          <h1>스토어관리</h1>
          <div></div>
        </div>
        <StoreIconMainBox>
          <Link to="create">
            <div className="box">
              <img src="/img/Admin_icon1.png" alt="icon"></img>
              <h1>스토어개설</h1>
              <span>기본 스토어 개설</span>
            </div>
          </Link>
          <div>
            <img src="/img/Admin_icon2.png" alt="icon"></img>
            <h1>스토어관리</h1>
            <span>기존 스토어 관리</span>
          </div>
          <Link to="newproduct">
            <div>
              <img src="/img/Admin_icon3.png" alt="icon"></img>
              <h1>상품관리</h1>
              <span>상품등록, 수정</span>
            </div>
          </Link>
          <div>
            <img src="/img/Admin_icon4.png" alt="icon"></img>
            <h1>게시판관리</h1>
            <span>공지사항, 후기 관련</span>
          </div>
          <div>
            <img src="/img/Admin_icon5.png" alt="icon"></img>
            <h1>정산</h1>
            <span>판매현황, 금액 관리</span>
          </div>
          <Link to="mypage">
            <div>
              <img src="/img/Admin_icon6.png" alt="icon"></img>
              <h1>마이페이지</h1>
              <span>나의 회원정보 수정</span>
            </div>
          </Link>
        </StoreIconMainBox>
      </div>
    </MainBox>
  );
};

export default AdminMain;
