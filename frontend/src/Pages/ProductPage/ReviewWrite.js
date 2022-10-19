import styled from "styled-components";
import { useState } from "react";
import { StyledButton } from "../../Theme/theme";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 새로운 리뷰를 작성하는 요소들을 담은 박스
const ReviewWriteBox = styled.div`
  width: 1250px;
  height: 125px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div:nth-child(2) {
    display: flex;
    gap: 100px;
    align-items: center;
  }
`;

// 별점 설정 박스
const ValueBox = styled.div`
  width: 125px;
  display: flex;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;

// 리뷰 작성 Input 속성
let TextInput = styled.input`
  width: 985px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.lightblack};
  font-size: 1.5rem;
  font-family: "SCD-3";
  padding-left: 10px;
`;

const ReviewWrite = ({ productKey, data }) => {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [input, setInput] = useState();
  const [image, setImage] = useState([null, null, null]);
  const navigate = useNavigate();

  const timestamp = () => {
    let today = new Date();
    today.setHours(today.getHours() + 9);
    return today.toISOString().replace("T", " ").substring(0, 19);
  };

  let value = [1, 2, 3, 4, 5];
  let product_Key;

  productKey === undefined
    ? (product_Key = data[0].product_key)
    : (product_Key = productKey);

  let starRating = value.map((el) => {
    return (
      <img
        src={
          hovered >= el || clicked >= el
            ? "http://localhost:8080/productDetail/star-fill.png"
            : "http://localhost:8080/productDetail/star-outline.png"
        }
        key={el}
        onMouseEnter={() => setHovered(el)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setClicked(el)}
        alt="이미지 없음"
      />
    );
  });

  const postReview = async (type) => {
    if (clicked === 0 || input === undefined) {
      alert("리뷰를 입력하시거나 평점을 설정해주세요");
      return;
    }

    try {
      let response = await axios.get("http://localhost:8080/login/check", {
        withCredentials: true,
      });

      if (response.data.status === 201) {
        let userData = response.data.userInfo;

        let reviewinfo = {
          product_key: Number(product_Key),
          user_key: Number(userData.user_key),
          user_auth: userData.user_auth,
          user_id: userData.user_id,
          review_value: Number(clicked),
          review_text: input,
          review_post_date: timestamp(),
          review_image: image[0],
          review_image_2: image[1],
          review_image_3: image[2],
        };

        switch (type) {
          case "get":
            break;

          case "post":
            let send = await axios.post(
              "http://localhost:8080/product/review/write",
              reviewinfo,
              { withCredentials: true }
            );

            if (send.data.status === 201) {
              alert("리뷰 작성 완료");
              navigate(`/product/detail/${product_Key}`);
            }

            break;

          default:
            break;
        }
      } else if (response.data.status === 401) {
        alert("리뷰는 일반회원만 작성하실 수 있습니다");
        navigate("/login");
      }
    } catch (error) {}
  };

  return (
    <ReviewWriteBox>
      <ValueBox>{starRating}</ValueBox>
      <div>
        <TextInput
          placeholder="리뷰를 입력해주세요"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></TextInput>
        <StyledButton
          wd="125px"
          ht="40px"
          fs="2rem"
          fontFamily="SCD-6"
          onClick={() => {
            postReview("post");
          }}
        >
          작성
        </StyledButton>
      </div>
    </ReviewWriteBox>
  );
};

export default ReviewWrite;
