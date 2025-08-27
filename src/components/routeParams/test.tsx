import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToProduct = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <button onClick={() => goToProduct(123)}>
      查看商品 123
    </button>
  );
}

import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams<{ id: string }>();

  return <h1>商品详情页，ID：{id}</h1>;
}

export default Product;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
