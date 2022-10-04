import { useParams } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { productAll } from "../Slice/getData";
import styled from "styled-components";
import ProductPageTop from "./ProductPageTop";
import ProductCategory from "./ProductCategory";
import ProductDetail from "./ProductDetail";
import ProductReviewForm from "./ProductReviewForm";

const ProductPageBox = styled.div``;

const ProductPage = () => {
  const { id } = useParams();

  let dummyData = [
    {
      product_id: "1",
      store_name: "상호네 농장",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AJc5JmRvnF9TrzFhLZSAjuPA5lTWUZR1BwnyhXRf_dtKYTxj43HU5_7qQMQ1DTha-yR4HaZm-L_vvDw=w1920-h969",
      local: "경남",
      name: "22년 수확 햇 사과 3kg...",
      price: 10400,
      value: 4.2,
      reviewCount: "73",
      detailImage: "/img/ProductDetail/1-test.png",
      review: [
        {
          user: "Geunsoo",
          text: "빠른 배송 감사합니다^^ 엄마가 너무 맛있다며 껍질까지 다 먹었다고 하네요~~맛있게 잘 먹겠습니다!!",
          value: 4,
          date: "2022.09.22",
          image: ["/img/exam-1.png", "/img/exam-2.png", "/img/exam-3.png"],
        },
        {
          user: "yesli4278",
          text: "여태 사먹어본 그 어떤 곳 보다 품질도 맛도 좋았습니다. 재주문하러 가요.",
          value: 4,
          date: "2022.09.22",
          image: ["/img/exam-4.png", "/img/exam-1.png", "/img/exam-2.png"],
        },
        {
          user: "injung7714",
          text: "넘 맛있어요… 최고에요 또 시켜먹고 싶어요 또 시켜먹을게요",
          value: 5,
          date: "2022.09.22",
          image: ["/img/exam-3.png", "/img/exam-2.png", "/img/exam-4.png"],
        },
      ],
    },
    {
      product_id: "2",
      store_name: "상호네 농장",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AJc5JmTCW3_NGqzMcTA-7o6PUT5Jq3fJVrtyYPHr0tqJ5ASy-tXqQ0CCrlFQr5ipu3R6NEkeErB1fH8=w1298-h969",
      local: "전북",
      name: "국내산 깐마늘 2kg...",
      price: 4500,
      value: "3.9",
      reviewCount: "146",
      detailImage: undefined,
      review: [
        {
          user: "goodBoy",
          text: "빠른 배송 감사합니다^^ 엄마가 너무 맛있다며 껍질까지 다 먹었다고 하네요~~맛있게 잘 먹겠습니다!!",
          value: 2,
          date: "2022.09.22",
          image: ["/img/exam-1.png"],
        },
        {
          user: "awqszddf",
          text: "여태 사먹어본 그 어떤 곳 보다 품질도 맛도 좋았습니다. 재주문하러 가요.",
          value: 5,
          date: "2022.09.22",
          image: ["/img/exam-4.png"],
        },
      ],
    },
    {
      product_id: "3",
      store_name: "상호네 농장",
      image: "/img/exam-3.png",
      local: "전남",
      name: "마늘팟 양파  3kg...",
      price: 6600,
      value: "4.6",
      reviewCount: "281",
      detailImage: undefined,
      review: [
        {
          user: "sangho1231",
          text: "감사합니다^^ 엄마가 너무 맛있다며 껍질까지 다 먹었다고 하네요~~!!",
          value: 4,
          date: "2022.09.22",
          image: ["/img/exam-2.png", "/img/exam-3.png"],
        },
      ],
    },
    {
      product_id: "4",
      store_name: "상호네 농장",
      image: "/img/exam-4.png",
      local: "충북",
      name: "청결 22년 햇 건고추 6kg",
      price: 80000,
      value: "4.8",
      reviewCount: "39",
      detailImage: undefined,
      review: [
        {
          user: "Geunsoo",
          text: "빠른 배송 감사합니다^^ 엄마가 너무 맛있다며 껍질까지 다 먹었다고 하네요~~맛있게 잘 먹겠습니다!!",
          value: 4,
          date: "2022.09.22",
          image: ["/img/exam-1.png", "/img/exam-2.png", "/img/exam-3.png"],
        },
        {
          user: "yesli4278",
          text: "여태 사먹어본 그 어떤 곳 보다 품질도 맛도 좋았습니다. 재주문하러 가요.",
          value: 4,
          date: "2022.09.22",
          image: ["/img/exam-4.png", "/img/exam-1.png", "/img/exam-2.png"],
        },
        {
          user: "injung7714",
          text: "넘 맛있어요… 최고에요 또 시켜먹고 싶어요 또 시켜먹을게요",
          value: 5,
          date: "2022.09.22",
          image: ["/img/exam-3.png", "/img/exam-2.png", "/img/exam-4.png"],
        },
      ],
    },
  ];

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

  let ProductData;

  for (let key of dummyData) {
    if (id === key.product_id) {
      ProductData = key;
    }
  }

  return (
    <ProductPageBox>
      <ProductPageTop ProductData={ProductData}></ProductPageTop>
      <ProductCategory></ProductCategory>
      <ProductDetail data={ProductData}></ProductDetail>
      <ProductReviewForm data={ProductData}></ProductReviewForm>
    </ProductPageBox>
  );
};

export default ProductPage;
