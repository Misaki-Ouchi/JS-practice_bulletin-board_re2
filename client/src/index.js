import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import createStore from "./redux/store/store";
import App from "./App";
import "./main.css";
// import ScrollToTop from "./ScrollToTop";

export const store = createStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      
    {/* <ScrollToTop /> */}
      <App />
    </Provider>
  </React.StrictMode>
);
