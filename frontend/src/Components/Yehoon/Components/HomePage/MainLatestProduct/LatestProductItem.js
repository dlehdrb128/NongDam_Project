import styled from "styled-components";
import { Theme } from "./../../../../../theme/theme";
import { Link } from "react-router-dom";

const LatestProductItemBox = styled.div`
  width: 180px;
  height: 296px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }

  & a {
    &:link {
      text-decoration: none;
      color: black;
    }
    &:visited {
      text-decoration: none;
      color: black;
    }
    &:active {
      text-decoration: none;
      color: black;
    }

    &:hover {
      cursor: pointer;
      color: ${Theme.green};
    }

    & > img {
      width: 163px;
      height: 168px;
    }

    & > div:nth-child(2) {
      & > div:nth-child(1) {
        font-family: "SCD-6";
        font-size: 1.7rem;
        color: ${Theme.green};
      }

      & > div:nth-child(2) {
        font-family: "SCD-3";
        font-size: 1.6rem;
        color: ${Theme.lightblack};
      }
    }
    & > div:nth-child(3) {
      font-family: "SCD-7";
      font-size: 1.9rem;
      color: ${Theme.lightblack};
    }
  }
`;

const LatestProductItem = ({ data }) => {
  return (
    <LatestProductItemBox>
      <Link to={`/product/${data.product_id}`}>
        <img src={data.image} alt="이미지 없음"></img>
        <div>
          <div>[{data.local}]</div>
          <div>{data.name}</div>
        </div>
        <div>{data.price}</div>
      </Link>
    </LatestProductItemBox>
  );
};

export default LatestProductItem;
