import { Routes, Route } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { Login } from "./pages/login";
import { Product } from "./pages/product";
import { Header } from "./components/header";
import { store } from "./store";
import { Plan } from "./pages/plan";
import { ThemeProvider } from "./context/theme";
import { fetchCart } from "./store/actions/cartActions";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const userId = useSelector(() => store.getState().user.userInfo?.id);
  useEffect(() => {
    dispatch(fetchCart(Number("1")) as any);
  }, [dispatch, userId]);
  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/plan" element={<Plan />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
