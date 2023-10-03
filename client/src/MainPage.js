import React, { useState, useContext, createContext } from "react";
import Header from "./parts/dom/Header";
import WriteNewTitle from "./parts/links&btns/WriteNewTitle";
import ThreadTitles from "./parts/threads/ThreadTitles";
import ThreadsAreas from "./parts/threads/ThreadsAreas";
import SideMenus from "./SideMenus";
import Footer from "./parts/dom/Footer";
// import { Titles, Comments } from "./App";
// import { useSelector } from "react-redux"
// import DataList from "./datas/DataList";

// export const DataList = createContext();

const MainPage = () => {
  // const postList = useSelector((state) => state.posts.value)
  // console.log(postList)

  // const titles = useContext(Titles);
  // const comments = useContext(Comments);
  // const DataList = [];
  // const state = {
  //   count: 0,               // 表示コメント数
  //   isLoggedIn: false,      // ログイン状態
  //   showReadAllLink: true,  // 全部読むリンク
  // }

  // // DataListに{titleData(タイトルデータ), comments(コメント一覧)}を格納
  // for (let i = 0; i < titles.length; i++) {
  //   DataList[i] = { titleData: titles[i], comments: [] };
  //   for (let j = 0; j < comments.length; j++) {
  //     if (titles[i].id === comments[j].title_id) {
  //       DataList[i].comments.push(comments[j]);
  //     }
  //   }
  // }
  // console.log(DataList)


  return (
    <>
      <Header />
      {/* <DataList.Provider value={DataList}> */}
        <SideMenus />
        <main>
          <WriteNewTitle />
          <ThreadTitles />
          <ThreadsAreas count="4" />
        </main>
      {/* </DataList.Provider> */}
      <Footer />
    </>
  );
};

export default MainPage;
