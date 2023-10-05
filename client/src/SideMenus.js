import { useState } from "react";
import { Link } from "react-router-dom";
import LogOutBtn from "./parts/links&btns/LogOutBtn";

const SideMenus = (props) => {
  let userName;
  let login;
  const userValue = localStorage.getItem("loginUser");
  if (!userValue) {
    userName = "ゲスト";
    login = true;
  } else {
    userName = JSON.parse(userValue).name;
    login = false;
  }
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive)
    console.log(isActive)
  }
  
  return (
    <>
      <div
        className={`side_btn ${isActive && "active"}`}
        onClick={() => handleClick()}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`sideMenu ${isActive && "active"}`}>
        <div className="sideItems">
          <p>ようこそ {userName}さん</p>
          <p>
            <Link
              to="newTitle"
              onClick={() => handleClick()}
            >新規スレッドを書く</Link>
          </p>
          <p>{!login &&
            <Link
            to="userLikes"
            onClick={() => handleClick()}
          >お気に入り一覧</Link>}</p>
          <p>
            {login &&
              <Link
              to="login"
              onClick={() => handleClick()}>ログイン</Link>}
            {!login &&
              <LogOutBtn
              onClick={() => handleClick()}
              />}
          </p>
          <p>{login &&
            <Link
              to="signup"
              onClick={() => handleClick()}
            >新規ユーザー登録</Link>}</p>
          <p>掲示板検索</p>
        </div>
      </nav>
    </>
  );
};

export default SideMenus;
