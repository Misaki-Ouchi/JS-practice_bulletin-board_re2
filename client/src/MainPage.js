import { useState, useContext } from "react";
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
  let newList = splitArray(dataList, 5);

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
    window.scrollTo(0,0)
  };
  console.log(titles)

  return (
    <>
      <WriteNewTitle />
      <ThreadTitles titles={titles} count="25"/>
      <ThreadsAreas count="4" dataList={newList[page]} />

      <div className="pageBtnArea">
        {page !== 0 && (
          <button
            className="pageBtn"
            value="before"
            onClick={handlePage}
          >
            前へ
          </button>
        )}
        {pageNum.length > 10 && page > 5 && <span>...</span>}
        {pageNum.map((num, index) => {
          return (
            num >= page - 4 &&
            num <= page + 5 && (
              <button
                className="pageBtn"
                key={index}
                value={num}
                onClick={handlePage}
                disabled={page === num - 1}
              >
                {num}
              </button>
            )
          );
        })}
        {pageNum.length > 10 && page < pageNum.length - 5 && <span>...</span>}
        {page !== pageNum.length - 1 && (
          <button
            className="pageBtn"
            value="next"
            onClick={handlePage}
          >
            次へ
          </button>
        )}
      </div>
    </>
  );
};

export default MainPage;
