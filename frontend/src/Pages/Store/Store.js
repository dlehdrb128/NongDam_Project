import styled from "styled-components";
import { useState, useEffect, useRef, forwardRef } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Storesec1 from "./section/Storesec1";
import StoreCategory from "./section/StoreCategory";
import Storeproduct from "./section/Storeproduct";
import Storeinfo from "./section/Storeinfo";

const StoreMain = styled.main`
  width: 1228px;
  padding-top: 130px;
  display: flex;
  flex-direction:column;
  align-items: center;
`

const Store = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const { id } = useParams();
  const storeproduct = useRef(null);
  const storeinfo = useRef(null);

  useEffect(() => {
    setLoading(true);
    const storeData = async () => {
      try {
        let response = await axios.get(`http://localhost:8080/store/${id}`);
        setData(response.data);
      }
      catch (e) {
        console.log(e);
      }
    }
    storeData()
    setLoading(false);
  }, []);
  // console.log(data);

  const categoryMove = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return <h1>준비중입니다.</h1>
  }
  if (data === undefined) {
    return <h1>데이터 로딩에 실패했습니다.</h1>
  }

  return (
    <StoreMain>
      <Storesec1 data={data}></Storesec1>
      <StoreCategory></StoreCategory>
      <Storeproduct data={data}></Storeproduct>
      <Storeinfo data={data}></Storeinfo>
    </StoreMain>
  )
}

export default Store
