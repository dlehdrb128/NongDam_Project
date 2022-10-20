import styled from "styled-components";

// 제품 후기 아이템을 담은 박스
const ReviewItemBox = styled.div`
  width: 1280px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  /* 후기 텍스트, 이미지를 담은 박스  */
  & > div:nth-child(2) {
    width: 95%;
    height: 95%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;

    /* 후기 텍스트 설정 */
    & > div:nth-child(1) {
      font-family: "SCD-3";
      font-size: 1.8rem;
      color: ${({ theme }) => theme.lightblack};
    }

    /* 후기 이미지 들을 담은 박스 */
    & > div:nth-child(2) {
      display: flex;
      gap: 30px;

      /* 후기 이미지 규격 설정 */
      & > img {
        width: 188px;
        height: 152px;
        border-radius: 10px;
      }
    }
  }
`;

// 후기 정보 (id, 별점, 작성 날짜)를 담은 박스
const InforMation = styled.div`
  width: 1280px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.lightblack};
  border-radius: 10px;

  /* 유저 id */
  & > div:nth-child(1) {
    font-family: "SCD-6";
    font-size: 2rem;
    margin-left: 20px;
  }

  /* 별점, 날짜를 담은 박스 */
  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    gap: 10px;

    /* 별점 */
    & > div:nth-child(1) {
      font-family: "SCD-6";
      padding-top: 3px;
      display: flex;
      align-items: center;
      font-size: 1rem;
    }

    /* 날짜 */
    & > div:nth-child(2) {
      font-family: "SCD-6";
      font-size: 1.5rem;
    }
  }
`;

const ProductReview = ({ data }) => {
  let imageArray = [];
  let reviewImage;

  for (let key in data) {
    if (
      data[key] !== "null" &&
      key[8] === "m" &&
      typeof data[key] !== "number"
    ) {
      imageArray.push(data[key]);
    }
  }

  if (data.review_image !== null) {
    reviewImage = imageArray.map((value, index) => {
      if (value === null) {
        return;
      }
      return (
        <img
          key={index}
          src={`http://localhost:8080/review/${value}`}
          alt="이미지 없음"
        ></img>
      );
    });
  }

  const newDate = data.review_post_date.split("T");

  return (
    <ReviewItemBox>
      <InforMation>
        <div>{data.review_user_id}</div>
        <div>
          <div>
            <img
              src="http://localhost:8080/productDetail/star-fill.png"
              alt="이미지 없음"
            ></img>
            {data.review_value} / 5
          </div>
          <div>{newDate[0]}</div>
        </div>
      </InforMation>
      <div>
        <div>{data.review_text}</div>
        <div>{reviewImage}</div>
      </div>
    </ReviewItemBox>
  );
};

export default ProductReview;
