import { Link } from "react-router-dom";
import styled from "styled-components";
import Theme from "../../../theme/theme";

// 메인박스 / 화면 전체 박스
const MainBox = styled.div`
  width: inherit;
  padding-top: 145px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "SCD-6";
  color: ${Theme.lightblack};

  & a {
    &:link {
      text-decoration: none;
      color: ${Theme.lightblack};
    }
    &:visited {
      text-decoration: none;
      color: ${Theme.lightblack};
    }
    &:active {
      text-decoration: none;
      color: ${Theme.lightblack};
    }

    &:hover {
      cursor: pointer;
      color: ${Theme.orange};
    }
  }

  // 스토어관리 + 네모박스 전체 감싼 div
  & > div {
    width: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 45px;
  }
`;

// 스토어관리(h1) + 밑줄용 div 묶은 div
const HeadlineBox = styled.div`
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
    color: ${Theme.lightgray};
  }
`;

const StoreIconMainBox = styled.div`
  width: 950px;
  height: 470px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;

  .box {
    width: 296px;
    height: 224px;
    border: 1px solid ${Theme.realWhite};
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

    & > img {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;
    }
    & > h1 {
      font-size: 1.8rem;
      font-family: "SCD-6";
      color: ${Theme.green};
    }
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
        <HeadlineBox>
          <h1>스토어관리</h1>
          <div></div>
        </HeadlineBox>
        <StoreIconMainBox>
          <Link to="create">
            <div className="box">
              <img src="/img/Admin_icon1.png" alt="icon"></img>
              <h1>스토어개설</h1>
              <span>기본 스토어 개설</span>
            </div>
          </Link>
          <div className="box">
            <img src="/img/Admin_icon2.png" alt="icon"></img>
            <h1>스토어관리</h1>
            <span>기존 스토어 관리</span>
          </div>
          <div className="box">
            <img src="/img/Admin_icon3.png" alt="icon"></img>
            <h1>상품관리</h1>
            <span>상품등록, 수정</span>
          </div>
          <div className="box">
            <img src="/img/Admin_icon4.png" alt="icon"></img>
            <h1>게시판관리</h1>
            <span>공지사항, 후기 관련</span>
          </div>
          <div className="box">
            <img src="/img/Admin_icon5.png" alt="icon"></img>
            <h1>정산</h1>
            <span>판매현황, 금액 관리</span>
          </div>
          <div className="box">
            <img src="/img/Admin_icon6.png" alt="icon"></img>
            <h1>마이페이지</h1>
            <span>나의 회원정보 수정</span>
          </div>
        </StoreIconMainBox>
      </div>
    </MainBox>
  );
};

export default AdminMain;
