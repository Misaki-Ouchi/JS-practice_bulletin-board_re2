import { Link } from "react-router-dom";

const SuccessPostTitlePage = () => {
  return (
    <>
      <div className="success">
        <p>新規投稿が完了しました。</p>
        <Link to="/">掲示板トップへ戻る</Link>
      </div>
    </>
  );
};

export default SuccessPostTitlePage;
