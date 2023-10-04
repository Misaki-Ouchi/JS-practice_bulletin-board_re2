import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import TopTitle from "../dom/Header";
import Footer from "../dom/Footer";
import AThreadsArea from "../threads/AThreadsArea";
import { DataList } from "../../Router";

const AllThreadPage = (props) => {
  let dataList = useContext(DataList);
  const {id} = useParams();
  // 指定タイトルのコメントのみ絞り込み
  dataList = dataList.filter((val) => {
    return val.titleData.id === Number(id)
  })

  return (
    <>
      <TopTitle />
    <div className="thread">
      <div className="threadWrap">
          {dataList.map((value, index) => {
            return (
              <div key={index} className="threadsArea" >
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
      <Footer />
    </>
  );
};

export default AllThreadPage;
