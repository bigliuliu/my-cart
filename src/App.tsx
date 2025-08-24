import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Login } from "./pages/login";
import { Product } from "./pages/product";
import { Header } from "./components/header";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
