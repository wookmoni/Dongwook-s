import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";

// 1. 전체 상품페이지, 로그인페이지, 상품 상세페이지
// 1-1 네비게이션 바 제작
// 2. 전체 상품페이지에서 전체 상품 보기
// 3. 로그인 버튼을 누르면 로그인 페이직 나온다
// 4. 상품 티테일 눌렀으나 로그인이 안되있을 경우에는 로긍니 페이지가 나온다
// 5. 로그인이 되어있을 경우 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없고 다시 로그인 화면으로 이동한다.
// 8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
