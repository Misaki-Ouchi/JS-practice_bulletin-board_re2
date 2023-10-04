import { Link } from "react-router-dom";
import LogOutBtn from "./parts/links&btns/LogOutBtn";

const SideMenus = (props) => {
  let userName;
  let login;
  const value = localStorage.getItem("loginUser");
  if (!value) {
    userName = "ゲスト";
    login = true;
  } else {
    userName = JSON.parse(value).name;
    login = false;
  }

  return (
    <>
      <nav className="sideMenu">
        <div className="sideItems">
          <p>ようこそ {userName}さん</p>
          <p>
            <Link to="newTitle">新規スレッドを書く</Link>
          </p>
          <p>
            {login && <Link to="login">ログイン</Link>}
            {!login && <LogOutBtn />}
          </p>
          <p>{login && <Link to="signup">新規ユーザー登録</Link>}</p>
          <p>掲示板検索</p>
        </div>
      </nav>
    </>
  );
};

export default SideMenus;
