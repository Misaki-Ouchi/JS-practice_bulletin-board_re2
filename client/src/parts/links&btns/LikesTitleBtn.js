// import React, { useState, useContext } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { Likes } from "./../../App";
// import { likesUpAction } from "../../redux/likes/actions";

// const LikesTitleBtn = (props) => {
//   const dispatch = useDispatch();
//   const selector = useSelector((state) => state);
//   const isLoggedIn = selector.users.isLoggedIn;
//   const userId = selector.users.userId;

//   const [favorite, setFavorite] = useState("お気に入り");
//   const [isDisabled, setIsDisabled] = useState(true);
//   const [isRegistered, setIsRegistered] = useState(false);

//   // 指定タイトルのお気に入りデータ取得
//   let likes = useContext(Likes);
//   likes = likes.filter((val) => {
//     return val.title_id === props.title_id;
//   });
//   const [likesCount, setLikesCount] = useState(likes.length);

//   // データベース格納情報
//   const values = {
//     title_id: props.title_id,
//     user_id: userId,
//   };

//   // const isRegisteredFunc = () => {
//   //   // お気に入り登録済みか確認
//   //   axios
//   //     .post(`http://localhost:3000/likes/confirm`, values)
//   //     .catch((err) => console.log(err))
//   //     .then((res) => {
//   //       setIsDisabled(false);
//   //       if (res.data === "already") {
//   //         setIsRegistered(true);
//   //         setFavorite("お気に入り解除");
//   //       } else if (res.data === "yet") {
//   //         setIsRegistered(false);
//   //         setFavorite("お気に入りに登録");
//   //       }
//   //     });
//   // };
//   // ログイン時
//   if (isLoggedIn) {
//     values.user_id = userId;
//     // isRegisteredFunc();
//     // お気に入り登録済みか確認
//     axios
//       .post(`http://localhost:3000/likes/confirm`, values)
//       .catch((err) => console.log(err))
//       .then((res) => {
//         setIsDisabled(false);
//         if (res.data === "already") {
//           setIsRegistered(true);
//           setFavorite("お気に入り解除");
//         } else if (res.data === "yet") {
//           setIsRegistered(false);
//           setFavorite("お気に入りに登録");
//         }
//       });
//   }
//   // お気に入り登録
//   const setLikesData = () => {
//     axios
//       .post(`http://localhost:3000/likes/register`, values)
//       .catch((err) => console.log(err))
//       .then(() => {
//         dispatch(likesUpAction());
//       })
//       .then(() => {
//         setFavorite("お気に入り解除");
//       })
//       .then(() => {
//         setLikesCount(likes.length + 1);
//       });
//   };
//   // お気に入り解除
//   const deleteLikesData = () => {
//     axios
//       .post(`http://localhost:3000/likes/delete`, values)
//       .catch((err) => console.log(err))
//       .then(() => {
//         dispatch(likesUpAction());
//       })
//       .then(() => {
//         setFavorite("お気に入りに登録");
//       })
//       .then(() => {
//         setLikesCount(likes.length - 1);
//       });
//   };
//   // お気に入りボタンクリック
//   const handleClick = (e) => {
//     e.preventDefault();
//     if (isRegistered) {
//       deleteLikesData();
//     } else {
//       setLikesData();
//     }
//   };

//   return (
//     <>
//       <button
//         className="likesTitleBtn"
//         onClick={(e) => handleClick(e)}
//         disabled={isDisabled}
//       >
//         {favorite}({likesCount})
//       </button>
//     </>
//   );
// };

// export default LikesTitleBtn;

import React, { useContext } from "react";
import { useSelector } from "react-redux";
import ThreadTitles from "./../threads/ThreadTitles";
import ThreadsAreas from "./../threads/ThreadsAreas";
import { Likes } from "./../../App";
import { Titles } from "./../../App";
import { DataList } from "../../Router";

const UserLikesPage = (props) => {
  const selector = useSelector((state) => state); // storeのstateを保存
  // ユーザー情報取得
  const userName = selector.users.userName;
  const userId = selector.users.userId;

  // お気に入りタイトルの有無
  let isTitles = true;
  let message = "お気に入り登録されたスレッドはありません。"
  // ゲストがURLだけで訪れた場合
  if (userName === "ゲスト") {
    message = "お気に入り登録の表示にはログインが必要です。"
  }

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
  let newTitles = [];
  for (let i = 0; i < titleIds.length; i++) {
    for (let j = 0; j < titles.length; j++) {
      if (titles[j].id === titleIds[i]) {
        newTitles.push(titles[j]);
      }
    }
  }

  // お気に入りタイトル存在有無
  if (newTitles.length === 0) {
    isTitles = false;
  }


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
          <p className="likesPageMessage">{ message }</p>
        </>
      )}
    </>
  );
};

export default UserLikesPage;
