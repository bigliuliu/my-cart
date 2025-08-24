import axios from "axios";
import { useState, useEffect } from "react";
import { Empty } from "antd";
import { ProductCard } from "./components/productCard";
import "./index.less"
export const Product = () => {
  const [productList, setProductList] = useState([]);
  const fetchProductList = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = res.data.map(item =>({...item,price:1}));
      setProductList(data);
    } catch (error) {
      console.log("error--", error);
    }
  };
  useEffect(() => {
    fetchProductList();
  }, []);
  return (
    <>
      {productList.length ? (
        <div className="product-card-grid">
          {productList.map((product) => (
            <ProductCard productList={product} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};
