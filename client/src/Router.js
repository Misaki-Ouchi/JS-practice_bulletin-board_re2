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
import UserLikesPage from "./parts/pageParts/UserLikesPage";
import AllThreadPage from "./parts/pageParts/AllThreadPage";
import EditCommentPage from "./parts/pageParts/EditCommentPage";
import ScrollToTop from "./ScrollToTop";
import { Titles, Comments } from "./App";
import SideMenus from "./SideMenus";

export const DataList = createContext();

const Router = () => {
  const titles = useContext(Titles);
  const comments = useContext(Comments);

  let dataList = [];
  // タイトルにurlデータ挿入
  titles.map((val) => {
    return (val.url = "/allThread/" + val.id);
  });
  for (let i = 0; i < titles.length; i++) {
    let num = 1;
    dataList[i] = { titleData: titles[i], comments: [] };
    for (let j = 0; j < comments.length; j++) {
      if (titles[i].id === comments[j].title_id) {
        dataList[i].comments.push(comments[j]);
        comments[j]["comment_count"] = num;
        num++;
      }
    }
  }

  return (
    <>
      <DataList.Provider value={dataList}>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="newTitle" element={<NewTitlePage />}></Route>
              <Route path="login" element={<LogInPage />}></Route>
              <Route path="signup" element={<SignUpForm />}></Route>
              <Route path="successSignUp" element={<SuccessSignUp />}></Route>
              <Route
                path="successPostTitle"
                element={<SuccessPostTitle />}
              ></Route>
              <Route path="success" element={<SuccessSignUp />}></Route>
              <Route path="userLikes" element={<UserLikesPage />}></Route>
              <Route path="allThread/:id" element={<AllThreadPage />}></Route>
              <Route
                path="editComment/:id"
                element={<EditCommentPage />}
              ></Route>
            </Routes>
          </main>
          <SideMenus />
          <Footer />
        </BrowserRouter>
      </DataList.Provider>
    </>
  );
};

export default Router;
