import { useState, useContext } from "react";
import WriteNewTitle from "./parts/links&btns/WriteNewTitle";
import ThreadTitles from "./parts/threads/ThreadTitles";
import ThreadsAreas from "./parts/threads/ThreadsAreas";
import { Titles } from "./App";
import { DataList } from "./Router";

const MainPage = () => {
  const dataList = useContext(DataList);
  const titles = useContext(Titles);
  console.log(dataList)

  const [page, setPage] = useState(0);
  let pageNum = [];
  const handlePage = (e) => {
    let type = e.target.value;
    console.log(type);
    if (type === "before") {
      setPage(page - 1);
    } else if (type === "next") {
      setPage(page + 1);
    } else {
      type = Number(type);
      setPage(type - 1);
    }
  };
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
  // let newList = splitArray(dataList, 5);
  // console.log(newList);

  return (
    <>
      <WriteNewTitle />
      <ThreadTitles titles={titles} />
      {/* <ThreadsAreas count="4" dataList={newList[page]} /> */}

      {page > 0 && (
        <button className="pageBtn" onClick={handlePage} value="before">
          前へ
        </button>
      )}
      {pageNum.map((num, index) => {
        return num < page + 9 (
          <button
            className="pageBtn"
            key={index}
            onClick={handlePage}
            value={num}
          >
            {num}
          </button>
        );
      })}
      {pageNum.length > 10 && page < pageNum.length - 1 && (
        <span>...</span>
      )}
      {page < pageNum.length - 1 && (
        <button className="pageBtn" onClick={handlePage} value="next">
          次へ
        </button>
      )}
    </>
  );
};

export default MainPage;
