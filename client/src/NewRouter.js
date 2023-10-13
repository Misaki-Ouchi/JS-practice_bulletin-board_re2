import React, { useContext, createContext } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
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
import { Titles, Comments } from "./App";
import SideMenus from "./SideMenus";

export const DataList = createContext();

const Layout = () => {
  return (
    <>
      {/* <MainPage /> */}
      <ScrollRestoration />
    </>
  );
};
const createRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/", element: <MainPage /> },
      { path: "newTitle", element: <NewTitlePage /> },
      { path: "login", element: <LogInPage /> },
      { path: "signup", element: <SignUpForm /> },
      { path: "successSignUp", element: <SuccessSignUp /> },
      { path: "successPostTitle", element: <SuccessPostTitle /> },
      { path: "success", element: <SuccessSignUp /> },
      { path: "userLikes", element: <UserLikesPage /> },
      { path: "allThread/:id", element: <AllThreadPage /> },
      { path: "editComment/:id", element: <EditCommentPage /> },
    ],
  },
]);

const NewRouter = () => {
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
          <Header />
          <main>
            <RouterProvider router={createRouter} />
          </main>
          <SideMenus />
          <Footer />
      </DataList.Provider>
    </>
  );
};

export default NewRouter;
