import React, { useState, useContext, createContext } from "react";
import Header from "./parts/dom/Header";
import WriteNewTitle from "./parts/links&btns/WriteNewTitle";
import ThreadTitles from "./parts/threads/ThreadTitles";
import ThreadsAreas from "./parts/threads/ThreadsAreas";
import SideMenus from "./SideMenus";
import Footer from "./parts/dom/Footer";
import { Titles, Comments } from "./App";

export const DataList = createContext();

const MainPage = () => {
  const titles = useContext(Titles);
  const comments = useContext(Comments);
  const dataList = [];

  // dataListに{titleData(タイトルデータ), comments(コメント一覧)}を格納
  for (let i = 0; i < titles.length; i++) {
    dataList[i] = { titleData: titles[i], comments: [] };
    for (let j = 0; j < comments.length; j++) {
      if (titles[i].id === comments[j].title_id) {
        dataList[i].comments.push(comments[j]);
      }
    }
  }

  return (
    <>
      <Header />
      <DataList.Provider value={dataList}>
        <SideMenus />
        <main>
          <WriteNewTitle />
          <ThreadTitles />
          <ThreadsAreas count="4" />
        </main>
      </DataList.Provider>
      <Footer />
    </>
  );
};

export default MainPage;
