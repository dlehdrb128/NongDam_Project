// import styled from "styled-components";
// import ProductItem from "./ProductItem";
// import { useEffect } from "react";
// import { productAll } from "../Slice/getData";
// import { useDispatch, useSelector } from "react-redux";

// const ProductTop = styled.div`
//   width: 1280px;
//   display: flex;
//   justify-content: space-between;
//   margin-top: 50px;
// `;

// const ProductItemLeft = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 40px;

//   & > h1 {
//     color: lightseagreen;
//     font-size: 2.5rem;
//   }

//   & > div:nth-child(2) {
//     font-size: 1.3rem;
//   }

//   & > div:nth-child(3) {
//     display: flex;
//     flex-direction: row;
//     gap: 50px;

//     & > select {
//       width: 150px;
//       height: 40px;
//       border-radius: 15px;
//       font-size: 1.3rem;
//       text-align: center;
//       font-weight: bold;
//       opacity: 60%;
//       &:hover {
//         cursor: pointer;
//         opacity: 100%;
//       }
//     }
//   }
// `;

// const ProductItemRight = styled.img``;

// const ProductBox = styled.div`
//   margin-top: 50px;
//   width: 1280px;
//   height: 800px;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   flex-wrap: wrap;
//   gap: 110px;
// `;

// const AllProduct = () => {
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

//   return (
//     <>
//       <ProductTop>
//         <ProductItemLeft>
//           <h1>충청북도 상품</h1>
//           <div>생명과 태양의 땅! 충청북도 입니다</div>
//           <div>
//             <select>
//               <option>지역</option>
//               <option>제주도</option>
//             </select>
//             <select>
//               <option>종류</option>
//               <option>지역 특산품</option>
//             </select>
//             <select>
//               <option>가격</option>
//               <option>50,000원 이상</option>
//             </select>
//           </div>
//         </ProductItemLeft>
//         <ProductItemRight
//           src="/img/chungcheonbuk-do.svg"
//           alt="이미지 없음"
//         ></ProductItemRight>
//       </ProductTop>
//       <ProductBox>
//         {realValue.map((value, index) => {
//           return <ProductItem key={index} data={value}></ProductItem>;
//         })}
//       </ProductBox>
//     </>
//   );
// };

// export default AllProduct;
