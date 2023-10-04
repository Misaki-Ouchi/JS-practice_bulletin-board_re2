import React, { useState, useContext } from "react";
import axios from "axios";
import { Likes } from "./../../App";

const LikesTitleBtn = (props) => {
  // 指定タイトルのお気に入りデータ取得
  let likes = useContext(Likes);
  likes = likes.filter((val) => {
    return val.title_id === props.title_id;
  });
  // ログイン情報取得
  let userId
  const likesCount = likes.length;
  const value = localStorage.getItem("loginUser");
  const handleClick = (e) => {
    e.preventDefault();
    if (value) {
      userId = JSON.parse(value).user_id;
      console.log(userId)
      setLikesData()
    }
  }
  const setLikesData = () => {
    // お気に入り登録
    const values = {
      title_id: props.title_id,
      user_id: props.user_id
    }
    axios
      .post(`http://localhost:3000/likes`, values)
      .catch((err) => console.log(err));
  };


  return (
    <>
      <button className="likesTitleBtn" onClick={(e) => handleClick(e)}>
        お気に入り({likesCount})
      </button>
    </>
  );
};

export default LikesTitleBtn;
