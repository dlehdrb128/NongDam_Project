import styled from 'styled-components';
import AdminCategory from '../../Pages/Admin/AdminCategory';
import StoreInfoForm from './StoreInfoForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
//스토어 정보 메인 페이지

const MainBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
`;

// 메인박스 안에
// 왼쪽에 관리자 카테리고리와 중앙에 스토어 개설 폼
const StoreInfoMain = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const getLoginData = async () => {
      try {
        let response = await axios.get(
          `http://localhost:8080/login/admincheck`,
          {
            withCredentials: true,
          }
        );
        if (response.data.status === 201) {
          setUserData(response.data.adminInfo);

          let response2 = await axios.get(
            `http://localhost:8080/admin/store/data/${response.data.adminInfo.user_key}`
          );
          setData(response2.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getLoginData();
  }, []);

  if (data === null) {
    return null;
  }

  if (data.length === 0) {
    alert('스토어 정보가 없습니다! 스토어 개설을 해주세요.');
    navigate('/admin');
  }
  console.log(userData);
  return (
    <MainBox>
      <AdminCategory mainmenu={'스토어 관리'}></AdminCategory>
      <StoreInfoForm storeInfo={data}></StoreInfoForm>
    </MainBox>
  );
};

export default StoreInfoMain;
