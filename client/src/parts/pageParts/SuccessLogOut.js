import { Link } from "react-router-dom";

const SuccessLogOut = () => {
  return (
    <>
      <div className="success">
        <p>ログアウトしました。</p>
        <Link to="/">掲示板トップへ戻る</Link>
      </div>
    </>
  );
};

export default SuccessLogOut;
