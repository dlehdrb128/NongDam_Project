import { useParams } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// // import { productAll } from "../Slice/getData";
import styled from "styled-components";
import Theme from "./../../../../theme/theme";

const ProductPageTop = styled.div`
  width: 1280px;
  height: 500px;
  margin-top: 200px;
  display: flex;
  gap: 100px;
`;

const ProductPageTopLeft = styled.div`
  width: 45%;
  height: 100%;

  & > img {
    width: 546px;
    height: 567px;
    height: inherit;
    border-radius: 10px;
  }
`;

const ProductPageTopRight = styled.div`
  width: 50%;
  height: 100%;

  & > div:nth-child(1) {
    font-family: "SCD-3";
    font-size: 2rem;
    color: ${Theme.lightblack};
  }
  & > div:nth-child(2) {
    margin-top: 25px;
    font-family: "SCD-6";
    font-size: 3rem;
    color: ${Theme.green};
  }
  & > div:nth-child(3) {
    font-family: "SCD-6";
    font-size: 3rem;
    color: ${Theme.lightblack};
  }

  & > hr {
    border: 1px solid ${Theme.lightgray};
    margin-top: 25px;
  }

  & > div:nth-child(5) {
    font-family: "SCD-7";
    font-size: 4rem;
    color: ${Theme.lightblack};
    padding-top: 30px;
  }
`;

const ProductPageCountBox = styled.div`
  width: 625px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Theme.white};
  margin-top: 30px;

  & > div:nth-child(1) {
    margin-left: 30px;
    font-family: "SCD-6";
    font-size: 1.9rem;
  }

  & > div:nth-child(2) {
    width: 370px;
    height: 31px;
    display: flex;
    margin-right: 30px;
    justify-content: space-between;
    background-color: ${Theme.realWhite};
    border: 1px solid ${Theme.lightgray};

    & > button {
      width: 31px;
      height: 31px;
      background-color: ${Theme.realWhite};
      border: 1px solid ${Theme.lightgray};
      font-size: 2.4rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: pointer;
      }
    }

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "SCD-3";
      font-size: 1.7rem;
      color: ${Theme.gray};
    }
  }
`;

const ProductPageTotalPrice = styled.div`
  margin: 30px 30px 0px 30px;

  display: flex;
  justify-content: space-between;

  & > div:nth-child(1) {
    font-family: "SCD-6";
    font-size: 1.7rem;
    color: ${Theme.lightblack};
  }
  & > div:nth-child(2) {
    display: flex;
    font-family: "SCD-6";
    font-size: 2.9rem;
  }
`;

const ProductPageButton = styled.div``;

const ProductPage = () => {
  const { id } = useParams();
  const [count, setCount] = useState(0);
  let dummyData = [
    {
      product_id: "1",
      store_name: "상호네 농장",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AJc5JmRvnF9TrzFhLZSAjuPA5lTWUZR1BwnyhXRf_dtKYTxj43HU5_7qQMQ1DTha-yR4HaZm-L_vvDw=w1920-h969",
      local: "경남",
      name: "22년 수확 햇 사과 3kg...",
      price: "10,400원",
      value: "4.2",
      reviewCount: "73",
    },
    {
      product_id: "2",
      store_name: "상호네 농장",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AJc5JmTCW3_NGqzMcTA-7o6PUT5Jq3fJVrtyYPHr0tqJ5ASy-tXqQ0CCrlFQr5ipu3R6NEkeErB1fH8=w1298-h969",
      local: "전북",
      name: "국내산 깐마늘 2kg...",
      price: "4,500원",
      value: "3.9",
      reviewCount: "146",
    },
    {
      product_id: "3",
      store_name: "상호네 농장",
      image: "/img/exam-3.png",
      local: "전남",
      name: "마늘팟 양파  3kg...",
      price: "6,600원",
      value: "4.6",
      reviewCount: "281",
    },
    {
      product_id: "4",
      store_name: "상호네 농장",
      image: "/img/exam-4.png",
      local: "충북",
      name: "청결 22년 햇 건고추 6kg",
      price: "80,000원",
      value: "4.8",
      reviewCount: "39",
    },
  ];

  console.log(id);

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

  const up = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const down = () => {
    setCount((count) => count + 1);
  };

  let ProductData;

  for (let key of dummyData) {
    if (id === key.product_id) {
      ProductData = key;
    }
  }

  return (
    <>
      <ProductPageTop>
        <ProductPageTopLeft>
          <img src={ProductData.image} alt="데이터를 찾을 수 없습니다"></img>
        </ProductPageTopLeft>
        <ProductPageTopRight>
          <div>{ProductData.store_name}</div>
          <div>[{ProductData.local}]</div>
          <div>{ProductData.name}</div>
          <hr></hr>
          <div>{ProductData.price}</div>
          <ProductPageCountBox>
            <div>수량</div>
            <div>
              <button onClick={up}>-</button>
              <div>{count}</div>
              <button onClick={down}>+</button>
            </div>
          </ProductPageCountBox>
          <ProductPageTotalPrice>
            <div>총 합계금액 (수량) :</div>
            <div>
              <div>10,200원</div>
              <div>(1개)</div>
            </div>
          </ProductPageTotalPrice>
          <ProductPageButton>
            <div>구매하기</div>
            <div>장바구니</div>
          </ProductPageButton>
        </ProductPageTopRight>
      </ProductPageTop>
    </>
  );
};

export default ProductPage;
