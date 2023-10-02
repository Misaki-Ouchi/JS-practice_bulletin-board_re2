import { useState } from "react";

const LikesTitleBtn = (props) => {
  const [isClick, setIsClick] = useState();
  const handleClick = () => {
    // お気に入り登録
  };

  return (
    <>
      <button onClick={() => handleClick()}>お気に入りに追加({props.comment_count})</button>
    </>
  );
};

export default LikesTitleBtn;
