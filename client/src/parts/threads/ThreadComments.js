import EditBtn from "../links&btns/EditBtn";

// props comments「コメント一覧」、count「1コメ以外のコメント数」
// 1コメと最新count個のコメントを表示
const ThreadComments = (props) => {
  return (
    <ul>
    {props.comments.map((val, index) => {
      return (
        val.comment_count === 1 && (
          <li key={index}>
            <h4>
              {val.comment_count} 名前：{val.name}：{val.time}
              <EditBtn comments_id={val.id} />
            </h4>
            <p>{val.message}</p>
          </li>
        )
      );
    })}
    {props.comments.map((val, index) => {
       return (
        val.comment_count !== 1 &&
        val.comment_count > props.comment_count - props.count && (
          <li key={index}>
            <h4>
              {val.comment_count} 名前：{val.name}：{val.time}
              <EditBtn comments_id={val.id} />
            </h4>
            <p>{val.message}</p>
          </li>
        )
      );
    })}
  </ul>
  );
};

export default ThreadComments;
