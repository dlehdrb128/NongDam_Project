import styled from "styled-components";
import AdminCategory from "../../Pages/Admin/AdminCategory";
import StoreOpenForm from "./StoreOpenForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//스토어 개설 메인 페이지

const MainBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
`;

// 메인박스 안에
// 왼쪽에 관리자 카테리고리와 중앙에 스토어 개설 폼
const StoreOpenMain = () => {
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
      <StoreOpenForm></StoreOpenForm>
    </MainBox>
  );
};

export default StoreOpenMain;
