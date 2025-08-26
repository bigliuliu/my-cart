import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Login } from "./pages/login";
import { Product } from "./pages/product";
import { Header } from "./components/header";
import { store } from "./store";
import { Plan } from "./pages/plan";
import { ThemeProvider } from "./context/theme";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/plan" element={<Plan />}></Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
