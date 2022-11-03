import styled from 'styled-components';
import AdminCategory from '../Admin/AdminCategory';
import NewProductForm from './NewProductForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// 상품 등록 메인 페이지
const MainBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
`;

// 메인박스안에
// 왼편에 관리자카테고리와 중앙에 상품 등록 폼
const NewProductMain = () => {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const request = async () => {
      try {
        let response = await axios.get(
          'http://localhost:8080/login/admincheck',
          {
            withCredentials: true,
          }
        );
        if (response.data.status === 201) {
          setUserData(response.data.adminInfo.user_key);

          let response2 = await axios.get(
            `http://localhost:8080/admin/store/data/${response.data.adminInfo.user_key}`
          );
          setData(response2.data);
        }
      } catch (error) {
        alert(error.response.data.statusMessage);
        navigate('/');
      }
    };
    request();
  }, []);

  return (
    <MainBox>
      <AdminCategory mainmenu={'상품관리'}></AdminCategory>
      <NewProductForm userKey={userData}></NewProductForm>
    </MainBox>
  );
};

export default NewProductMain;
