import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Badge } from "antd";
import { CartDrawer } from "../cartDrawer";
import { loginOut } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import "./index.less";
export const Header = () => {
  const userState = useSelector((state) => state.user);
  const cartState = useSelector((state) => state.cart);
  const [cartTotal, setCartTotal] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setCartTotal(cartState.reduce((total, item) => total + item.count, 0));
  }, [cartState]);
  useEffect(() => {
    if (userState.userInfo === null) {
      localStorage.clear();
      navigate("/");
    }
  }, [userState.userInfo, navigate]);
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      {userState.userInfo ? (
        <div className="header-wrap">
          <p
            onClick={() => {
              dispatch(loginOut());
            }}
          >
            <span>{userState.userInfo.name}</span>
            <span>{userState.userInfo.email}</span>
          </p>
          <Badge count={cartTotal} onClick={() => setOpenDrawer(true)}>
            <Avatar shape="square" size="large" />
          </Badge>
          <CartDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        </div>
      ) : (
        <p>no user</p>
      )}
    </>
  );
};
