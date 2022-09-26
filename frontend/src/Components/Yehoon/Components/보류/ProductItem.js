// import { memo } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const ProductItemBox = styled.div`
//   & > a:link {
//     text-decoration: none;
//     color: black;
//   }
//   & > a:visited {
//     text-decoration: none;
//     color: black;
//   }
//   & > a:active {
//     text-decoration: none;
//     color: black;
//   }

//   & > a:nth-child(1) {
//     margin-top: 50px;
//     width: 350px;
//     height: 500px;
//     display: flex;
//     flex-direction: column;
//     gap: 10px;

//     & > img {
//       cursor: pointer;
//       width: 350px;
//       height: 300px;
//       border-radius: 10px;
//     }

//     & > div:nth-child(2) {
//       cursor: pointer;
//       margin-top: 15px;
//       color: green;
//       font-weight: bold;
//     }

//     & > div:nth-child(3) {
//       cursor: pointer;
//       font-size: 1.5rem;
//     }

//     & > div:nth-child(4) {
//       cursor: pointer;
//       margin-top: 50px;
//       display: flex;

//       & > div:nth-child(1) {
//         font-size: 2rem;
//         font-weight: bold;
//       }
//       & > div:nth-child(2) {
//         margin-left: 15px;
//         & > div:nth-child(1) {
//           color: yellowgreen;
//           font-weight: bold;
//         }

//         & > div:nth-child(2) {
//           font-weight: bold;
//         }
//       }
//     }
//   }
// `;

// const ProductItem = ({ data }) => {
//   return (
//     <ProductItemBox>
//       <Link to={`/product/${data.product_id}`}>
//         <img src={data.image} alt="이미지 없음"></img>
//         <div>{data.local}</div>
//         <div>{data.name}</div>
//         <div>
//           <div>{data.price}</div>
//           <div>
//             <div>★ {data.value} / 5</div>
//             <div>리뷰 {data.reviewCount}</div>
//           </div>
//         </div>
//       </Link>
//     </ProductItemBox>
//   );
// };

// export default memo(ProductItem);
