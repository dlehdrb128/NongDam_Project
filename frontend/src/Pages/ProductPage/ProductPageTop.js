import { Link } from "react-router-dom";
import { useState } from "react";
import { StyledButton, Theme } from "../../Theme/theme";
import axios from "axios";
import { SaleBox } from "../../common/product";
import {
  ProductPageTopBox,
  ProductPageTopLeft,
  ProductPageTopRight,
  CountBox,
  ProductPageTotalPrice,
  ProductPageButtonBox,
} from "../../common/productPage.js";
import { price } from "../../modules/function";

const ProductPageTop = ({ ProductData }) => {
  const [count, setCount] = useState(0);
  const data = [ProductData[0], count];

  const up = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const down = () => {
    setCount((count) => count + 1);
  };

  ProductData = ProductData[0];

  const sendCart = () => {
    axios.post("http://localhost:8080/product/cart/insert", data);
  };

  return (
    <ProductPageTopBox>
      <ProductPageTopLeft>
        <img
          src={`http://localhost:8080/product/${ProductData.product_image}`}
          alt="데이터를 찾을 수 없습니다"
        ></img>
      </ProductPageTopLeft>
      <ProductPageTopRight>
        <Link to={`/store/detail/${ProductData.store_key}`}>
          <div>{ProductData.store_name}</div>
        </Link>
        <div>[{ProductData.product_local}]</div>
        <div>{ProductData.product_name}</div>
        <hr></hr>
        {ProductData.product_discount_set === 0 ? (
          <div>{price(null, ProductData.product_price)}원</div>
        ) : (
          <SaleBox
            firstTextDecoration="line-through"
            firstPosition="absolute"
            firstBottom="40px"
          >
            <div>{price(null, ProductData.product_price)}원</div>
            <div>
              {price(
                "sale",
                ProductData.product_price,
                1,
                ProductData.product_discount_percent
              )}
              원
            </div>
          </SaleBox>
        )}
        <CountBox>
          <div>수량</div>
          <div>
            <button onClick={up}>-</button>
            <div>{count}</div>
            <button onClick={down}>+</button>
          </div>
        </CountBox>
        <ProductPageTotalPrice>
          <div>총 합계금액 (수량) :</div>

          <div>
            {ProductData.product_discount_set === 0 ? (
              <div>{price("total", ProductData.product_price, count)}원</div>
            ) : (
              <div>
                {price(
                  "sale",
                  ProductData.product_price,
                  count,
                  ProductData.product_discount_percent
                )}
                원
              </div>
            )}
            <div>({count}개)</div>
          </div>
        </ProductPageTotalPrice>
        <ProductPageButtonBox>
          <StyledButton fs="3rem" wd="298px" ht="60px" fontFamily="SCD-6">
            구매하기
          </StyledButton>
          <StyledButton
            fs="3rem"
            wd="298px"
            ht="60px"
            bg="none"
            fontFamily="SCD-3"
            border="1.5px solid rgba(0, 0, 0, 1)"
            color={Theme.lightblack}
            onClick={sendCart}
          >
            장바구니
          </StyledButton>
        </ProductPageButtonBox>
      </ProductPageTopRight>
    </ProductPageTopBox>
  );
};

export default ProductPageTop;
