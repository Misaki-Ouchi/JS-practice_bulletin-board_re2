import { useState } from "react";

const LogOutBtn = (props) => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    localStorage.removeItem("loginUser")
    window.location.reload()
  };

  return (
    <>
      <button className="LogOutBtn" onClick={() => handleClick()}>
        ログアウト
      </button>
    </>
  );
};

export default LogOutBtn;
