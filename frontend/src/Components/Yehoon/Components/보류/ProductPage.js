// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { productAll } from "../Slice/getData";
// import styled from "styled-components";

// const ProductPageTop = styled.div`
//   width: 1280px;
//   height: 500px;
//   margin-top: 50px;
//   display: flex;
//   gap: 100px;
// `;

// const ProductPageTopLeft = styled.div`
//   width: 45%;
//   height: 100%;

//   & > img {
//     width: 100%;
//     height: inherit;
//     border-radius: 20px;
//   }
// `;

// const ProductPageTopRight = styled.div`
//   width: 50%;
//   height: 100%;

//   & > div:nth-child(1) {
//     color: lightseagreen;
//     font-weight: bold;
//     font-size: 1.3rem;
//   }
//   & > div:nth-child(2) {
//     font-weight: bold;
//     font-size: 1.5rem;
//   }
//   & > div:nth-child(3) {
//     margin-top: 50px;
//     font-weight: bold;
//     font-size: 3rem;
//   }

//   & > div:nth-child(4) {
//     margin-top: 50px;
//   }

//   & > div:nth-child(5) {
//     margin-top: 30px;
//     display: flex;
//     flex-direction: row;
//     font-size: 2rem;
//     font-weight: bold;
//     gap: 50px;

//     & > button {
//       cursor: pointer;
//       width: 50px;
//       height: 50px;
//       font-weight: bold;
//       font-size: 2.5rem;
//       border-radius: 40px;
//       border: 0px solid white;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       &:hover {
//         background-color: lightgreen;
//       }
//     }

//     & > button:nth-child(1) {
//       padding-bottom: 10px;
//       font-size: 3rem;
//     }
//   }

//   & > div:nth-child(6) {
//     display: flex;
//     flex-direction: row;

//     gap: 50px;

//     & > div {
//       cursor: pointer;
//       width: 40%;
//       height: 80px;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       font-size: 2rem;
//       margin-top: 90px;

//       &:hover {
//         border-radius: 20px;
//       }
//     }

//     & > div:nth-child(1) {
//       background-color: #80c342;
//       color: white;
//     }

//     & > div:nth-child(2) {
//       border: 1px solid black;
//     }
//   }
// `;

// const ProductPage = () => {
//   const { id } = useParams();
//   const [count, setCount] = useState(0);

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

//   let ProductData = realValue.filter((value) => {
//     return value.product_id === Number(id);
//   });

//   if (status === "loading") {
//     return null;
//   }

//   const up = () => {
//     if (count > 0) {
//       setCount((count) => count - 1);
//     }
//   };

//   const down = () => {
//     setCount((count) => count + 1);
//   };

//   return (
//     <>
//       <ProductPageTop>
//         <ProductPageTopLeft>
//           <img src={ProductData[0].image} alt="데이터를 찾을 수 없습니다"></img>
//         </ProductPageTopLeft>
//         <ProductPageTopRight>
//           <div>[{ProductData[0].local}]</div>
//           <div>{ProductData[0].name}</div>
//           <div>{ProductData[0].price}</div>
//           <div>수량</div>
//           <div>
//             <button onClick={up}>-</button>
//             <div>{count}</div>
//             <button onClick={down}>+</button>
//           </div>
//           <div>
//             <div>구매하기</div>
//             <div>장바구니</div>
//           </div>
//         </ProductPageTopRight>
//       </ProductPageTop>
//     </>
//   );
// };

// export default ProductPage;
