import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AThreadsArea from "../threads/AThreadsArea";
import { DataList } from "../../Router";

const AllThreadPage = (props) => {
  let dataList = useContext(DataList);
  const { id } = useParams();
  // 指定タイトルのコメントのみ絞り込み
  dataList = dataList.filter((val) => {
    return val.titleData.id === Number(id);
  });
  console.log(dataList)


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
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="thread">
        <div className="threadWrap">
          {newList[page].map((value, index) => {
            return (
              <div key={index} className="threadsArea">
                <AThreadsArea
                  title={value.titleData.title}
                  comments={value.comments}
                  count={value.comments.length - 1}
                  comment_count={value.titleData.count}
                  title_id={value.titleData.id}
                  readAll={false}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="pageBtnArea">
        {page !== 0 && (
          <button className="pageBtn" value="before" onClick={handlePage}>
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
          <button className="pageBtn" value="next" onClick={handlePage}>
            次へ
          </button>
        )}
      </div>
    </>
  );
};

export default AllThreadPage;
