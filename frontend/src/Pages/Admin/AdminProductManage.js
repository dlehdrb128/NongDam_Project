import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AdminCategory from './AdminCategory';
import ProductItem from './ProductItem';

const ManageMain = styled.div`
  margin-top: 80px;
  width: 1280px;
  display: flex;
  gap: 50px;
  & > div:nth-child(2) {
    margin-top: 100px;
    width: 950px;

    & > h1 {
      font-size: 6rem;
      font-family: 'SCD-6';
    }
    & > div {
      width: inherit;
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
  }
`;

const AdminProductManage = () => {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getLoginData = async () => {
      try {
        let response = await axios.get(`http://localhost:8080/login/check`, {
          withCredentials: true,
        });
        if (response.data.status === 201) {
          setUserData(response.data.userInfo);
          let response2 = await axios.get(
            `http://localhost:8080/admin/product/data/${response.data.userInfo.user_key}`
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

  return (
    <ManageMain>
      <AdminCategory mainmenu={'상품관리'}></AdminCategory>
      <div>
        <h1>상품 관리</h1>
        <div>
          {data.map((value, index) => {
            return <ProductItem data={value} key={index}></ProductItem>;
          })}
        </div>
      </div>
    </ManageMain>
  );
};

export default AdminProductManage;
