import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
// import "react-confirm-alert/src/react-confirm-alert.css";
import "./../../confirm-alert-css.css";
import axios from "axios";
import DeleteBtn from "../links&btns/DeleteBtn";

const EditComment = (props) => {
  const navigate = useNavigate();
  const editData = props.editData;
  const initialValues = {
    name: editData.name,
    email: "",
    title_id: editData.title_id,
    message: editData.message,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isDelete, setIsDelete] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  // 削除確認ダイアログ
  const confirm = () => {
    confirmAlert({
      title: "",
      message: "本当に削除しますか？",
      buttons: [
        {
          label: "はい",
          onClick: () => {
            alert("投稿が削除されました");
            setDeleteClicked(true); // 削除コンポーネント発火
          },
        },
        {
          label: "いいえ",
          // onClick: () => ()
        },
      ],
    });
  };
  const deleteClick = () => {
    setIsDelete(true); // 削除ボタンクリック
    setFormErrors(validate(formValues)); // バリデーションチェック
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isDelete) {
      confirm();
    }
  };
  const handleSubmit = (e) => {
    setIsSubmit(true); // 編集ボタンクリック
    setFormErrors(validate(formValues)); // バリデーションチェック
    e.preventDefault()
    // データ送信
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios
        .post(
          `http://localhost:3000/editComment/comments/${editData.id}`,
          formValues
        )
        // 前ページに戻る
        .then((res) => navigate("/"))
        // フォームクリア
        .then(setFormValues(initialValues))
        .catch((err) => console.log(err));
    }
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "名前を入力してください。";
    }
    if (!values.email) {
      errors.email = "メールアドレスを入力してください。";
    } else if (values.email !== editData.email) {
      errors.email = "正しいメールアドレスを入力してください。";
    }
    if (!values.message) {
      errors.message = "コメントを入力してください。";
    }
    return errors;
  };

  return (
    <div className="newComment">
      <div className="formContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="uniForm">
            <div className="newCommentFlex">
              <div className="formField formFieldA">
                <label htmlFor="名前">名前</label>
                <br />
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={(e) => handleChange(e)}
                  disabled
                />
                <br />
                <span className="errorMsg">{formErrors.name}</span>
              </div>
              <div className="formField formFieldA">
                <label htmlFor="email">email</label>
                <br />
                <input
                  id="email"
                  type="text"
                  name="email"
                  value={formValues.email}
                  onChange={(e) => handleChange(e)}
                />
                <p className="errorMsg">{formErrors.email}</p>
              </div>
            </div>
            <div className="formField">
              <label htmlFor="コメント">コメント</label>
              <br />
              <textarea
                id="message"
                type="text"
                name="message"
                value={formValues.message}
                rows="10"
                onChange={(e) => handleChange(e)}
              />
              <p className="errorMsg">{formErrors.message}</p>
            </div>
          </div>
          <div className="threadBtnLinks">
            <span onClick={deleteClick} className="deleteBtn">
              <DeleteBtn
                clicked={deleteClicked}
                comment_id={editData.id}
                title_id={editData.title_id}
              />
            </span>
            <button className="submitButton">編集</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditComment;
