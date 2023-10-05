import React, { useContext } from "react";
import TopTitle from "../dom/Header";
import ThreadTitles from "./../threads/ThreadTitles";
import ThreadsAreas from "./../threads/ThreadsAreas";
import Footer from "../dom/Footer";
import { Likes } from "./../../App";
import { Titles } from "./../../App";
import { DataList } from "../../Router";

const UserLikesPage = (props) => {
  // ユーザー情報取得
  const value = localStorage.getItem("loginUser");
  const userName = JSON.parse(value).name;
  const userId = JSON.parse(value).user_id;

  let dataList = useContext(DataList);
  let titles = useContext(Titles);
  let likes = useContext(Likes);
  // likesからユーザーの好きなタイトルID一覧取得
  likes = likes.filter((val) => {
    return val.user_id === Number(userId);
  });
  const titleIds = likes.map((val) => {
    return val.title_id;
  });
  // dataListから指定IDのコメント一覧取得
  let newList = [];
  for (let i = 0; i < titleIds.length; i++) {
    for (let j = 0; j < dataList.length; j++) {
      if (dataList[j].titleData.id === titleIds[i]) {
        newList.push(dataList[j]);
      }
    }
  }
  // 好きなタイトル一覧取得
  let newTitles = []
  for (let i = 0; i < titleIds.length; i++) {
    for (let j = 0; j < titles.length; j++) {
      if (titles[j].id === titleIds[i]) {
        newTitles.push(titles[j]);
      }
    }
  }

  return (
    <>
      <TopTitle />
      <h2>{userName}さんのお気に入りスレッド一覧</h2>
      <ThreadTitles titles={newTitles} />
      <ThreadsAreas count="4" dataList={newList} />
      <Footer />
    </>
  );
};

export default UserLikesPage;
