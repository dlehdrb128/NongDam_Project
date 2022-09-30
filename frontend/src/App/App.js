import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/Yehoon/Components/HomePage/HomePage";
import MainLayout from "../Components/Yehoon/Components/LayOut/MainLayout";
import Header from "../Components/Yehoon/Components/LayOut/Header";
import Footer from "../Components/Yehoon/Components/LayOut/Footer";
import Login from "../Components/Geunsoo/Components/login";
import SignUpEnd from "../Components/Geunsoo/Components/signUpEnd";

import "./App.css";
// import AllProduct from "../Components/Yehoon/Components/보류/AllProduct";
// import ProductPage from "../Components/Yehoon/Components/보류/ProductPage";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Header />} />

          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup-end" element={<SignUpEnd />}></Route>
          {/* 보류 */}
          {/* <Route path="/all" element={<AllProduct />}></Route> */}
          {/* <Route path="/product/:id" element={<ProductPage />}></Route> */}
          <Route element={<Footer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
