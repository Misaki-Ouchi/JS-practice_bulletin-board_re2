import React, { useState, useContext } from "react";
import axios from "axios";
import { Likes } from "./../../App";

const LikesTitleBtn = (props) => {
  const [favorite, setFavorite] = useState("お気に入り");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  
  // 指定タイトルのお気に入りデータ取得
  let likes = useContext(Likes);
  likes = likes.filter((val) => {
    return val.title_id === props.title_id;
  });
  const [likesCount, setLikesCount] = useState(likes.length);
  // ログイン情報取得
  let userId;
  const value = localStorage.getItem("loginUser");
  // データベース格納情報
  const values = {
    title_id: props.title_id,
    user_id: userId,
  };
  // ログイン時
  if (value && value !== "undefined") {
    userId = JSON.parse(value).user_id;
    values.user_id = userId
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
        setFavorite("お気に入り解除");
        setLikesCount(likesCount+1)
      });
    };
    // お気に入り解除
    const deleteLikesData = () => {
      axios
      .post(`http://localhost:3000/likes/delete`, values)
      .catch((err) => console.log(err))
      .then(() => {
        setFavorite("お気に入りに登録");
        setLikesCount(likesCount-1)
      })
  };
  // お気に入りボタンクリック
  const handleClick = (e) => {
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
