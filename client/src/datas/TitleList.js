import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import DataList from "./DataList";

export const Titles = createContext();

const TitleList = () => {
  const [titles, setTitles] = useState([]);
  // 投稿データ取得
  useEffect(() => {
    const url = "http://localhost:3000/api/get/Titles";
    axios
      .get(url)
      .then((res) => setTitles(res.data))
      .catch((error) => console.log(error));
  }, [setTitles]);

  return (
    <Titles.Provider value={titles}>
      <DataList />
    </Titles.Provider>
  );
};

export default TitleList;
