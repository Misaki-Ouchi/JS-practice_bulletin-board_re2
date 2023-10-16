import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import ThreadTitles from "./../threads/ThreadTitles";
import ThreadsAreas from "./../threads/ThreadsAreas";
import { Likes } from "./../../App";
import { Titles } from "./../../App";
import { DataList } from "../../Router";
import { getUpdate } from "./../../redux/posts/selectors";

const UserLikesPage = () => {
  const selector = useSelector((state) => state);
  const isPosted = getUpdate(selector);
  // ユーザー情報取得
  const userName = selector.users.userName;
  const userId = selector.users.userId;

  // お気に入りタイトルの有無
  let message = "お気に入り登録されたスレッドはありません。";
  // ゲストがURLだけで訪れた場合
  if (userName === "ゲスト") {
    message = "お気に入り登録の表示にはログインが必要です。";
  }

  let dataList = useContext(DataList);
  let titles = useContext(Titles);
  let likes = useContext(Likes);

  let isTitles = true;
  // 表示用リスト
  let newList = [];
  let newTitles = [];

  const setDataFunc = () => {
    // likesからユーザーの好きなタイトルID一覧取得
    likes = likes.filter((val) => {
      return val.user_id === Number(userId);
    });
    const titleIds = likes.map((val) => {
      return val.title_id;
    });
    // dataListから指定IDのコメント一覧取得
    for (let i = 0; i < titleIds.length; i++) {
      for (let j = 0; j < dataList.length; j++) {
        if (dataList[j].titleData.id === titleIds[i]) {
          newList.push(dataList[j]);
        }
      }
    }
    // 好きなタイトル一覧取得
    for (let i = 0; i < titleIds.length; i++) {
      for (let j = 0; j < titles.length; j++) {
        if (titles[j].id === titleIds[i]) {
          newTitles.push(titles[j]);
        }
      }
    }
    // お気に入りタイトル存在有無
    if (newTitles.length === 0) {
      isTitles = false
    }
  };
  setDataFunc();

  useEffect(() => {
    // let ignore = false;
    // if (!ignore) {
    //   setDataFunc();
    //   console.log(isPosted);
    // }
    // return () => {
    //   ignore = true;
    // };
    setDataFunc();

  }, [isPosted]);

  return (
    <>
      <h2>{userName}さんのお気に入りスレッド一覧</h2>
      {isTitles && (
        <>
          <ThreadTitles titles={newTitles} />
          <ThreadsAreas count="4" dataList={newList} />
        </>
      )}
      {!isTitles && (
        <>
          <p className="likesPageMessage">{message}</p>
        </>
      )}
    </>
  );
};

export default UserLikesPage;
