import styled from "styled-components";
import ProductItem from "./ProductItem";
import { useState } from "react";
import Remocon from "../../LayOut/Remocon";
import { useEffect } from "react";
// import { productAll } from "../Slice/getData";
// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// 상품 검색페이지의 상단
const ProductTop = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;

// 상단 왼쪽 (전체 상품...)
const ProductItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  /* 전체 상품 */
  & > h1 {
    font-family: "YANGJIN";
    font-size: 4.5rem;
    color: ${({ theme }) => theme.green};
  }

  /* 농담의 모든... */
  & > div:nth-child(2) {
    font-family: "SCD-4";
    font-size: 2.1rem;
    color: ${({ theme }) => theme.lightblack};
  }

  /* 지역, 종류를 담은 박스 */
  & > div:nth-child(3) {
    display: flex;
    flex-direction: row;
    gap: 50px;

    /* 지역, 종류 select 속성 */
    & > select {
      width: 150px;
      height: 40px;
      border-radius: 15px;
      color: ${({ theme }) => theme.lightblack};
      font-size: 1.9rem;

      /* select의 option 속성 */
      & > option {
        font-size: 1.6rem;
      }

      font-family: "SCD-4";
      text-align: center;
      font-weight: bold;
      opacity: 60%;
      &:hover {
        cursor: pointer;
        opacity: 100%;
      }
    }
  }
`;

const ProductItemRight = styled.img`
  width: 650px;
  height: 200px;
  margin-right: 100px;
`;

// 상품 검색페이지의 상품들을 담는 컨테이너
const ProductBox = styled.div`
  margin-top: 150px;
  width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 110px;
`;

const UndefinedBox = styled.div`
  width: 1280px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > h1 {
    font-size: 4rem;
    font-family: "YANGJIN";
  }
`;

const ProductSortBox = styled.div`
  width: 1280px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;

  & > div:nth-child(1) {
    font-family: "SCD-6";
    font-size: 2rem;
  }

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.lightblack};
    gap: 45px;

    & > div:hover {
      cursor: pointer;
      font-weight: bold;
    }

    & > div {
      font-family: "SCD-4";
      font-size: 1.5rem;
      padding-right: 20px;
    }
  }
`;

const AllProduct = () => {
  const [params, setParams] = useState({
    params: useParams().category,
    sort: "normal",
  });
  const [localSelected, setLocalSelected] = useState("local");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        let response = await axios.get(
          `http://localhost:8080/product/search/${params.params}/${params.sort}`
        );
        setData(response.data);
        navigate(`/product/${params.params}`);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setLoading(false);
      }, 100);
    };
    getData();
  }, [params]);

  const localSelectChange = (event) => {
    for (let key of event.target) {
      if (key.value === event.target.value) {
        setLocalSelected(key.textContent);
        setParams({ ...params, params: key.value });
      }
    }
  };

  let localData = [
    { category: "all", name: "전체" },
    {
      category: "gyeonggi",
      name: "경기도",
    },
    {
      category: "gangwon",
      name: "강원도",
    },
    {
      category: "chungbuk",
      name: "충청북도",
    },
    {
      category: "chungnam",
      name: "충청남도",
    },
    {
      category: "jeonbuk",
      name: "전라북도",
    },
    {
      category: "jeonnam",
      name: "전라남도",
    },
    {
      category: "gyeongbuk",
      name: "경상북도",
    },
    {
      category: "gyeongnam",
      name: "경상남도",
    },
  ];

  let localOption = localData.map((value, index) => {
    return (
      <option value={value.category} key={index}>
        {value.name}
      </option>
    );
  });

  if (data === undefined) {
    return <h1>로딩중입니다</h1>;
  }

  return (
    <>
      <ProductTop>
        <ProductItemLeft>
          <h1>{localSelected === "local" ? "전체" : localSelected} 상품</h1>
          <div>
            {localSelected === "local" || localSelected === "전체"
              ? "농담의 모든 못난이 상품을 만나 보세요!"
              : `생명과 태양의 땅! ${localSelected} 입니다`}
          </div>
          <div>
            <select value={params.params} onChange={localSelectChange}>
              <option value="local" disabled={true}>
                지역
              </option>
              {localOption}
            </select>
          </div>
        </ProductItemLeft>
        {params === "all" ? null : (
          <ProductItemRight
            src={`http://localhost:8080/local/${params.params}.png`}
            alt="이미지 없음"
          ></ProductItemRight>
        )}
      </ProductTop>

      <ProductSortBox>
        {loading === true ? (
          <div style={{ visibility: "hidden" }}></div>
        ) : (
          <div>{data.length}개의 상품이 있습니다</div>
        )}
        <div>
          <div
            onClick={() => {
              setParams({ ...params, sort: "new" });
            }}
          >
            최신순
          </div>
          <div
            onClick={() => {
              setParams({ ...params, sort: "highPrice" });
            }}
          >
            가격높은순
          </div>
          <div
            onClick={() => {
              setParams({ ...params, sort: "lowPrice" });
            }}
          >
            가격낮은순
          </div>
        </div>
      </ProductSortBox>
      <ProductBox>
        {loading === true ? (
          <UndefinedBox>
            <h1>로딩중입니다</h1>
          </UndefinedBox>
        ) : data[0] === undefined ? (
          <UndefinedBox>
            <h1>{localSelected}엔 상품이 없습니다</h1>
          </UndefinedBox>
        ) : (
          data.map((value, index) => {
            return <ProductItem key={index} data={value}></ProductItem>;
          })
        )}
      </ProductBox>
      <Remocon></Remocon>
    </>
  );
};

export default AllProduct;
