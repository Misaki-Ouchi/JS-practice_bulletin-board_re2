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
    console.log(dataList)
    let j = 1;
    for (let i = 0; i < array.length; i += cutNumber) {
      newArr.push(array.slice(i, i + cutNumber));
      pageNum.push(j);
      j++;
    }
    return newArr;
  };
  let newList = splitArray(dataList, 5);
  console.log(newList)

  return (
    <>
      <WriteNewTitle />
      <ThreadTitles titles={titles} />
      <ThreadsAreas count="4" dataList={dataList} />

        {/* {newList[page].map((list, index) => {
          return (
            <ThreadsAreas key={index} count="4" dataList={list} />
          );
        })} */}
      {page > 0 && (
        <button onClick={handlePage} value="before">
          前へ
        </button>
      )}
      {pageNum.map((num, index) => {
        return (
          <button key={index} onClick={handlePage} value={num}>
            {num}
          </button>
        );
      })}
      {page < pageNum.length - 1 && (
        <button onClick={handlePage} value="next">
          次へ
        </button>
      )} 
    </>
  );
};

export default MainPage;
