import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { logInAction } from "../../redux/users/actions";

const LogInForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value }); // e.targetで取ってきたname, valueをformValuesの空のプロパティと値にそれぞれ代入
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios
        .post("http://localhost:3000/login", formValues)
        .then((res) => {
          if (res.data !== "Failed") {
            const data = { userId: res.data[0].user_id, userName: res.data[0].name }
            dispatch(logInAction(data))
            navigate("/");
          } else {
            alert("ID（メールアドレス）またはパスワードが正しくありません");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "ID（メールアドレス）を入力してください。";
    }
    if (!values.password) {
      errors.password = "パスワードを入力してください。";
    }
    return errors;
  };

  return (
    <div className="formContainer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>ユーザーログイン</h2>
        <div className="uniForm">
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
              type="text"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <p className="errorMsg">{formErrors.password}</p>
          </div>
        </div>
        <button className="submitButton">ログイン</button>
        <div className="toSignUp">
          <Link to="/signup">新規ユーザー登録はこちら</Link>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
