import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Badge } from "antd";
import "./index.less";
export const Header = () => {
  const userState = useSelector((state) => state.user);
  const cartState = useSelector((state) => state.cart);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    console.log(cartState, "Header");
    setCartTotal(cartState.reduce((total, item) => total + item.count, 0));
  }, [cartState]);
  return (
    <>
      {userState.userInfo ? (
        <div className="header-wrap">
          <p>
            <span>{userState.userInfo.name}</span>
            <span>{userState.userInfo.email}</span>
          </p>
          <Badge count={cartTotal}>
            <Avatar shape="square" size="large" />
          </Badge>
        </div>
      ) : (
        <p>no user</p>
      )}
    </>
  );
};
