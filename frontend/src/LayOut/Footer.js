import styled from "styled-components";
import { Link } from "react-router-dom";

// 푸터 박스
const FooterBox = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;

// 푸터 상단요소 (개인정보처리방침 등)을 담은 박스
const FooterBoxTop = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* 텍스트 설정 */
  & > div {
    width: 1280px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "SCD-4";
    color: ${({ theme }) => theme.lightblack};
    gap: 100px;

    /* Link 속성 설정 */
    & > a {
      font-size: 1.8rem;
    }

    & > a {
      color: ${({ theme }) => theme.lightblack};
    }
    & > a:link {
      text-decoration: none;
      color: ${({ theme }) => theme.lightblack};
    }
    & > a:visited {
      text-decoration: none;
      color: ${({ theme }) => theme.lightblack};
    }
    & > a:active {
      text-decoration: none;
      color: ${({ theme }) => theme.lightblack};
    }

    & > a:hover {
      color: ${({ theme }) => theme.green};
      font-weight: 600;
    }
  }
  /* 구분선 */
  & > hr {
    width: 1920px;
    border: 0.5px solid #c0c0c0;
  }
`;

// 푸터 중간 박스 (농업을담다부터 Copyright까지)
const FooterBoxMiddle = styled.div`
  width: 1280px;
  display: flex;
  gap: 150px;
  margin-bottom: 80px;
  color: ${({ theme }) => theme.lightblack};

  /* 농담 로고 (왼쪽) */
  & img {
    padding-left: 120px;
  }

  /* 로고를 담은 박스   */
  & > div:nth-child(1) {
    width: 176px;
    height: 45px;
    margin-top: 80px;
  }

  /* 텍스트들을 담은 박스 */
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    gap: 20px;

    /* 농담(농업을담다) */
    & > div:nth-child(1) {
      font-family: "SCD-6";
      font-size: 2.2rem;
    }

    /* 대표이사... */
    & > div:nth-child(2) {
      font-family: "SCD-3";
      display: flex;
      flex-direction: column;
      gap: 10px;
      & > div {
        font-size: 1.2rem;
      }
    }

    /* 호스팅 서비스 사업자, Copyright를 담은 박스 */
    & > div:nth-child(3) {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      gap: 5px;

      /* 호스팅 서비스 */
      & > div:nth-child(1) {
        font-family: "SCD-6";
        font-size: 1.5rem;
      }
      /* Copyright */
      & > div:nth-child(2) {
        font-family: "SCD-4";
        font-size: 1.5rem;
        color: #c0c0c0;
      }
    }
  }
`;

// 푸터 하단 박스 (왼쪽, 오른쪽 두개로 나눔)
const FooterBoxBottom = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.lightblack};

  /* 구분선 속성 */
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

    /* 왼쪽 박스 (공정거래 위원회...) */
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      gap: 50px;

      /* 로고와 텍스트를 담은 박스 */
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        /* 텍스트 */
        & > div {
          font-family: "SCD-4";
          font-size: 1.4rem;
          text-align: center;
          line-height: 20px;
        }
      }
    }

    /* 오른쪽 박스 (소비자 피해 보상...) */
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 15px;
      /* 소비자 피해... */
      & > div:nth-child(1) {
        font-family: "SCD-6";
      }
      /* 고객님의... */
      & > div:nth-child(2) {
        font-family: "SCD-4";
        font-size: 1.4rem;
      }
    }
  }
`;
const Footer = () => {
  return (
    <>
      <FooterBox>
        <FooterBoxTop>
          <hr></hr>
          <div>
            <Link>개인정보처리방침</Link>
            <Link>이용약관</Link>
            <Link>이용안내</Link>
            <Link>입점문의</Link>
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
                고객님의 안전거래를 위해 현금 등으로 결제 시
                <br />
                저희 쇼핑몰에서 가입한 소비자 피해 보상 보험 서비스를 이용하실
                수 있습니다.
                <br />
                보상대상 : 미배송/반품,환불 거부/쇼핑몰부도
              </div>
            </div>
          </div>
        </FooterBoxBottom>
      </FooterBox>
    </>
  );
};

export default Footer;
