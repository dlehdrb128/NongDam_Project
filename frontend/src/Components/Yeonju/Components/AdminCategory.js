import styled from "styled-components";
import Theme from "../../../../theme/theme";

const MainBox = styled.div`
  width: 25rem;
  padding-top: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h1 {
    font-family: "SCD-6";
    color: ${Theme.lightblack};
    font-size: 4rem;
    padding-bottom: 4.5rem;
  }
`;

const AdminCategory = () => {
  return (
    <MainBox>
      <h1>스토어 개설</h1>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </MainBox>
  );
};

export default AdminCategory;
