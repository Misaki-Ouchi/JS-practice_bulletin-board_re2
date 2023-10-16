import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import ThreadTitles from "./../threads/ThreadTitles";
import ThreadsAreas from "./../threads/ThreadsAreas";
import { Likes } from "./../../App";
import { Titles } from "./../../App";
import { DataList } from "../../Router";

const UserLikesPage = () => {
  const selector = useSelector((state) => state);
  // ユーザー情報取得
  const userName = selector.users.userName;
  const userId = selector.users.userId;

  const [page, setPage] = useState(0);

  // お気に入りタイトルの有無
  let message = "お気に入り登録されたスレッドはありません。";
  // ゲストがURLだけで訪れた場合
  if (userName === "ゲスト") {
    message = "お気に入り登録の表示にはログインが必要です。";
  }

  let dataList = useContext(DataList);
  let titles = useContext(Titles);
  let likes = useContext(Likes);

  let isTitles = false;
  if (titles.length > 0) {
    isTitles = true;
  }

  // likesからユーザーの好きなタイトルID一覧取得
  likes = likes.filter((val) => {
    return val.user_id === Number(userId);
  });
  const titleIds = likes.map((val) => {
    return val.title_id;
  });

  // 好きなタイトルのコメント一覧取得
  dataList = dataList.filter((data) => titleIds.includes(data.titleData.id));

  // 好きなタイトル一覧取得
  titles = titles.filter((title) => titleIds.includes(title.id));

  // お気に入りタイトル存在有無
  if (titles.length === 0) {
    isTitles = false;
  }

  // ページネーション
  let pageNum = [];
  // データリスト分割
  const splitArray = (array, cutNumber) => {
    const newArr = [];
    let j = 1;
    for (let i = 0; i < array.length; i += cutNumber) {
      newArr.push(array.slice(i, i + cutNumber));
      pageNum.push(j);
      j++;
    }
    return newArr;
  };
  // 分割後データリスト
  let newList = splitArray(dataList, 5);

  // ページ遷移クリック後
  const handlePage = (e) => {
    let value = e.target.value;
    if (value === "before") {
      setPage(page - 1);
    } else if (value === "next") {
      setPage(page + 1);
    } else {
      value = Number(value);
      setPage(value - 1);
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      <h2>{userName}さんのお気に入りスレッド一覧</h2>
      {isTitles && (
        <>
          <ThreadTitles titles={titles} />
          <ThreadsAreas count="4" dataList={newList[page]} />
        </>
      )}
      {!isTitles && (
        <>
          <p className="likesPageMessage">{message}</p>
        </>
      )}

      <div className="pageBtnArea">
        {page !== 0 && (
          <button className="pageBtn" value="before" onClick={handlePage}>
            前へ
          </button>
        )}
        {pageNum.length > 10 && page > 5 && <span>...</span>}
        {pageNum.map((num, index) => {
          return (
            num >= page - 4 &&
            num <= page + 5 && (
              <button
                className="pageBtn"
                key={index}
                value={num}
                onClick={handlePage}
                disabled={page === num - 1}
              >
                {num}
              </button>
            )
          );
        })}
        {pageNum.length > 10 && page < pageNum.length - 5 && <span>...</span>}
        {page !== pageNum.length - 1 && (
          <button className="pageBtn" value="next" onClick={handlePage}>
            次へ
          </button>
        )}
      </div>
    </>
  );
};

export default UserLikesPage;
