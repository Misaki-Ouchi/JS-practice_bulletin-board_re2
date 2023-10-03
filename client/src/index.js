import React, { useState, useEffect, createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";
import MainPage from "./App";
import LogInPage from "./parts/pageParts/LogInPage";
import SignUpForm from "./parts/pageParts/SignUpPage";
import NewTitlePage from "./parts/pageParts/NewTitlePage";
import SuccessSignUp from "./parts/pageParts/SuccessSignUp";
import SuccessPostTitle from "./parts/pageParts/SuccessPostTitle";
import ThreadPage from "./parts/pageParts/ThreadPage";
import UserLikesPage from "./parts/pageParts/UserLikesPage";
import AllThreadPage from "./parts/pageParts/AllThreadPage";
import "./main.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
// import  {postsReducer}  from "./features/Posts";

const store = configureStore({
  reducer: {
    // posts: postsReducer
  },
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>

    </Provider>
  </React.StrictMode>
);
