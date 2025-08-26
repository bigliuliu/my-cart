import { DatePicker, Form, Input, Modal, Button, message } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { Plan, User } from "../../../store/types/bookingType";
import { bookPlan, updatePlan } from "../../../store/actions/bookActions";
import type { GetProps } from "antd";
import dayjs from "dayjs";
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;
interface PlanModelProps {
  isModalOpen: boolean;
  handleOk: (value) => void;
  onClose: () => void;
  planInfo?: Plan;
}

export const PlanModel = ({
  isModalOpen,
  handleOk,
  onClose,
  planInfo,
}: PlanModelProps) => {
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();
  useEffect(() => {
    if (planInfo) {
      console.log(planInfo, "父组件传过来的----");
      form.setFieldsValue({
        range: planInfo.range.map((day) => dayjs(day, "YYYY/MM/DD")),
        destination: planInfo.destination,
        userInfo: planInfo.userInfo,
      });
      setUerInfo(planInfo.userInfo);
      setRangeDate(planInfo.range);
    }
  }, [planInfo, form]);

  const [userInfo, setUerInfo] = useState<User[]>([{ name: "", phone: "" }]);
  const delteUser = (index) => {
    setUerInfo(userInfo.filter((_, i) => i !== index));
  };
  const addUser = () => {
    setUerInfo([...userInfo, { name: "", phone: "" }]);
  };
  const dispatch = useDispatch();
  const [rangeDate, setRangeDate] = useState<string[]>();
  const changeRange = (_, dateStrings: [string, string]) => {
    setRangeDate(dateStrings);
  };
  const handleForm = async () => {
    try {
      const formValue = await form.validateFields();
      if (planInfo?.userInfo.length) {
        await dispatch(updatePlan({...formValue,id:planInfo.id, range: rangeDate}))
      } else {
        await dispatch(bookPlan({ ...formValue, range: rangeDate }) as any);
      }
    handleOk({ ...formValue, range: rangeDate });

      onClose();
    } catch (error) {
      message.error(JSON.stringify(error) || "操作失败");
    }
  };

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };
  return (
    <Modal
      title="Basic Modal"
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalOpen}
      onOk={handleForm}
      onCancel={onClose}
    >
      <Form form={form} style={{ maxWidth: 600 }}>
        {userInfo.length ? (
          <>
            {userInfo.map((item, index) => {
              return (
                <div key={index}>
                  <Button onClick={() => delteUser(index)}>删除</Button>
                  <Form.Item
                    label="Name"
                    name={["userInfo", index, "name"]}
                    rules={[{ required: true, message: "Please input!" }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Phone"
                    name={["userInfo", index, "phone"]}
                    rules={[{ required: true, message: "Please input!" }]}
                  >
                    <Input />
                  </Form.Item>
                </div>
              );
            })}
          </>
        ) : (
          ""
        )}
        <Form.Item>
          <Button onClick={addUser}>添加另一位乘客</Button>
        </Form.Item>
        <Form.Item
          label="Destionation"
          name="destination"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="RangePicker"
          name="range"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <RangePicker
            disabledDate={disabledDate}
            format={"YYYY/MM/DD"}
            onChange={changeRange}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
