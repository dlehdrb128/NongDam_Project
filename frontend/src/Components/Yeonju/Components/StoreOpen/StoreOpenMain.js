import styled from "styled-components";
import AdminCategory from "../AdminCategory";
import StoreOpenForm from "./StoreOpenForm";

//스토어 개설 메인 페이지

const MainBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
`;


// 메인박스 안에 
// 왼쪽에 관리자 카테리고리와 중앙에 스토어 개설 폼
const StoreOpenMain = () => {
  return (
    <MainBox>
      <AdminCategory></AdminCategory>
      <StoreOpenForm></StoreOpenForm>
    </MainBox>
  );
};

export default StoreOpenMain;
