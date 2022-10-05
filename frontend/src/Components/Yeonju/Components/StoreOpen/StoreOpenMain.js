import styled from "styled-components";
import AdminCategory from "../AdminCategory";
import StoreOpenForm from "./StoreOpenForm";

const MainBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
`;

const StoreOpenMain = () => {
  return (
    <MainBox>
      <AdminCategory></AdminCategory>
      <StoreOpenForm></StoreOpenForm>
    </MainBox>
  );
};

export default StoreOpenMain;
