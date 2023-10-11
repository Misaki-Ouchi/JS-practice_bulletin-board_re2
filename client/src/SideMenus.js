import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchTitle from "./parts/links&btns/SearchTitle";
import { logOutAction } from "./redux/users/actions";

const SideMenus = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state); // storeのstateを保存
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
          <p>ようこそ {selector.users.userName}さん</p>
          <p>
            <Link to="newTitle" onClick={() => handleClick()}>
              新規スレッドを書く
            </Link>
          </p>
          <p>
            {!selector.users.isLoggedIn && (
              <Link to="userLikes" onClick={() => handleClick()}>
                お気に入り一覧
              </Link>
            )}
          </p>
          <p>
            {!selector.users.isLoggedIn && (
              <Link to="login" onClick={() => handleClick()}>
                ログイン
              </Link>
            )}
            {selector.users.isLoggedIn && (
              <button
                className="LogOutBtn"
                onClick={() => {
                  handleClick()
                  dispatch(logOutAction())
                }}
              >ログアウト</button>
            )}
          </p>
          <p>
            {selector.users.isLoggedIn && (
              <Link to="signup" onClick={() => handleClick()}>
                新規ユーザー登録
              </Link>
            )}
          </p>
          <button onClick={() => searchBtnClick()}>掲示板検索</button>
          {isClicked && <SearchTitle />}
        </div>
      </nav>
    </>
  );
};

export default SideMenus;
