import { Drawer, Space, Button, Input } from "antd";
import {
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.less";
import {
  removeItem,
  addItem,
  updateCount,
  clearCart,
} from "../../store/actions/cartActions";
interface DrawerType {
  open: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ open, onClose }: DrawerType) => {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(
      cartState.reduce((total, item) => total + item.price * item.count, 0)
    );
  }, [cartState]);
  return (
    <Drawer
      title={"Total Price" + totalPrice}
      closable={{ "aria-label": "Close Button" }}
      onClose={onClose}
      open={open}
    >
      {cartState.map((item, index) => (
        <div key={index}>
          <div className="drawer-wrap">
            <p>
              <span>name:</span>
              {item.name}
            </p>
            <p>
              <span>Price:</span>
              {item.price}
            </p>
            <p>
              <span>Count:</span>
              {item.count}
            </p>
          </div>
          <Space.Compact>
            <Button    
              onClick={() => dispatch(removeItem(item.id))}
              icon={<MinusOutlined />}
            />
            <Input
              value={item.count}
              onChange={(e) =>
                dispatch(updateCount(item.id, Number(e.target.value)))
              }
            />
            <Button
              onClick={() => dispatch(addItem(item))}
              icon={<PlusOutlined />}
            />
          </Space.Compact>
        </div>
      ))}
      <Button onClick={()=>dispatch(clearCart())}>Clear Cart</Button>
    </Drawer>
  );
};
