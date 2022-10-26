import styled from "styled-components";
import RecipeItem from "./recipeItem";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const RecipeParent = styled.div`
  /* 레시피 페이지 전체 부모 설정값 */
  width: 1230px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > div:nth-child(1) {
    /* head부분 전체 설정(이번주 추천레시피, 뭐가땡기나요, 이번주 채소, 과일목록) */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1230px;
    height: 600px;
    & > div:nth-child(1) {
      /* 이번주 추천 레시피 전체 설정 */
      & > h1 {
        /* 제목 폰트 */
        font-size: 3rem;
        font-family: YANGJIN;
        color: ${({ theme }) => theme.lightblack};
      }
    }
    & > div:nth-child(2) {
      /* (뭐가땡기나요/ 이번주 채소, 과일목록) 전체 설정 */
      height: 550px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      & > div:nth-child(2) {
        & > h1 {
          /* 제목 폰트 */
          font-size: 3rem;
          font-family: YANGJIN;
          color: ${({ theme }) => theme.lightblack};
        }
      }
    }
  }
  & > div:nth-child(2) {
    /* 밑에 게시글 */
    width: 1030px;
    margin-top: 50px;
  }
  & > div:nth-child(4) {
    width: 1230px;
    display: flex;
    justify-content: end;
    align-items: flex-end;
  }
`;
const PostPage = styled.div`
  /* 게시글 전체 설정 */
  width: 1030px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: center;
  padding-top: 50px;
  gap: 30px;
`;
const ImgWrapper = styled.div`
  /* 이번주 추천 레시피 배경이미지, 추천레시피 당첨 게시글 폰트 */

  background-size: cover;
  width: 600px;
  height: 500px;
  & > div {
    width: inherit;
    height: inherit;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-start;
    color: ${({ theme }) => theme.realWhite};
    text-shadow: -0.5px 0 #000, 0 1px #000, 1px 0 #000, 0 -2px #000;

    & > h2 {
      font-size: 3rem;
      font-family: SCD-5;
    }
    & > h3 {
      font-size: 2.5rem;
      font-family: SCD-3;
      display: flex;
      align-items: center;
    }
    & > p {
      font-size: 2rem;
      font-family: SCD-3;
    }
  }
`;
const WantSearch = styled.div`
  /* 뭐가 땡기나요 검색창 설정 */
  & > h1 {
    font-family: YANGJIN;
    font-size: 3rem;
    color: ${({ theme }) => theme.lightblack};
  }
  & > div:nth-child(2) {
    display: flex;
    & > input {
      width: 500px;
      height: 50px;
      padding-left: 10px;
      font-size: 2rem;
      font-family: SCD-3;
      color: ${({ theme }) => theme.lightblack};
      border: 2px solid ${({ theme }) => theme.gray};
    }
    & > button {
      width: 50px;
      height: 50px;
      border: 1px solid ${({ theme }) => theme.gray};
      background-color: ${({ theme }) => theme.gray};
      & > img {
        width: 33px;
        height: 33px;
        filter: invert();
      }
    }
    & > button:hover {
      border: 1px solid ${({ theme }) => theme.lightgray};
      background-color: ${({ theme }) => theme.lightgray};
    }
  }
`;
const FruitVegetable = styled.div`
  /* 이번주 추천 채소, 과일 페이지 설정 */
  width: 550px;
  height: 350px;
  border: 2px solid ${({ theme }) => theme.gray};
  border-radius: 10px;
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  & > button {
    width: 200px;
    height: 100px;
    padding-top: 5px;
    background-color: ${({ theme }) => theme.green};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.realWhite};
    font-size: 3rem;
    font-family: YANGJIN;
  }
  & > button:hover {
    background-color: ${({ theme }) => theme.orange};
  }
`;
const TitleButton = styled.div`
  /* 총 000개의 맛있는 레시피가 있습니다, 최신순/추천순 버튼 */
  width: 1030px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  & > h2 {
    font-size: 3rem;
    font-family: YANGJIN;
    color: ${({ theme }) => theme.lightblack};
    & > span {
      font-size: inherit;
      color: ${({ theme }) => theme.green};
    }
  }
  & > div {
    display: flex;
    & > button {
      width: 150px;
      height: 50px;
      border: 2px solid ${({ theme }) => theme.gray};
      background-color: ${({ theme }) => theme.gray};
      color: ${({ theme }) => theme.realWhite};
      font-family: SCD-5;
      font-size: 2rem;
    }
    & > button:hover {
      background-color: ${({ theme }) => theme.green};
      border: 1px solid ${({ theme }) => theme.green};
    }
  }
`;

const FooterButton = styled.div`
  /* 게시글 다음/이전 페이지 이동 버튼 */
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > button {
    width: 50px;
    height: 50px;
    margin: 5px;
    margin-top: 100px;
    border: 1px solid ${({ theme }) => theme.lightgray};
    background-color: ${({ theme }) => theme.realWhite};
    color: ${({ theme }) => theme.lightblack};
    font-size: 1.5rem;
    font-family: SCD-3;
  }
`;
const CreateLink = styled.a`
  width: 200px;
  height: 50px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.green};
  color: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-family: SCD-5;
  &:hover {
    background-color: ${({ theme }) => theme.orange};
    color: white;
  }
`;
const Recipe = () => {
  const [data, setData] = useState();
  const [login, setLogin] = useState();
  const img = useRef();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loginCheck = async () => {
      try {
        let response = await axios.get("http://localhost:8080/login/check", {
          withCredentials: true,
        });
        if (response.data.status === 201) {
          setUserData(response.data.userInfo);
        }
      } catch (err) {
        console.log(err);
      }
    };
    loginCheck();
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(`http://localhost:8080/recipe/`, {
          withCredentials: true,
        });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  useEffect(() => {
    const getLogin = async () => {
      try {
        let loginCheck = await axios.get(`http://localhost:8080/login/check`, {
          withCredentials: true,
        });
        setLogin(loginCheck.data);
      } catch (error) {
        console.log(error);
      }
    };
    getLogin();
  }, []);
  if (login === undefined) {
    return null;
  }
  if (data === undefined) {
    return null;
  }

  let topRecipe = data[1][0];
  console.log(login.status);
  return (
    <RecipeParent>
      {/* 레시피 페이지 전체 부모 설정값 */}
      <div>
        {/* 해드 */}
        <div>
          <h1>이번주 추천 레시피</h1>
          <br />
          <Link to={`/recipe/post/${topRecipe.recipe_key}`}>
            <ImgWrapper
              style={{
                backgroundImage: `url(
                http://localhost:8080/recipe/${topRecipe.recipe_image_path}
              )`,
              }}
            >
              {/* 이번주 추천 레시피 배경이미지, 추천레시피 당첨 게시글 폰트 */}
              <div>
                <h2>{topRecipe.recipe_title}</h2>
                <h3>
                  &nbsp;{topRecipe.user_id}
                  {/* 게시글 작성자 프로필 */}
                </h3>
                <p>⭐({topRecipe.recipe_value})/5</p>
              </div>
            </ImgWrapper>
          </Link>
        </div>
        <div>
          <WantSearch>
            {/* 뭐가 땡기나요 검색창 설정 */}
            <h1>뭐가 땡기나요?</h1>
            &nbsp;
            <div>
              <input type={"text"} placeholder="검색어 입력"></input>
              <button>
                <img
                  src="http://localhost:8080/icon/검색아이콘.png"
                  alt="검색"
                ></img>
              </button>
            </div>
          </WantSearch>
          <div>
            <h1>이번주 채소, 과일목록</h1>
            &nbsp;
            <FruitVegetable>
              {/* 이번주 추천 채소, 과일 페이지 설정 */}
              <button>두리안</button>
              <button>불로초</button>
              <button>산삼</button>
              <button>코코넛</button>
            </FruitVegetable>
          </div>
        </div>
      </div>
      <div>
        {/* 밑에 게시물 부모 */}
        <TitleButton>
          {/* 총 000개의 맛있는 레시피가 있습니다, 최신순/추천순 버튼 */}
          <h2>
            총 <span>{data[0].length}</span>개의 맛있는 레시피가 있읍니다.
          </h2>
          <div>
            <button>최신순</button>
            &nbsp;
            <button>인기순</button>
          </div>
        </TitleButton>
        <PostPage>
          {/* 게시글 전체 설정 */}
          {data[0].map((value, index) => {
            return <RecipeItem recipe={value} key={index}></RecipeItem>;
          })}
        </PostPage>
      </div>
      <div>
        <FooterButton>
          {/* 게시글 다음/이전 페이지 이동 버튼 */}
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </FooterButton>
      </div>
      <div>
        <CreateLink
          onClick={() => {
            if (login.status !== 201) {
              alert("로그인이 필요합니다.");
              navigate("/login");
            } else {
              navigate("/recipeCreateReview");
            }
          }}
        >
          게시글 작성하기
        </CreateLink>
      </div>
    </RecipeParent>
  );
};
export default Recipe;
