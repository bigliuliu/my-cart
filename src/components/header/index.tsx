import { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Badge, Button } from "antd";
import { CartDrawer } from "../cartDrawer";
import { loginOut } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import { FormOutlined, BgColorsOutlined } from "@ant-design/icons";
import { ThemeContext } from "../../context/theme";
import "./index.less";
export const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
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
          <FormOutlined
            style={{
              fontSize: "30px",
              color: theme == "blue" ? "blue" : "red",
            }}
            onClick={() => navigate("/plan")}
          />
          <BgColorsOutlined
            style={{
              fontSize: "30px",
              color: theme == "blue" ? "blue" : "red",
            }}
            onClick={() => navigate("/product")}
          />
          <Button onClick={changeTheme}>change theme</Button>
        </div>
      ) : (
        <p>no user</p>
      )}
    </>
  );
};
