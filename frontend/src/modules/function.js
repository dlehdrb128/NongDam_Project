import axios from "axios";

/**
 *@function axios_get_함수
 *@arg params_백엔드_라우터_주소
 *@arg address_navigate_이동할_주소
 *@arg loading_로딩_설정_기본_상태는_null
 *@arg data_setData_콜백_함수
 *@arg navigate_네비게이트_설정_기본_상태는_null
 *@arg reload_페이지_새로고침_설정_기본_상태는_null
 **/

export const getData = async (
  params,
  address = null,
  loading = null,
  data,
  navigate = null,
  reload = null
) => {
  if (loading !== null) {
    loading(true);
  }
  try {
    let response = await axios.get(`http://localhost:8080/${params}`, {
      withCredentials: true,
    });

    data(response.data);
    if (reload !== null) {
      window.location.reload();
    }
    if (navigate !== null) {
      navigate(`/${address}`);
    }
  } catch (error) {
    console.log(error);
  }
  if (loading !== null) {
    loading(false);
  }
};

/**
 *@function 상품의_가격을_계산해주는_함수
 *@arg type_계산식_타입_switch사용_case_sale_total_default
 *@arg price_상품_가격
 *@arg count_상품_갯수
 *@arg percent_할인율
 **/

export const price = (type, price, count = 0, percent = 0) => {
  switch (type) {
    case "sale":
      return (
        Math.round(((price - (price * percent) / 100) * count) / 10) * 10
      ).toLocaleString();

    case "total":
      return (Math.round(price / 10) * 10 * count).toLocaleString();

    default:
      return (Math.round(price / 10) * 10).toLocaleString();
  }
};
