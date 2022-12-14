import styled from "styled-components";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ReviewParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div:nth-child(1) {
    width: 1265px;
    height: 100px;
    border-bottom: 2px solid ${({ theme }) => theme.gray};
    font-size: 3rem;
    font-family: YANGJIN;
    color: ${({ theme }) => theme.lightblack};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ReviewMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div:nth-child(1) {
    width: 1265px;
    height: 100px;
    font-size: 2.5rem;
    font-family: YANGJIN;
    color: ${({ theme }) => theme.lightblack};
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  & > div:nth-child(2) {
    width: 1265px;
    height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
`;
const TitleGuide = styled.div`
  width: 620px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > div:nth-child(1) {
    & > h2 {
      font-size: 2rem;
      font-family: YANGJIN;
      color: ${({ theme }) => theme.lightblack};
      margin-bottom: 10px;
    }
    & > input {
      width: 620px;
      height: 50px;
      border: none;
      border-radius: 10px;
      background-color: #eee;
      padding-left: 10px;
      font-size: 1.5rem;
      font-family: SCD-3;
    }
  }
  & > div:nth-child(2) {
    & > h2 {
      font-size: 2rem;
      font-family: YANGJIN;
      color: ${({ theme }) => theme.lightblack};
      margin-bottom: 10px;
    }
    & > textarea {
      width: 620px;
      height: 350px;
      resize: none;
      border: none;
      border-radius: 10px;
      background-color: #eee;
      padding-left: 10px;
      padding-top: 10px;
      font-size: 1.5rem;
      font-family: SCD-3;
    }
  }
`;
const ImgFile = styled.label`
  width: 620px;
  height: 500px;
  border-radius: 10px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background-color: ${({ theme }) => theme.orange};
  }
  & > img {
    color: ${({ theme }) => theme.gray};
    width: inherit;
    height: inherit;
    border-radius: 10px;
  }
  & > div {
    font-size: 3rem;
    font-family: SCD-5;
    color: ${({ theme }) => theme.gray};
  }
`;
const Ingredient = styled.div`
  width: 1265px;
  margin-bottom: 20px;
  & > h2 {
    font-size: 2rem;
    font-family: YANGJIN;
    color: ${({ theme }) => theme.lightblack};
    margin-bottom: 10px;
  }
  & > input {
    width: inherit;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: #eee;
    padding-left: 10px;
    font-size: 1.5rem;
    font-family: SCD-3;
  }
`;
const Tip = styled.div`
  width: 1265px;
  margin-bottom: 20px;
  & > h2 {
    font-size: 2rem;
    font-family: YANGJIN;
    color: ${({ theme }) => theme.lightblack};
    margin-bottom: 10px;
  }
  & > input {
    width: inherit;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: #eee;
    padding-left: 10px;
    font-size: 1.5rem;
    font-family: SCD-3;
  }
`;
const CookImg = styled.div`
  width: 1265px;
  height: 380px;
  border-bottom: 2px solid ${({ theme }) => theme.gray};
  & > h2 {
    font-size: 2rem;
    font-family: YANGJIN;
    color: ${({ theme }) => theme.lightblack};
    margin-bottom: 10px;
  }
  & > div:nth-child(2) {
    display: flex;
    margin-left: 95px;
    gap: 230px;
    align-items: flex-end;
    width: inherit;
  }
`;
const UploadImg = styled.div`
  margin-bottom: 30px;
  width: 100px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.gray};
  & > label {
    width: 100px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    font-family: SCD-7;

    &:hover {
      transition: 0.5s;
      transform: rotate(360deg);
    }
  }

  &:hover {
    cursor: pointer;
  }

  & > * {
    :hover {
      cursor: pointer;
    }
  }
`;
// const AllUploadImg = styled.div`
//   width: 200px;
//   height: 50px;
//   border-radius: 10px;
//   background-color: ${({ theme }) => theme.green};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: ${({ theme }) => theme.gray};
//   & > label {
//     font-size: 3rem;
//     font-family: SCD-5;
//     color: ${({ theme }) => theme.realWhite};
//   }
// `;
const FinishButton = styled.div`
  width: 1265px;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  & > button {
    border: none;
    width: 100px;
    height: 50px;
    font-size: 1.5rem;
    font-family: SCD-5;
    color: ${({ theme }) => theme.realWhite};

    &:hover {
      cursor: pointer;
    }
  }
  & > button:nth-child(1) {
    background-color: ${({ theme }) => theme.green};
    margin-right: 10px;
  }
  & > button:nth-child(2) {
    background-color: ${({ theme }) => theme.orange};
  }
`;

const ImgBox = styled.div`
  display: flex;
  gap: 100px;
  margin-left: 30px;
`;

const ImgStyled = styled.img`
  width: 230px;
  height: 210px;
  border-radius: 10px;
`;

const RecipeCreateReview = () => {
  const navigate = useNavigate();
  const timestamp = () => {
    let today = new Date();
    today.setHours(today.getHours() + 9);
    return today.toISOString().replace("T", " ").substring(0, 19);
  };
  const [upload, setUpload] = useState(null);
  const [img, setImg] = useState("");
  const [imgPath, setImgPath] = useState("");
  const [data, setData] = useState({
    user_key: null,
    user_auth: null,
    recipe_title: null,
    recipe_guide: null,
    recipe_ingredient: null,
    recipe_tip: null,
    recipe_created_date: timestamp(),
    recipe_views: 0,
    recipe_value: 0,
    recipe_image_path: null,
    recipe_image_path_2: null,
    recipe_image_path_3: null,
    recipe_image_path_4: null,
    recipe_image_path_5: null,
  });

  useEffect(() => {
    const loginCheck = async () => {
      try {
        let response = await axios.get("http://localhost:8080/login/check", {
          withCredentials: true,
        });
        if (response.data.status === 201) {
          setData({
            ...data,
            user_key: response.data.userInfo.user_key,
            user_auth: response.data.userInfo.user_auth,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    loginCheck();
  }, [data.user_auth]);

  const ImgUpload = async (input, id) => {
    if (input.files && input.files[0]) {
      let save = input.files[0];
      let reader = new FileReader();
      const formData = new FormData();
      formData.append("img", save);

      const request = await axios.post(
        `http://localhost:8080/recipe/newRecipeImage`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      reader.onload = (e) => {
        document.getElementById(id).src = e.target.result;
        switch (id) {
          case "img1":
            setData({
              ...data,
              recipe_image_path_2: request.data.imgPath,
            });
            break;
          case "img2":
            setData({
              ...data,
              recipe_image_path_3: request.data.imgPath,
            });
            break;
          case "img3":
            setData({
              ...data,
              recipe_image_path_4: request.data.imgPath,
            });
            break;
          case "img4":
            setData({
              ...data,
              recipe_image_path_5: request.data.imgPath,
            });
            break;

          default:
            break;
        }
      };
      reader.readAsDataURL(input.files[0]);
      if (id === "mainImg") {
        setUpload(true);
        setData({
          ...data,
          recipe_image_path: request.data.imgPath,
        });
      }
    } else {
      document.getElementById(id).src = null;
      if (id === "mainImg") {
        setUpload(null);
        setData({ ...data, recipe_image_path: null });
      }
    }
  };

  const cancel = () => {
    let choice = window.confirm("?????? ????????? ?????????????????????????");
    if (choice === true) {
      alert("?????? ????????? ?????? ???????????????");
      navigate("/recipe");
    }
  };

  const createRecipe = async () => {
    console.log(data);
    if (
      data.recipe_title === null ||
      data.recipe_guide === null ||
      data.recipe_tip === null ||
      data.recipe_ingredient === null ||
      data.recipe_image_path === null ||
      data.recipe_image_path_2 === null
    ) {
      alert("???????????? ???????????????");
    } else {
      let response = await axios.post(
        "http://localhost:8080/recipe/recipeCreateReview/upload",
        data,
        { withCredentials: true }
      );
      if (response.data.status === 201) {
        alert("?????? ????????? ?????????????????????");
        navigate("/recipe");
        window.location.reload();
      }
    }
  };

  return (
    <ReviewParent>
      {/* ?????? ?????? */}
      <div>????????? ??????</div>
      {/* ?????? */}
      <ReviewMain>
        {/* ?????? */}
        <div>????????? ??????</div>
        <div>
          {/* ????????? ??????, ????????????, ?????????????????? */}
          <TitleGuide>
            {/* ????????? ??????, ???????????? */}
            <div>
              <h2>????????? ??????</h2>
              <input
                type={"text"}
                placeholder={"???) ???????????? ?????????"}
                name="title"
                onChange={(e) => {
                  setData({ ...data, recipe_title: e.target.value });
                }}
              ></input>
            </div>
            <div>
              <h2>????????????</h2>
              <textarea
                type={"text"}
                placeholder={
                  "???) ?????? ?????? ???????????? ??????????????? ???????????? ????????? ????????? ????????? ?????? ??????????????? ^^"
                }
                name="guide"
                onChange={(e) => {
                  setData({ ...data, recipe_guide: e.target.value });
                }}
              ></textarea>
            </div>
          </TitleGuide>
          <div>
            <ImgFile htmlFor="main-img">
              {/* ?????? ?????? ?????? */}

              {upload !== null ? (
                <img src={null} id="mainImg" alt="?????????"></img>
              ) : null}

              {upload !== null ? null : <div>?????? ???????????? ?????????????????????</div>}
              {/* ????????? ?????? */}
            </ImgFile>
            <input
              type="file"
              id="main-img"
              style={{ display: "none" }}
              accept="image/jpeg,gif,png,jpg"
              onChange={(e) => {
                ImgUpload(e.target, "mainImg");
              }}
            ></input>
          </div>
        </div>
        <Ingredient>
          {/* ?????? */}
          <h2>??????</h2>
          <input
            type={"text"}
            placeholder={"???) #?????? #?????? #????????? #???????????? #?????????"}
            name="ingredient"
            onChange={(e) => {
              setData({ ...data, recipe_ingredient: e.target.value });
            }}
          ></input>
        </Ingredient>
        <Tip>
          <h2>?????????</h2>
          <input
            type={"text"}
            placeholder={
              "???) ????????? ????????? ??? ?????? ????????? ??????????????? ????????? ??? ????????????."
            }
            name="tip"
            onChange={(e) => {
              setData({ ...data, recipe_tip: e.target.value });
            }}
          ></input>
        </Tip>
        <CookImg>
          {/* ?????? ?????? ?????? */}
          <h2>?????? ????????????</h2>
          <div>
            {/* ?????? ????????? */}
            <UploadImg>
              {/* ????????? ?????? */}

              <label htmlFor="fileUp1">+</label>
              <input
                type="file"
                id="fileUp1"
                accept="image/jpeg,gif,png,jpg"
                style={{ display: "none" }}
                onChange={(e) => {
                  ImgUpload(e.target, "img1");
                }}
              ></input>
            </UploadImg>
            <UploadImg>
              {/* ????????? ?????? */}

              <label htmlFor="fileUp2">+</label>
              <input
                type="file"
                id="fileUp2"
                accept="image/jpeg,gif,png,jpg"
                style={{ display: "none" }}
                onChange={(e) => {
                  ImgUpload(e.target, "img2");
                }}
              ></input>
            </UploadImg>{" "}
            <UploadImg>
              {/* ????????? ?????? */}
              <label htmlFor="fileUp3">+</label>
              <input
                type="file"
                id="fileUp3"
                accept="image/jpeg,gif,png,jpg"
                style={{ display: "none" }}
                onChange={(e) => {
                  ImgUpload(e.target, "img3");
                }}
              ></input>
            </UploadImg>{" "}
            <UploadImg>
              {/* ????????? ?????? */}
              <label htmlFor="fileUp4">+</label>
              <input
                type="file"
                accept="image/jpeg,gif,png,jpg"
                id="fileUp4"
                style={{ display: "none" }}
                onChange={(e) => {
                  ImgUpload(e.target, "img4");
                }}
              ></input>
            </UploadImg>
          </div>
          <ImgBox>
            <ImgStyled alt="????????? ??????" id="img1"></ImgStyled>
            <ImgStyled alt="????????? ??????" id="img2"></ImgStyled>
            <ImgStyled alt="????????? ??????" id="img3"></ImgStyled>
            <ImgStyled alt="????????? ??????" id="img4"></ImgStyled>
          </ImgBox>
        </CookImg>
        <FinishButton>
          <button onClick={createRecipe}>??????</button>
          <button onClick={cancel}>??????</button>
        </FinishButton>
      </ReviewMain>
    </ReviewParent>
  );
};
export default RecipeCreateReview;
