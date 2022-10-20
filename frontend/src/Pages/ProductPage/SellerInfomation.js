import styled from "styled-components";
import { forwardRef } from "react";

const InformationBox = styled.div`
  width: 1280px;
  height: 380px;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  gap: 30px;

  & > h1 {
    font-family: "SCD-6";
    font-size: 2.5rem;
    color: ${({ theme }) => theme.lightblack};
  }
  & > div {
    display: flex;
    width: 1280px;
    height: 320px;
    flex-wrap: wrap;
  }
`;

const InformationItem = styled.div`
  display: flex;
  flex-direction: row;

  & > div {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div:nth-child(1) {
    width: 164px;
    height: 80px;
    font-family: "SCD-5";
    background-color: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.lightgray};
  }

  & > div:nth-child(2) {
    width: 469px;
    height: 80px;
    font-family: "SCD-4";
    border: 1px solid ${({ theme }) => theme.lightgray};
  }
`;

const SellerInformation = forwardRef(({ data }, ref) => {
  if (data === undefined) {
    return null;
  }

  let sellerDataArray = [
    { key: "상호명", text: data[0].store_name },
    { key: "대표자", text: data[0].store_ceo_name },
    { key: "사업자등록번호", text: data[0].business_number },
    { key: "사업장 소재지", text: data[0].store_address },
    { key: "대표 전화", text: data[0].store_call },
    { key: "상담 전화", text: data[0].store_cs_call },
    { key: "이메일", text: data[0].store_cs_email },
    { key: "CS 운영시간", text: data[0].store_cs_time },
  ];

  let information = sellerDataArray.map((value, index) => {
    return (
      <InformationItem key={index}>
        <div>{value.key}</div>
        <div>{value.text}</div>
      </InformationItem>
    );
  });

  return (
    <InformationBox ref={ref}>
      <h1>판매자 정보</h1>
      <div>{information}</div>
    </InformationBox>
  );
});
export default SellerInformation;
