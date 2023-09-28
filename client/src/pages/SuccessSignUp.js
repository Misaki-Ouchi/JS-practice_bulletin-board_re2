import {Link} from "react-router-dom"

const SuccessSignUp = () => {
  return (
    <>
      <div className="success">
        <p>
          <span>ユーザー登録が完了しました。</span><br/>
          <span>ようこそ{ }さん</span><br/>
        </p>
        <Link to="/">掲示板トップへ戻る</Link>
      </div>

    </>
  );
}

export default SuccessSignUp;
