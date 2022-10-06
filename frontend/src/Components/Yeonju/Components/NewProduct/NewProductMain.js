import styled from 'styled-components';
import AdminCategory from '../AdminCategory';
import NewProductForm from './NewProductForm';

// 상품 등록 메인 페이지
const MainBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
`;

// 메인박스안에 
// 왼편에 관리자카테고리와 중앙에 상품 등록 폼 
const NewProductMain = () => {
  return (
    <MainBox>
      <AdminCategory></AdminCategory>
      <NewProductForm></NewProductForm>
    </MainBox>
  );
};

export default NewProductMain;
