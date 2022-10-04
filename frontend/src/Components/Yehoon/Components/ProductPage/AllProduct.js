import styled from "styled-components";
import ProductItem from "./ProductItem";
import { Theme } from "../../../../theme/theme";
// import { useEffect } from "react";
// import { productAll } from "../Slice/getData";
// import { useDispatch, useSelector } from "react-redux";

const ProductTop = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;

const ProductItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  & > h1 {
    font-family: "YANGJIN";
    font-size: 4.5rem;
    color: ${Theme.green};
  }

  & > div:nth-child(2) {
    font-family: "SCD-4";
    font-size: 2.1rem;
    color: ${Theme.lightblack};
  }

  & > div:nth-child(3) {
    display: flex;
    flex-direction: row;
    gap: 50px;

    & > select {
      width: 150px;
      height: 40px;
      border-radius: 15px;
      color: ${Theme.lightblack};
      font-size: 1.9rem;

      & > option {
        font-size: 1.6rem;
      }

      font-family: "SCD-4";
      text-align: center;
      font-weight: bold;
      opacity: 60%;
      &:hover {
        cursor: pointer;
        opacity: 100%;
      }
    }
  }
`;

const ProductItemRight = styled.img``;

const ProductBox = styled.div`
  margin-top: 150px;
  width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 110px;
`;

const AllProduct = () => {
  //   const disPatch = useDispatch();

  //   useEffect(() => {
  //     const getData = () => {
  //       disPatch(productAll());
  //     };
  //     getData();
  //   }, [disPatch]);

  //   const { value, status } = useSelector((store) => store.data);

  //   const realValue = value[0];

  //   if (!realValue) {
  //     return null;
  //   }

  //   if (status === "loading") {
  //     return null;
  //   }

  let dummyData = [
    {
      product_id: "1",
      image: "/img/exam-1.png",
      local: "경남",
      name: "22년 수확 햇 사과 3kg...",
      price: "10,400원",
      value: "4.2",
      reviewCount: "73",
    },
    {
      product_id: "2",
      image: "/img/exam-2.png",
      local: "전북",
      name: "국내산 깐마늘 2kg...",
      price: "4,500원",
      value: "3.9",
      reviewCount: "146",
    },
    {
      product_id: "3",
      image: "/img/exam-3.png",
      local: "전남",
      name: "마늘팟 양파  3kg...",
      price: "6,600원",
      value: "4.6",
      reviewCount: "281",
    },
    {
      product_id: "4",
      image: "/img/exam-4.png",
      local: "충북",
      name: "청결 22년 햇 건고추 6kg",
      price: "80,000원",
      value: "4.8",
      reviewCount: "39",
    },
  ];

  return (
    <>
      <ProductTop>
        <ProductItemLeft>
          <h1>충청북도 상품</h1>
          <div>생명과 태양의 땅! 충청북도 입니다</div>
          <div>
            <select>
              <option>지역</option>
              <option>제주도</option>
            </select>
            <select>
              <option>종류</option>
              <option>지역 특산품</option>
            </select>
            <select>
              <option>가격</option>
              <option>50,000원 이상</option>
            </select>
          </div>
        </ProductItemLeft>
        <ProductItemRight
          src="/img/chungcheonbuk-do.svg"
          alt="이미지 없음"
        ></ProductItemRight>
      </ProductTop>
      <ProductBox>
        {/* {realValue.map((value, index) => {
          return <ProductItem key={index} data={value}></ProductItem>;
        })} */}

        {dummyData.map((value, index) => {
          return <ProductItem key={index} data={value}></ProductItem>;
        })}
      </ProductBox>
    </>
  );
};

export default AllProduct;
