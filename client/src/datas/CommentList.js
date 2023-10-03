import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import DataList from "./DataList";

export const Comments = createContext();

const CommentList = () => {
  const [comments, setComments] = useState([]);
  // 投稿データ取得
  useEffect(() => {
    const url = "http://localhost:3000/api/get/comments";
    axios
      .get(url)
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));
  }, [setComments]);

  return (
    <Comments.Provider value={comments}>
      <DataList />
    </Comments.Provider>
  );
};

export default CommentList;
