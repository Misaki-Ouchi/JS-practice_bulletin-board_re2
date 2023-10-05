import React, { useContext, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./parts/dom/Header";
import Footer from "./parts/dom/Footer";
import MainPage from "./MainPage";
import LogInPage from "./parts/pageParts/LogInPage";
import SignUpForm from "./parts/pageParts/SignUpPage";
import NewTitlePage from "./parts/pageParts/NewTitlePage";
import SuccessSignUp from "./parts/pageParts/SuccessSignUp";
import SuccessPostTitle from "./parts/pageParts/SuccessPostTitle";
import ThreadPage from "./parts/pageParts/ThreadPage";
import UserLikesPage from "./parts/pageParts/UserLikesPage";
import AllThreadPage from "./parts/pageParts/AllThreadPage";
import EditCommentPage from "./parts/pageParts/EditCommentPage";
import { Titles, Comments } from "./App";
import SideMenus from "./SideMenus";

export const DataList = createContext();

const AppSub = () => {
  const titles = useContext(Titles);
  const comments = useContext(Comments);
  const dataList = [];

  // タイトルにurlデータ挿入
  titles.map((val) => {
    return (val.url = "/allThread/" + val.id);
  });
  // dataListに{titleData(タイトルデータ), comments(コメント一覧)}を格納
  let num = 1;
  for (let i = 0; i < titles.length; i++) {
    dataList[i] = { titleData: titles[i], comments: [] };
    for (let j = 0; j < comments.length; j++) {
      if (titles[i].id === comments[j].title_id) {
        dataList[i].comments.push(comments[j]);
        comments[j]["comment_count"] = num;
        num++;
      }
    }
    num = 1;
  }

  return (
    <DataList.Provider value={dataList}>
      <BrowserRouter>
        
      <Header />
        <SideMenus />
        <main>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="newTitle" element={<NewTitlePage />}></Route>
          <Route path="login" element={<LogInPage />}></Route>
          <Route path="signup" element={<SignUpForm />}></Route>
          <Route path="successSignUp" element={<SuccessSignUp />}></Route>
          <Route path="successPostTitle" element={<SuccessPostTitle />}></Route>
          <Route path="success" element={<SuccessSignUp />}></Route>
          <Route path="threadPage" element={<ThreadPage />}></Route>
          <Route path="userLikes" element={<UserLikesPage />}></Route>
          <Route path="allThread/:id" element={<AllThreadPage />}></Route>
          <Route path="editComment/:id" element={<EditCommentPage />}></Route>
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </DataList.Provider>
  );
};

export default AppSub;
