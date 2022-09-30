import styled from 'styled-components';
const MainBox = styled.div`
  width: inherit;
  height: 1000px;
  padding: 140px 0 200px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid red;
  font-family: 'SCD-6';

  & > div {
    width: 1280px;
    height: 650px;
    border: 3px solid red;
    background-color: pink;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const HeadlineBox = styled.div`
  width: inherit;
  height: 80px;
  text-align: center;
  border: 3px solid red;
  background-color: aquamarine;

  & > h1 {
    font-size: 4rem;
  }
`;

const StoreIconMainBox = styled.div`
  width: 950px;
  height: 470px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  background-color: aqua;

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
        <HeadlineBox>
          <h1>스토어관리</h1>
        </HeadlineBox>
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
