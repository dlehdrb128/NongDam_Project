import styled from 'styled-components';
import AdminCategory from '../../Pages/Admin/AdminCategory';
import StoreOpenForm from './StoreOpenForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
//스토어 개설 메인 페이지

const MainBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
`;

// 메인박스 안에
// 왼쪽에 관리자 카테리고리와 중앙에 스토어 개설 폼
const StoreOpenMain = () => {
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

  if (data === null) {
    return null;
  }

  if (data.length !== 0) {
    alert('스토어가 존재합니다!');
    navigate('/admin/storeInfo');
  }

  console.log(data);
  return (
    <MainBox>
      <AdminCategory></AdminCategory>
      <StoreOpenForm user_key={userData}></StoreOpenForm>
    </MainBox>
  );
};

export default StoreOpenMain;
