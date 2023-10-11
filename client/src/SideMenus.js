import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchTitle from "./parts/links&btns/SearchTitle";
import { logOutAction } from "./redux/users/actions";
import { getUserId } from "./redux/users/selectors";
import { Comments_Up } from "./redux/comments/actions";

const SideMenus = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state); // storeのstateを保存
  const isLoggedIn = selector.users.isLoggedIn;
  const userName = selector.users.userName;
  console.log(selector.comments)

  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    dispatch(Comments_Up)
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
            {!isLoggedIn && (
              <Link to="userLikes" onClick={() => handleClick()}>
                お気に入り一覧
              </Link>
            )}
          </p>
          <p>
            {!isLoggedIn && (
              <Link to="login" onClick={() => handleClick()}>
                ログイン
              </Link>
            )}
            {isLoggedIn && (
              <button
                className="LogOutBtn"
                onClick={() => {
                  handleClick();
                  dispatch(logOutAction());
                }}
              >
                ログアウト
              </button>
            )}
          </p>
          <p>
            {isLoggedIn && (
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
