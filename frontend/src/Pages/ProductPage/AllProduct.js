import ProductItem from "./ProductItem";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../../modules/function";
import {
  ProductBox,
  ProductItemLeft,
  ProductItemRight,
  ProductSortBox,
  ProductTop,
  UndefinedBox,
} from "../../common/Allproduct";
import Sort from "../../modules/sort";

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
    getData(
      `product/search/${params.params}/${params.sort}`,
      `product/${params.params}`,
      setLoading,
      setData,
      navigate
    );
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
        {params.params === "all" ? null : (
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
        <Sort params={params} setParams={setParams}></Sort>
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
    </>
  );
};

export default AllProduct;
