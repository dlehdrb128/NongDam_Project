import { Route, Routes } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Header from "../LayOut/Header";
import Footer from "../LayOut/Footer";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Login/login";
import Intro from "../Pages/Intro/Intro";
import AllProduct from "../Pages/ProductPage/AllProduct";
import ProductPage from "../Pages/ProductPage/ProductPage";
import AdminMain from "../Pages/Admin/AdminMain";
import StoreOpenMain from "../Pages/StoreOpen/StoreOpenMain";
import SignUp from "../Pages/SignUp/signUp";
import SignUpEnd from "../Pages/SignUp/signUpEnd";
import Recipe from "../Pages/Recipe/recipe";
import OrderDetail from "../Pages/Order/OrderDetail";
import CartMain from "../Pages/Cart/CartMain";
import FivedaysMakret from "../Pages/FivedaysMarket/FivedaysMarket";
import NewProductMain from "../Pages/NewProduct/NewProductMain";
import Mypage from "../Pages/MyPage/MyPage";
import RecipeCreateReview from "../Pages/Recipe/recipeCreateReview";
import RecipeReview from "../Pages/Recipe/recipeReview";
import UploadTest from "../Pages/uploadTest/index";
import NewLogin from "../Pages/Login/newLogin";
import Store from "../Pages/Store/Store";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Header />} />
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/newLogin" element={<NewLogin />}></Route>
          <Route path="/intro" element={<Intro />}></Route>
          <Route path="/product/:category" element={<AllProduct />}></Route>
          <Route path="/product/detail/:id" element={<ProductPage />}></Route>
          <Route path="/admin" element={<AdminMain />}></Route>
          <Route path="/admin/create" element={<StoreOpenMain />}></Route>
          <Route path="/signUp" element={<SignUp></SignUp>}></Route>
          <Route path="/signUpEnd" element={<SignUpEnd />}></Route>
          <Route path="/recipe" element={<Recipe />}></Route>
          <Route
            path="/recipeCreateReview"
            element={<RecipeCreateReview />}
          ></Route>
          <Route path="/recipe/post/:id" element={<RecipeReview />}></Route>
          <Route path="/orderDetail/:id" element={<OrderDetail />}></Route>
          <Route path="/cart/user/:id" element={<CartMain />}></Route>
          <Route path="/FivedaysMakret" element={<FivedaysMakret />}></Route>
          <Route path="/admin/newproduct" element={<NewProductMain />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/upload" element={<UploadTest />}></Route>
          <Route path="/store/detail/:id" element={<Store />}></Route>
          <Route element={<Footer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
