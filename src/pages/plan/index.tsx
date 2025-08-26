import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import "./index.less"
export const Plan = () => {
    const planState = useSelector((state)=>state.book)
  return (
    <div className="plan-wrap">
      <p>this is plan page {JSON.stringify(planState)}</p>
    </div>
  );
};
