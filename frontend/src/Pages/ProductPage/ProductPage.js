import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { productAll } from "../Slice/getData";
import styled from "styled-components";
import ProductPageTop from "./ProductPageTop";
import ProductCategory from "./ProductCategory";
import ProductDetail from "./ProductDetail";
import ProductReviewForm from "./ProductReviewForm";
import Remocon from "../../LayOut/Remocon";
import axios from "axios";
const ProductPageBox = styled.div``;

// 상품 상세페이지 컴포넌트

const ProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [user, setUser] = useState();
  const productDetail = useRef(null);
  const productReview = useRef(null);
  let productKey;

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(
          `http://localhost:8080/product/detail/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        let response = await axios.get("http://localhost:8080/login/check", {
          withCredentials: true,
        });

        if (response.data.status === 201) {
          setUser(response.data.userInfo);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  if (data === undefined) {
    return null;
  }

  // 카테고리의 버튼을 누르면 인자에 따라 스크롤을 이동시킨다
  const categoryMove = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  //   // const disPatch = useDispatch();

  //   // useEffect(() => {
  //   //   const getData = () => {
  //   //     disPatch(productAll());
  //   //   };
  //   //   getData();
  //   // }, [disPatch]);

  //   // const { value, status } = useSelector((store) => store.data);

  //   // const realValue = value[0];

  //   // if (!realValue) {
  //   //   return null;
  //   // }

  //   // let ProductData = realValue.filter((value) => {
  //   //   return value.product_id === Number(id);
  //   // });

  //   // if (status === "loading") {
  //   //   return null;
  //   // }

  if (data[1].length === 0) {
    productKey = data[0][0].product_key;
  }

  return (
    <ProductPageBox>
      <ProductPageTop ProductData={data[0]}></ProductPageTop>
      <ProductCategory
        categoryMove={categoryMove}
        productDetail={productDetail}
        productReview={productReview}
      ></ProductCategory>
      <ProductDetail data={data[0]} ref={productDetail}></ProductDetail>
      <ProductReviewForm
        data={data[1]}
        ref={productReview}
        productKey={productKey}
        user={user}
      ></ProductReviewForm>
      <Remocon></Remocon>
    </ProductPageBox>
  );
};

export default ProductPage;
