import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 메인 박스
const MainBox = styled.div`
  width: 250px;
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // 메인 제목 ( 스토어관리 카테고리 타이틀)
  & > h1 {
    font-family: "SCD-6";
    color: ${({ theme }) => theme.lightblack};
    font-size: 4rem;
    padding-bottom: 45px;
  }
`;

// 카테고리 박스
// 각각 카테고리 구조 똑같아서 하나로 다 가능
// 각각 스토어관리를 하나씩 박스로 구성

const Categoty = styled.div`
  width: 189px;
  padding: 23px 0 23px 0;
  border-top: 1px solid;
  color: ${({ theme }) => theme.lightblack};

  // 스토어관리 타이틀
  & > h2 {
    font-family: "SCD-6";
    font-size: 1.8rem;
    padding-bottom: 13px;
  }
  // 스토어관리 타이틀 안에 세부 카테고리
  // 세부 카테고리 개수와 상관없이 몇 개가 설정되도
  // 간격 유지 가능
  & > p {
    font-family: "SCD-3";
    font-size: 1.5rem;
    padding-bottom: 10px;
  }
`;

const ProductManage = styled.div`
  cursor: pointer;
  font-family: "SCD-6";
  font-size: 1.8rem;
  padding-bottom: 13px;
  color: ${({ theme }) => theme.lightblack};
  &:hover {
    transition: 0.3s;
    color: ${({ theme }) => theme.green};
  }
`;

const AdminCategory = () => {
  const navigate = useNavigate();
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
        <ProductManage
          onClick={() => {
            navigate("/admin/productmanage");
          }}
        >
          상품관리
        </ProductManage>
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
