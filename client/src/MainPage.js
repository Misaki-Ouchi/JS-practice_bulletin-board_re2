import { useState, useEffect, useContext } from "react";
import WriteNewTitle from "./parts/links&btns/WriteNewTitle";
import ThreadTitles from "./parts/threads/ThreadTitles";
import ThreadsAreas from "./parts/threads/ThreadsAreas";
import { Titles } from "./App";
import { DataList } from "./Router";

const MainPage = () => {
  const dataList = useContext(DataList);
  const titles = useContext(Titles);

  const [page, setPage] = useState(0);

  // ページネーション
  let pageNum = [];
  // ボタン表示
  let isDisabled = []
  // データリスト分割
  const splitArray = (array, cutNumber) => {
    const newArr = [];
    let j = 1;
    for (let i = 0; i < array.length; i += cutNumber) {
      newArr.push(array.slice(i, i + cutNumber));
      pageNum.push(j);
      j++;
    }
    return newArr;
  };
  // 分割後データリスト
  let newList = splitArray(dataList, 2);

  // ページ遷移クリック後
  const handlePage = (e) => {
    let value = e.target.value;
    if (value === "before") {
      setPage(page - 1);
    } else if (value === "next") {
      setPage(page + 1);
    } else {
      value = Number(value);
      setPage(value - 1);
    }
  };
  console.log(newList)
  console.log(page)

  return (
    <>
      <WriteNewTitle />
      <ThreadTitles titles={titles} />
      <ThreadsAreas count="4" dataList={newList[page]} />

      <div className="pageBtnArea">
        {page > 0 && (
          <button className="pageBtn" onClick={handlePage} value="before">
            前へ
          </button>
        )}
        {pageNum.map((num, index) => {
          return (
            <button
              className="pageBtn"
              key={index}
              onClick={handlePage}
              value={num}
              // disabled={isDisabled[page[1]]}
            >
              {num}
            </button>
          );
        })}
        {pageNum.length > 10 && page < pageNum.length - 1 && <span>...</span>}
        {page < pageNum.length - 1 && (
          <button className="pageBtn" onClick={handlePage} value="next">
            次へ
          </button>
        )}
      </div>
    </>
  );
};

export default MainPage;
