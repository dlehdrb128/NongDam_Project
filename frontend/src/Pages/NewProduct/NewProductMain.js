import styled from "styled-components";
import AdminCategory from "../Admin/AdminCategory";
import NewProductForm from "./NewProductForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// 상품 등록 메인 페이지
const MainBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
`;

// 메인박스안에
// 왼편에 관리자카테고리와 중앙에 상품 등록 폼
const NewProductMain = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const request = async () => {
      try {
        await axios.get("http://localhost:8080/login/admincheck", {
          withCredentials: true,
        });
      } catch (error) {
        alert(error.response.data.statusMessage);
        navigate("/");
      }
    };
    request();
  }, []);

  return (
    <MainBox>
      <AdminCategory></AdminCategory>
      <NewProductForm></NewProductForm>
    </MainBox>
  );
};

export default NewProductMain;
