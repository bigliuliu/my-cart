import axios from "axios";
import { useState, useEffect } from "react";
import { Empty } from "antd";
import { ProductCard } from "./components/productCard";
import { PlanModel } from "../plan/component/planModel";
import "./index.less";
import type { Plan } from "../../store/types/bookingType";
export const Product = () => {
  const [productList, setProductList] = useState([]);
  const fetchProductList = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = res.data.map((item) => ({ ...item, price: 1 }));
      setProductList(data);
    } catch (error) {
      console.log("error--", error);
    }
  };
  useEffect(() => {
    fetchProductList();
  }, []);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openPlanModal = (productId: number) => {
    console.log(productId, "========");
    setIsOpenModal(true);
  };
  const getFrom = (formValue) => {
    console.log(formValue, "父组件中-------");
  };
  const [planInfo, setPlanInfo] = useState<Plan>();
  return (
    <>
      {productList.length ? (
        <div className="product-card-grid">
          {productList.map((product, index) => (
            <ProductCard
              productList={product}
              key={index}
              openModal={openPlanModal}
            />
          ))}
        </div>
      ) : (
        <Empty />
      )}
      <PlanModel
        planInfo={planInfo}
        isModalOpen={isOpenModal}
        handleOk={getFrom}
        onClose={() => setIsOpenModal(false)}
      />
    </>
  );
};
