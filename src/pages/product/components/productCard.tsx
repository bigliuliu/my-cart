import { Card } from "antd";
import "./index.less"
interface Product {
  id: number;
  userId: number;
  title: string;
  body: string;
  price:number
}
interface ProductProps {
  productList: Product;
}
export const ProductCard = ({ productList }: ProductProps) => {
  return (
    <>
      <Card className="product-card" title={productList.title} variant="borderless">
        {productList.body}
      </Card>
    </>
  );
};
