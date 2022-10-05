import styled from 'styled-components';
import AdminCategory from '../AdminCategory';
import NewProductForm from './NewProductForm';

const MainBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
`;

const NewProductMain = () => {
  return (
    <MainBox>
      <AdminCategory></AdminCategory>
      <NewProductForm></NewProductForm>
    </MainBox>
  );
};

export default NewProductMain;
