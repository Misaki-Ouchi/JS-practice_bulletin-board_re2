// import Titles from "./Titles";
// import Comments from "./Comments";
import { useState, useEffect } from "react";
import axios from "axios";


const DataList = () => {
  const [Comments, setComments] = useState([]);
  const [Titles, setTitles] = useState([]);
  const [dataList, setDataList] = useState([]);

  // 投稿データ取得
  useEffect(() => {
    const url = "http://localhost:3000/api/get/comments";
    axios
      .get(url)
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));
  }, [setComments]);

  // タイトルデータ取得
  useEffect(() => {
    const url = "http://localhost:3000/api/get/Titles";
    axios
      .get(url)
      .then((res) => setTitles(res.data))
      .catch((error) => console.log(error));
  }, [setTitles]);
  
  // dataListに{titleData(タイトルデータ), Comments(コメント一覧)}を格納
  useEffect(() => {
    for (let i = 0; i < Titles.length; i++) {
          dataList[i] = { titleData: Titles[i], Comments: [] };
          for (let j = 0; j < Comments.length; j++) {
            if (Titles[i].id === Comments[j].title_id) {
              dataList[i].Comments.push(Comments[j]);
            }
          }
        }
  }, [Comments, Titles, dataList, setDataList]);
  // const setData = () => {
  //   for (let i = 0; i < Titles.length; i++) {
  //     dataList[i] = { titleData: Titles[i], Comments: [] };
  //     for (let j = 0; j < Comments.length; j++) {
  //       if (Titles[i].id === Comments[j].title_id) {
  //         dataList[i].Comments.push(Comments[j]);
  //       }
  //     }
  //   }
  // }
  // await setData()

  return dataList
};

export default DataList
