import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductBox = styled.div`
  margin-top: 50px;
  width: 1000px;
  height: 200px;

  & > div {
    margin-top: 20px;
    width: 40px;
    height: 30px;
    background-color: lightgray;
    font-family: "SCD-4";
    font-size: 2rem;
    &:hover {
      color: red;
      cursor: pointer;
    }
  }

  & > a {
    display: flex;
    gap: 50px;
    & > {
      &:hover {
        font-weight: bold;
      }
    }

    & > img {
      width: 300px;
      height: 200px;
    }
    & > div {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-family: "SCD-4";
      & > div {
        font-size: 2rem;
      }
    }
  }
`;

const ProductItem = ({ data }) => {
  const removeProduct = async () => {
    let choice = window.confirm("상품을 삭제하시겠습니까?");
    if (choice === true) {
      let response = await axios.get(
        `http://localhost:8080/admin/product/delete/${data.product_key}`
      );
      if (response.data.status === 201) {
        alert("상품이 삭제되었습니다");
        window.location.reload();
      }
    }
  };
  return (
    <ProductBox>
      <Link to={`/product/detail/${data.product_key}`}>
        <img src={`http://localhost:8080/product/${data.product_image}`}></img>
        <div>
          <div>{data.product_local}</div>
          <div>{data.product_name}</div>
          <div>{data.product_price}원</div>
        </div>
      </Link>
      <div onClick={removeProduct}>삭제</div>
    </ProductBox>
  );
};

export default ProductItem;
