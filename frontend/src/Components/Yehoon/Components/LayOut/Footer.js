import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterBox = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterBoxTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > div {
    width: 1280px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-family: "SCD-4";
    color: rgba(82, 82, 82, 1);
    gap: 100px;

    & > a {
      color: rgba(82, 82, 82, 1);
    }
    & > a:link {
      text-decoration: none;
      color: rgba(82, 82, 82, 1);
    }
    & > a:visited {
      text-decoration: none;
      color: rgba(82, 82, 82, 1);
    }
    & > a:active {
      text-decoration: none;
      color: rgba(82, 82, 82, 1);
    }

    & > a:hover {
      color: #80c342;
      font-weight: 600;
    }
  }
  & > hr {
    width: 1920px;
    border: 0.5px solid #c0c0c0;
  }
`;

const FooterBoxMiddle = styled.div`
  width: 1280px;
  display: flex;
  gap: 150px;
  margin-bottom: 80px;
  color: rgba(82, 82, 82, 1);

  & img {
    padding-left: 120px;
  }

  & > div:nth-child(1) {
    width: 176px;
    height: 45px;
    margin-top: 80px;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    gap: 20px;
    & > div:nth-child(1) {
      font-family: "SCD-6";
      font-size: 1.2rem;
    }

    & > div:nth-child(2) {
      font-family: "SCD-4";
      font-size: 0.9rem;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    & > div:nth-child(3) {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      gap: 5px;

      & > div:nth-child(1) {
        font-family: "SCD-6";
        font-size: 0.9rem;
      }
      & > div:nth-child(2) {
        font-family: "SCD-4";
        font-size: 0.9rem;
        color: #c0c0c0;
      }
    }
  }
`;

const FooterBoxBottom = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  color: rgba(82, 82, 82, 1);

  & > hr {
    width: 1920px;
    border: 0.5px solid #c0c0c0;
  }

  & > div {
    width: 100%;
    display: flex;
    gap: 200px;

    justify-content: center;
    margin-top: 40px;
    margin-bottom: 50px;

    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      gap: 50px;

      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        & > div {
          font-family: "SCD-4";
          font-size: 0.8rem;
          text-align: center;
          line-height: 20px;
        }
      }
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 10px;
      & > div:nth-child(1) {
        font-family: "SCD-6";
      }
      & > div:nth-child(2) {
        font-family: "SCD-4";
        font-size: 0.8rem;
      }
    }
  }
`;
const Footer = () => {
  return (
    <>
      <FooterBox>
        <FooterBoxTop>
          <div>
            <Link>개인정보처리방침</Link>
            <Link>이용약관</Link>
            <Link>이용안내</Link>
            <Link>입점문의</Link>
            <Link>농담</Link>
          </div>
          <hr></hr>
        </FooterBoxTop>
        <FooterBoxMiddle>
          <div>
            <img src="/img/logo-2.svg" alt="이미지 없음"></img>
          </div>
          <div>
            <div>농담(농업을 담다)</div>
            <div>
              <div>
                대표이사 : 이상호 서울특별시 마포구 신촌로 66, 8층(노고산동,
                농협복합건물) 사업자등록번호 732-85-01781 통신판매업자
                제2021-서울마포-3807호
              </div>
              <div>부가통신사업자 제2-01-21-0257호</div>
              <div>
                개인정보보호책임자(CPO) 이상호 Tel 1588-0028 Fax 02-2022-0990
              </div>
            </div>
            <div>
              <div>호스팅 서비스 사업자 : 농담을잘치는(온라인사업부)</div>
              <div>
                Copyright© Nonghyup Agribusiness Group Inc 2017. All rights
                reserved.
              </div>
            </div>
          </div>
        </FooterBoxMiddle>
        <FooterBoxBottom>
          <hr></hr>
          <div>
            <div>
              <div>
                <img src="/img/gongjung.svg" alt="이미지 없음"></img>
                <div>
                  공정거래위원회
                  <br />
                  표준약관사용
                </div>
              </div>
              <div>
                <img src="/img/yesSign.svg" alt="이미지 없음"></img>
                <div>
                  금융결제원
                  <br />
                  계좌이체 공인인증증서
                </div>
              </div>
              <div>
                <img src="/img/kica.svg" alt="이미지 없음"></img>
                <div>
                  KICA
                  <br />
                  한국정보인증
                </div>
              </div>
              <div>
                <img src="/img/gongjung.svg" alt="이미지 없음"></img>
                <div>
                  한국온라인쇼핑협회
                  <br />
                  준회원사
                </div>
              </div>
            </div>
            <div>
              <div>소비자피해보상보험 SGI서울보증</div>
              <div>
                고객님의 안전거래를 위해 현금 등으로 결제 시 결제금액 전액에
                대해 저희 쇼핑몰에서 가입한 소비자 피해 보상
                <br />
                보험 서비스를 이용하실 수 있습니다. 보상대상 : 미배송/반품,환불
                거부/쇼핑몰부도
              </div>
            </div>
          </div>
        </FooterBoxBottom>
      </FooterBox>
    </>
  );
};

export default Footer;
