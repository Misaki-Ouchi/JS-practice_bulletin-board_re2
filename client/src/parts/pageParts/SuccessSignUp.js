import { Link } from "react-router-dom"
import { useSelector } from "react-redux";


const SuccessSignUp = () => {
  const selector = useSelector((state) => state); // storeのstateを保存
  const userName = selector.users.userName;

  return (
    <>
      <div className="success">
        <p>
          <span>ユーザー登録が完了しました。</span><br/>
          <span>ようこそ{ userName }さん</span><br/>
        </p>
        <Link to="/">掲示板トップへ戻る</Link>
      </div>

    </>
  );
}

export default SuccessSignUp;
