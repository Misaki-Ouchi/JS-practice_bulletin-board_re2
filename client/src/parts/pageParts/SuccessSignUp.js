import {Link} from "react-router-dom"

const SuccessSignUp = () => {
  let userName = "";
  // ユーザー情報取得
  const userValue = localStorage.getItem("loginUser");
  if (userValue) {
    userName = JSON.parse(userValue).name;
  }

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
