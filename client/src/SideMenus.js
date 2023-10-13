import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchTitle from "./parts/links&btns/SearchTitle";
import { logOutAction } from "./redux/users/actions";

const SideMenus = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state); // storeのstateを保存
  const isLoggedIn = selector.users.isLoggedIn;
  const userName = selector.users.userName;
  const sideMenuRef = useRef()
  const documentClickHandler = useRef()
  const searchBtn = useRef()

  const [isActive, setIsActive] = useState(false);
  const [searchBtnClicked, setSearchBtnClicked] = useState(false);

  // メニュー内容、検索ボタンクリックでは閉じない設定
  useEffect(() => {
    documentClickHandler.current = e => {
      // メニュー内容クリック
      if (sideMenuRef.current.contains(e.target)) return
      // 検索ボタンクリック
      if (searchBtn.current.contains(e.target)) return

      setIsActive(false)
      removeDocumentClickHandler()
    }
  },[])
  const removeDocumentClickHandler = (e) => {
    document.removeEventListener('click', documentClickHandler.current)
  }
  // ハンバーガーアイコンクリック
  const handleClick = e => {
    if (isActive) { // CLOSE MENU
      setIsActive(false);
      setSearchBtnClicked(false);
      removeDocumentClickHandler()
    } else { // OPEN MENU
      setIsActive(true);
      document.addEventListener('click', documentClickHandler.current)
    }
  };
  // 検索ボタンクリック
  const searchBtnClick = () => {
    setSearchBtnClicked(!searchBtnClicked);
  };

  return (
    <>
      <div
        className={`side_btn ${isActive && "active"}`}
        onClick={() => handleClick()}
        ref={sideMenuRef}
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
            {isLoggedIn && (
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
            {!isLoggedIn && (
              <Link to="signup" onClick={() => handleClick()}>
                新規ユーザー登録
              </Link>
            )}
          </p>
          <button
            onClick={() => searchBtnClick()}
            ref={searchBtn}
          >掲示板検索</button>
          {searchBtnClicked && <SearchTitle />}
        </div>
      </nav>
    </>
  );
};

export default SideMenus;
