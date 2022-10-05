import styled from "styled-components";
import Theme from "../../../theme/theme";

// 메인 박스
const MainBox = styled.div`
  width: 250px;
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    font-family: "SCD-6";
    color: ${Theme.lightblack};
    font-size: 4rem;
    padding-bottom: 45px;
  }
`;

// 카테고리 박스
const Categoty = styled.div`
  width: 189px;
  padding: 23px 0 23px 0;
  border-top: 1px solid;
  color: ${Theme.lightblack};

  & > h2 {
    font-family: "SCD-6";
    font-size: 1.8rem;
    padding-bottom: 13px;
  }
  & > p {
    font-family: "SCD-3";
    font-size: 1.5rem;
    padding-bottom: 10px;
  }
`;

const AdminCategory = () => {
  return (
    <MainBox>
      <h1>스토어 개설</h1>
      <Categoty>
        <h2>스토어 개설</h2>
        <p>스토어 정보</p>
      </Categoty>
      <Categoty>
        <h2>스토어 관리</h2>
        <p>스토어 프로필 설정</p>
        <p>메인배너 설정</p>
      </Categoty>
      <Categoty>
        <h2>상품관리</h2>
        <p>상품 등록</p>
        <p>상품 진열</p>
      </Categoty>
      <Categoty>
        <h2>게시판 관리</h2>
        <p>공지사항 등록</p>
        <p>상품 후기 관리</p>
      </Categoty>
      <Categoty>
        <h2>정산</h2>
        <p>판매 내역</p>
        <p>취소 내역</p>
        <p>수익금 관리</p>
      </Categoty>
    </MainBox>
  );
};

export default AdminCategory;
