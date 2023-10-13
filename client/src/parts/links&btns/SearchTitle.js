import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Titles } from "./../../App";
import searchIcon from "./../../assets/images/search.png";

const SearchTitle = () => {
  const titles = useContext(Titles);
  const [searchText, setSearchText] = useState();
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();

  // 検索テキスト格納
  const handleChange = (e) => {
    let data = e.target.value;
    setSearchText(data);
  };
  // 検索ボタンクリック
  const handleClick = () => {
    if (searchTitle(titles)) {
      const title_id = searchTitle(titles).id;
      // 全部読むページへ
      navigate(`/allThread/${title_id}`);
      setErrorText("");
    } else {
      setErrorText("該当するタイトルはありませんでした。");
    }
  };
  // titleデータから検索してID取得
  const searchTitle = (list) => {
    let data = list.filter((value) => {
      return value.title === searchText;
    });
    return data[0];
  };

  return (
    <>
      <div className="searchBox">
        <input type="text" onChange={(e) => handleChange(e)} />
        <div className="searchBtn">
          <img
             onClick={(e) => handleClick(e)}
            src={searchIcon} alt="検索" />
        </div>
      </div>
      <p className="sideMenu_errorMsg">{errorText}</p>
    </>
  );
};

export default SearchTitle;
