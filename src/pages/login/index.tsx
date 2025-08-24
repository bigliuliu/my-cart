import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { store } from "../../store";
import { login } from "../../store/actions/userActions";

type FieldType = {
  username: string;
  password: string;
};
export const Login = () => {
  const userState = useSelector((state: any) => state.user);
  useEffect(() => {
    console.log("userState", userState);
  }, [userState]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish: FormProps<FieldType>["onFinish"] = (values: FieldType) => {
    dispatch(login(values.username, values.password)).then(() => {
      navigate("/product");
    });
    console.log(store.getState());
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
