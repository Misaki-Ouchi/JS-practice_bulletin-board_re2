import AThreadsArea from "./AThreadsArea";

const ThreadsAreas = (props) => {
  const dataList = props.dataList;
  console.log(dataList)
  return (
    <>
      <div className="thread">
        <div className="threadWrap">
          {dataList.map((value, index) => {
            return (
              <div key={index} className="threadsArea">
                <AThreadsArea
                  title={value.titleData.title}
                  comments={value.comments}
                  count={props.count}
                  comment_count={value.titleData.count}
                  title_id={value.titleData.id}
                  readAll="true"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* 
        {newList[page].map((value, index) => {
          return (
            <div key={index} className="threadsArea">
              <AThreadsArea
                title={value.titleData.title}
                comments={value.comments}
                count={props.count}
                comment_count={value.titleData.count}
                title_id={value.titleData.id}
                readAll="true"
              />
            </div>
          );
        })}
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
      )} */}
    </>
  );
};

export default ThreadsAreas;
