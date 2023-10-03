import React, { useContext, createContext } from "react";
import WriteNewTitle from "../parts/links&btns/WriteNewTitle";
import SideMenus from "../SideMenus";
import ThreadTitles from "../parts/threads/ThreadTitles";
import ThreadsAreas from "../parts/threads/ThreadsAreas";
import AllThreadPage from "../parts/pageParts/AllThreadPage";
import { Titles, Comments } from "../App";

export const DataList = createContext();

const ForProvide = () => {
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
      <DataList.Provider value={dataList}>
        {/* <SideMenus />
        <WriteNewTitle />
        <ThreadTitles />
      <ThreadsAreas /> */}
        <AllThreadPage />
      </DataList.Provider>
    </>
  );
};

export default ForProvide;
