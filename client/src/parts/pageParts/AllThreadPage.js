import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TopTitle from "../dom/Header";
import Footer from "../dom/Footer";
import AThreadsArea from "../threads/AThreadsArea";

const AllThreadPage = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState([]);
  const [comments, setComments] = useState([]);

  // 投稿データ取得
  useEffect(() => {
    const url = `http://localhost:3000/api/get/titles/${id}`;
    axios
      .get(url)
      .then((res) => setTitle(res.data))
      .catch((error) => console.log(error));
  }, [setTitle, id]);
  // タイトルデータ取得
  useEffect(() => {
    const url = `http://localhost:3000/api/get/comments/${id}`;
    axios
      .get(url)
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));
  }, [setComments, id]);

  return (
    <>
      <TopTitle />
      <div className="threadsArea">
        <AThreadsArea
          title={title[0].title}
          comments={comments}
          count={title[0].count}
          comment_count={title[0].count}
          title_id={id}
        />
      </div>
      <Footer />
    </>
  );
};

export default AllThreadPage;
