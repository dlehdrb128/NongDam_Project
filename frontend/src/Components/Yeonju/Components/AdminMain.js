import styled from 'styled-components';
const MainBox = styled.div`
  width: inherit;
  height: 1000px;
  padding: 140px 0 200px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 1280px;
    height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div > h1 {
      width: inherit;
      height: 80px;
      text-align: center;
    }
  }
`;

const StoreIconMainBox = styled.div`
  width: 950px;
  height: 470px;
  display: flex;
  flex-wrap: wrap;

  & > div {
    width: 296px;
    height: 224px;
    border: 1px solid;
    border-radius: 10px;
  }
`;

const AdminMain = () => {
  return (
    <MainBox>
      <div>
        <h1>스토어관리</h1>
        <StoreIconMainBox>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </StoreIconMainBox>
      </div>
    </MainBox>
  );
};

export default AdminMain;
