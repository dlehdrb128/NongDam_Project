import styled from "styled-components";
import Theme from "../../../../theme/theme";

const MainBox = styled.div`
  width: 83.3rem;
  padding: 24rem 0 7rem 0;
  display: flex;
  flex-direction: column;

  & > h1 {
    font-family: "SCD-6";
    color: ${Theme.lightblack};
  }
`;

const RegButton = styled.button`
  width: 18.7rem;
  height: 5rem;
  color: ${(props) => props.col};
  background-color: ${(props) => props.bgcol};
  font-family: "SCD-6";
  font-size: 1.8rem;
`;

const EditButton = styled(RegButton)`
  border: 0.1rem solid ${Theme.lightblack};
`;

const StoreOpenForm = () => {
  return (
    <MainBox>
      <h1>스토어 정보</h1>
      <form></form>
      <h1>고객센터 정보안내 설정</h1>
      <form></form>
      <div>
        <EditButton>수정</EditButton>
        <RegButton>등록</RegButton>
      </div>
    </MainBox>
  );
};

export default StoreOpenForm;
