import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import App from "./App";
import LogInPage from "./pages/LogInPage";
import SignUpForm from "./pages/SignUpPage";
import NewTitlePage from "./pages/NewTitlePage";
import SuccessSignUp from "./pages/SuccessSignUp";
import SuccessPostTitle from "./pages/SuccessPostTitle";
import ThreadPage from "./pages/ThreadPage";
import UserLikesPage from "./pages/UserLikesPage";
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="newTitle" element={<NewTitlePage />}></Route>
        <Route path="login" element={<LogInPage />}></Route>
        <Route path="signup" element={<SignUpForm />}></Route>
        <Route path="successSignUp" element={<SuccessSignUp />}></Route>
        <Route path="successPostTitle" element={<SuccessPostTitle />}></Route>
        <Route path="success" element={<SuccessSignUp />}></Route>
        <Route path="threadPage" element={<ThreadPage />}></Route>
        <Route path="userLikes" element={<UserLikesPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
