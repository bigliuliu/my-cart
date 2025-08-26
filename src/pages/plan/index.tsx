import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "antd";
import {
  updatePlan,
  cancelPlan,
  deletePlan,
} from "../../store/actions/bookActions";
import { PlanModel } from "../plan/component/planModel";
import "./index.less";
import type { Plan as PlanType } from "../../store/types/bookingType";
export const Plan = () => {
  const planState = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openPlanModal = (productId: number) => {
    console.log(productId, "========");
    setIsOpenModal(true);
  };
  const getFrom = (formValue) => {
    console.log(formValue, "父组件中-------");
  };
  const [planInfo, setPlanInfo] = useState<PlanType>();
  const bookState = useSelector((state) => state.book);
  useEffect(() => {
    console.log(bookState, "这是book Store----");
  }, [bookState]);
  return (
    <div className="plan-wrap">
      {planState.length &&
        planState.map((item: PlanType, index: number) => (
          <div className="plan-list" key={index}>
            <p>
              <span>目的地：</span>
              {item.destination}
            </p>
            <p>
              <span>出发时间：</span>
              {item.range[0]}
            </p>
            <p>
              <span>返回时间：</span>
              {item.range[1]}
            </p>
            <p>
              <span>乘客信息：</span>
              <ul>
                {item.userInfo.map((user, index) => (
                  <li key={index}>
                    {user.name} --------{user.phone}
                  </li>
                ))}
              </ul>
            </p>
            <Button
              onClick={() => {
                setPlanInfo(item);
                setIsOpenModal(true);
              }}
            >
              Update
            </Button>
            <Button onClick={()=>dispatch(cancelPlan(item.id))}>Cancel</Button>
            {new Date(item.range[1]).getTime() < Date.now() ? (
              <Button onClick={()=>dispatch(deletePlan([item.id]))}>Delete</Button>
            ) : (
              ""
            )}
          </div>
        ))}
      <PlanModel
        planInfo={planInfo}
        isModalOpen={isOpenModal}
        handleOk={getFrom}
        onClose={() => setIsOpenModal(false)}
      />
    </div>
  );
};
