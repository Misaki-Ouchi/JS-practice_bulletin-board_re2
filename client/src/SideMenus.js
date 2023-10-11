import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogOutBtn from "./parts/links&btns/LogOutBtn";
import SearchTitle from "./parts/links&btns/SearchTitle";
import { logInAction } from "./redux/users/actions";
import { LogIn } from "./redux/users/operations";
import { getUserId, getUserName } from "./redux/users/selector";

const SideMenus = (props) => {
  let userName;
  let login;
  const userValue = localStorage.getItem("loginUser");
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch()
  const selector = useSelector( (state) => state )
  const userId = getUserId(selector)
  const userName1 = getUserName(selector)

  console.log(selector.users)

  if (!userValue) {
    userName = "ゲスト";
    login = true;
  } else {
    userName = JSON.parse(userValue).name;
    login = false;
  }
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const searchBtnClick = () => {
    setIsClicked(!isClicked);
  };

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
            <Link to="newTitle" onClick={() => handleClick()}>
              新規スレッドを書く
            </Link>
          </p>
          <p>
            {!login && (
              <Link to="userLikes" onClick={() => handleClick()}>
                お気に入り一覧
              </Link>
            )}
          </p>
          <p>
            {login && (
              <Link to="login" onClick={() => handleClick()}>
                ログイン
              </Link>
            )}
            {!login && <LogOutBtn onClick={() => handleClick()} />}
          </p>
          <p>
            {login && (
              <Link to="signup" onClick={() => handleClick()}>
                新規ユーザー登録
              </Link>
            )}
          </p>
          <button onClick={() => searchBtnClick()}>掲示板検索</button>
          {isClicked && <SearchTitle />}

          <button onClick={() => dispatch(LogIn())}>LogIn</button>
          <p>{ userId }</p>
          <p>{ userName1 }</p>
        </div>
      </nav>
    </>
  );
};

export default SideMenus;
