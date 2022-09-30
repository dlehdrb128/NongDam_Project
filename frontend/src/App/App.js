import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/Yehoon/Components/HomePage/HomePage";
import MainLayout from "../Components/Yehoon/Components/LayOut/MainLayout";
import Header from "../Components/Yehoon/Components/LayOut/Header";
import Footer from "../Components/Yehoon/Components/LayOut/Footer";
import Login from "../Components/Geunsoo/Components/login";
import Intro from "../Components/SangHee/Components/Intro";
import AllProduct from "../Components/Yehoon/Components/ProductPage/AllProduct";
import ProductPage from "../Components/Yehoon/Components/ProductPage/ProductPage";
import AdminMain from "./../Components/Yeonju/Components/AdminMain";
import SignUpEnd from "./../Components/Geunsoo/Components/signUpEnd";
import "./App.css";
import OrderDetail from "../Components/Sangho/Components/orderDetail";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Header />} />
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/intro" element={<Intro />}></Route>
          <Route path="/all" element={<AllProduct />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path="/admin" element={<AdminMain />}></Route>
          <Route path="/signUpEnd" element={<SignUpEnd />}></Route>
          <Route path="/orderDetail" element={<OrderDetail />}></Route>
          <Route element={<Footer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
