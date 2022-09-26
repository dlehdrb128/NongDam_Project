import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/Yehoon/Components/HomePage";
import Header from "../Components/Yehoon/Components/Header";
// import AllProduct from "../Components/Yehoon/Components/보류/AllProduct";
// import ProductPage from "../Components/Yehoon/Components/보류/ProductPage";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<HomePage />}></Route>

          {/* 보류 */}
          {/* <Route path="/all" element={<AllProduct />}></Route> */}
          {/* <Route path="/product/:id" element={<ProductPage />}></Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
