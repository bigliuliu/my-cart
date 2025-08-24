import { useEffect } from "react";
import { useSelector } from "react-redux";
export const Header = () => {
  const userState = useSelector((state) => state.user);
  useEffect(()=>{
    console.log(userState,"Header")
  },[])
  return (
    <>
      {userState.userInfo ? (
        <p>
          <span>{userState.userInfo.name}</span>
          <span>{userState.userInfo.email}</span>
        </p>
      ) : (
        <p>no user</p>
      )}
    </>
  );
};
