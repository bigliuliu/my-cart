import { Card,Button} from "antd";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/actions/cartActions";
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
    const dispatch = useDispatch()
  return (
    <>
      <Card className="product-card" title={productList.title} variant="borderless">
        {productList.body}
        <Button type="primary" onClick={()=>dispatch(addItem(productList))}>add</Button>
      </Card>
    </>
  );
};
