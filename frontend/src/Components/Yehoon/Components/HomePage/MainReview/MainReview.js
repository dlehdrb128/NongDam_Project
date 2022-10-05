import styled from "styled-components";
import { Theme } from "./../../../../../theme/theme";
import ReviewItem from "./ReviewItem";

// 메인 홈페이지 하단 리뷰의 최상위 부모 컨테이너
const MainReviewBox = styled.div`
  padding-top: 200px;
  width: 1280px;
  height: 800px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

// 많은분들이 농담과 함께해요, 후기가 증명하는 못난이 맛집을 담은 텍스트 박스
const MainReviewTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  /* 많은 분들이... */
  & > div:nth-child(1) {
    font-size: 4.4rem;
    font-family: "YANGJIN";
    color: ${Theme.green};
  }

  /* 후기가 증명... */
  & > div:nth-child(2) {
    font-size: 2rem;
    font-family: "SCD-4";
    color: ${Theme.gray};
  }
`;

// 리뷰 아이템들을 담은 박스
const MainReviewItemBox = styled.div`
  width: 1280px;
  height: 654px;
  display: flex;
  justify-content: space-between;
`;

// 슬라이더 고려해서 박스를 하나더 만든 뒤 감쌈
const ItemSliderBox = styled(MainReviewItemBox)``;

const MainReview = () => {
  let reviewData = [
    {
      product_id: "1",
      image: "/img/review-exam-1.png",
      userId: "sangho8241",
      reviewText:
        "하나씩 곪고 멍들어가서 어쩌나싶었는데🍎 쨈만들기가 생각나더라구요. 남는 과일은 청만들거나 쨈으로 만들어 놓으면 두고 먹을수 있으니까 만사 오케이!✌",
      productName: "충북 영동 꿀 사과 1호 7.5kg (9-10과)...",
    },
    {
      product_id: "2",
      image: "/img/review-exam-2.png",
      userId: "geunsoo1106",
      reviewText:
        "추황배는..이제 안나오나요..? ㅠㅠ 지난 설에 시기를 놓쳐서 신고배 주문해서 먹고 있는데 추황배도 먹어보고 싶네요... 무튼 신고배 맛있게 잘먹고 있어요.",
      productName: "중전마마 나주 배 1호 7.5kg (9-10과)...",
    },
    {
      product_id: "3",
      image: "/img/review-exam-3.png",
      userId: "yehoon1022",
      reviewText:
        "단단합니다 속이알차고 물러짐없이 단단합니다. 양파를많이소비하다보니 대량으로찾던중발견했는데 껍질도깨끗하네요. 잘먹겠습니다.",
      productName: "속이 단단한 나주 양파 3kg",
    },
  ];

  return (
    <MainReviewBox>
      <MainReviewTextBox>
        <div>많은 분들이 농담과 함께해요</div>
        <div>후기가 증명하는 못난이 맛집</div>
      </MainReviewTextBox>
      <MainReviewItemBox>
        <ItemSliderBox>
          {reviewData.map((value, index) => {
            return <ReviewItem key={index} data={value}></ReviewItem>;
          })}
        </ItemSliderBox>
      </MainReviewItemBox>
    </MainReviewBox>
  );
};

export default MainReview;
