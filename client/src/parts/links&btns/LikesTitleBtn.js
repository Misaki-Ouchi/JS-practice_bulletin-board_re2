import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Likes } from "./../../App";
import { likesUpAction } from "../../redux/likes/actions";

const LikesTitleBtn = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state); // storeのstateを保存
  const isLoggedIn = selector.users.isLoggedIn;
  const userId = selector.users.userId;

  const [favorite, setFavorite] = useState("お気に入り");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);

  // 指定タイトルのお気に入りデータ取得
  let likes = useContext(Likes);
  likes = likes.filter((val) => {
    return val.title_id === props.title_id;
  });
  const [likesCount, setLikesCount] = useState(likes.length);

  // データベース格納情報
  const values = {
    title_id: props.title_id,
    user_id: userId,
  };

  // ログイン時
  if (isLoggedIn) {
    values.user_id = userId;

    // お気に入り登録済みか確認
    axios
      .post(`http://localhost:3000/likes/confirm`, values)
      .catch((err) => console.log(err))
      .then((res) => {
        setIsDisabled(false);
        if (res.data === "already") {
          setIsRegistered(true);
          setFavorite("お気に入り解除");
        } else if (res.data === "yet") {
          setIsRegistered(false);
          setFavorite("お気に入りに登録");
        }
      });
  }
  // お気に入り登録
  const setLikesData = () => {
    axios
      .post(`http://localhost:3000/likes/register`, values)
      .catch((err) => console.log(err))
      .then(() => {
        dispatch(likesUpAction());
      })
      .then(() => {
        setFavorite("お気に入り解除");
        setLikesCount(likes.length)
      });
  };
  // お気に入り解除
  const deleteLikesData = () => {
    axios
      .post(`http://localhost:3000/likes/delete`, values)
      .catch((err) => console.log(err))
      .then(() => {
        dispatch(likesUpAction());
      })
      .then(() => {
        setFavorite("お気に入りに登録");
        setLikesCount(likes.length)
      });
  };
  // お気に入りボタンクリック
  const handleClick = async (e) => {
    e.preventDefault();
    if (isRegistered) {
      deleteLikesData();
    } else {
      setLikesData();
    }
  };

  return (
    <>
      <button
        className="likesTitleBtn"
        onClick={(e) => handleClick(e)}
        disabled={isDisabled}
      >
        {favorite}({likesCount})
      </button>
    </>
  );
};

export default LikesTitleBtn;
