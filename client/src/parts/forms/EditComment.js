import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { useDispatch } from "react-redux";
import "./../../confirm-alert-css.css";
import axios from "axios";
import { postsAction } from "./../../redux/posts/actions";

const EditComment = (props) => {
  const dispatch = useDispatch();
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
            deleteFunc();
          },
        },
        {
          label: "いいえ",
        },
      ],
    });
  };
  const deleteClick = (e) => {
    e.preventDefault();
    setIsDelete(true); // 削除ボタンクリック
    setFormErrors(validate(formValues)); // バリデーションチェック
    if (Object.keys(formErrors).length === 0 && isDelete) {
      confirm();
    }
  };
  // 投稿を削除
  const deleteFunc = () => {
    axios
      .post(`http://localhost:3000/DeleteComment/${editData.id}`)
      .catch((err) => console.log(err));
    axios
      .post(`http://localhost:3000/DeleteComment/titles/${editData.title_id}`)
      .catch((err) => console.log(err))
      .then((res) => navigate(-1))
      .then(dispatch(postsAction()));
  };
  const handleSubmit = (e) => {
    setIsSubmit(true); // 編集ボタンクリック
    setFormErrors(validate(formValues)); // バリデーションチェック
    e.preventDefault();
    // データ送信
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios
        .post(
          `http://localhost:3000/editComment/comments/${editData.id}`,
          formValues
        )
        // フォームクリア
        .then(setFormValues(initialValues))
        // 前ページに戻る
        .then((res) => navigate(-1))
        .catch((err) => console.log(err))
        .then(dispatch(postsAction()));
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
            <button onClick={(e) => deleteClick(e)} className="deleteBtn">
              投稿を削除
            </button>
            <button className="submitButton">編集</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditComment;
