import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// 메인 레이아웃 속성, 리액트 라우터의 Outlet사용
const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
