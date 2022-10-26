import { ProductItemBox, SaleBox } from "../../common/product";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData, price } from "../../modules/yehoon";

const ProductItem = ({ data }) => {
  const [datas, setDatas] = useState();

  useEffect(() => {
    getData(
      `product/value/${data.product_key}`,
      null,
      null,
      setDatas,
      null,
      null
    );
  }, []);

  if (datas === undefined) {
    return null;
  }

  return (
    <ProductItemBox>
      <Link to={`/product/detail/${data.product_key}`}>
        <img
          src={`http://localhost:8080/product/${data.product_image}`}
          alt="이미지 없음"
        ></img>
        <div>[{data.product_local}]</div>
        <div>{data.product_name}</div>
        <div>
          {data.product_discount_percent === 0 ? (
            <div>{price(null, data.product_price)}원</div>
          ) : (
            <SaleBox
              firstTextDecoration="line-through"
              firstPosition="absolute"
              firstBottom="40px"
            >
              <div>{price(null, data.product_price)}</div>
              <div>
                {price(
                  "sale",
                  data.product_price,
                  1,
                  data.product_discount_percent
                )}
                원
              </div>
            </SaleBox>
          )}

          <div>
            <div>
              <span>★</span>{" "}
              {datas[0].reviewValue === null
                ? 0
                : datas[0].reviewValue.toFixed(1)}{" "}
              / 5
            </div>
            <div>리뷰 {datas[0].reviewCount}</div>
          </div>
        </div>
      </Link>
    </ProductItemBox>
  );
};

export default ProductItem;
