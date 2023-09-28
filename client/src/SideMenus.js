import { Link } from "react-router-dom";
import "./main.css";

const SideMenus = () => {
  return (
    <>
      <nav className="sideMenu">
        <div className="sideItems">
          <p>ようこそ {}さん</p>
          <p>
            <Link to="newTitle">新規スレッドを書く</Link>
          </p>
          <p>
            <Link to="login">ログイン</Link>
          </p>
          <p>
            <Link to="signup">新規ユーザー登録</Link>
          </p>
          <p>掲示板検索</p>
        </div>
      </nav>
    </>
  );
};

export default SideMenus;
