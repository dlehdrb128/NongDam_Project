import { Link } from "react-router-dom";
import styled from "styled-components";
const PostList = styled.div`
  /* 낱개 게시글 설정 */
  color: ${({ theme }) => theme.lightblack};
  width: 200px;
  height: 250px;
  margin: 2px;
  &:hover {
    font-weight: bold;
  }
  & > img {
    width: 200px;
    height: 200px;
  }
  & > h3 {
    width: 200px;
    font-size: 1.5rem;
    font-family: SCD-3;
  }
  & > div:nth-child(3) {
    width: 200px;
    font-size: 1.5rem;
    font-family: SCD-4;
    display: flex;
    align-items: center;
  }
  & > p {
    width: 200px;
    font-size: 1.5rem;
    font-family: SCD-3;
  }
`;
const RecipeItem = ({ recipe }) => {
  return (
    <Link to={`/recipe/post/${recipe.recipe_key}`}>
      <PostList>
        {/* 낱개 게시글 설정 */}
        <img
          src={`http://localhost:8080/recipe/${recipe.recipe_image_path}`}
          alt="이미지 없음"
        ></img>
        <h3>{recipe.recipe_title}</h3>
        <div>조회수 {recipe.recipe_views}</div>
        <p>⭐({recipe.recipe_value})/5</p>
      </PostList>
    </Link>
  );
};

export default RecipeItem;
