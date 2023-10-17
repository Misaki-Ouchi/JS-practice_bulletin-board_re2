import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInAction } from "../../redux/users/actions";
import axios from "axios";

const SignUpForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [nameErrors, setNameErrors] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (!formValues.name) {
      setNameErrors("名前を入力してください。");
    } else {
      // ユーザ名登録済みか確認
      axios
        .post("http://localhost:3000/confirm/userName", formValues)
        .then((res) => {
          if (res.data === "Failed") {
            setNameErrors("こちらのユーザー名はすでに登録されています。");
          } else {
            setNameErrors("");
          }
        });
    }
    if (
      Object.keys(formErrors).length === 0 &&
      nameErrors === "" &&
      formValues.name !== "" &&
      formValues.email !== "" &&
      formValues.password !== ""
    ) {
      // 新規会員登録
      axios
        .post("http://localhost:3000/users", formValues)
        .catch((err) => console.log(err));
      // ログイン
      axios
        .post("http://localhost:3000/login", formValues)
        .then((res) => {
          const data = {
            userId: res.data[0].user_id,
            userName: res.data[0].name,
            userEmail: res.data[0].email,
          };
          dispatch(logInAction(data));
          navigate("/");
        })
        .catch((err) => console.log(err))
        .then(() => navigate("/successSignUp"));
    }
  };
  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (!values.email) {
      errors.email = "ID（メールアドレス）を入力してください。";
    } else if (!regex.test(values.email)) {
      errors.email = "正しいメールアドレスを入力してください。";
    }
    if (!values.password) {
      errors.password = "パスワードを入力してください。";
    }
    return errors;
  };

  return (
    <div className="formContainer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>新規ユーザー登録</h2>
        <div className="uniForm">
          <div className="formField">
            <label htmlFor="名前">名前</label>
            <br />
            <input
              id="name"
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
            />
            <p className="errorMsg">{nameErrors}</p>
          </div>
          <div className="formField">
            <label htmlFor="ID（メールアドレス）">ID（メールアドレス）</label>
            <br />
            <input
              id="email"
              type="text"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <p className="errorMsg">{formErrors.email}</p>
          </div>
          <div className="formField">
            <label htmlFor="パスワード">パスワード</label>
            <br />
            <input
              id="password"
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <p className="errorMsg">{formErrors.password}</p>
          </div>
        </div>
        <button className="submitButton">登録</button>
      </form>
    </div>
  );
};

export default SignUpForm;
