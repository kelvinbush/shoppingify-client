import styles from "./auth.module.scss";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { authSelector, getJwtTokens, UserLogin } from "../features/auth";
import { useEffect, useState } from "react";
import Spinner from "../components/spinner/spinner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const { pending } = useAppSelector(authSelector);
  const { data } = useAppSelector(authSelector);

  useEffect(() => {
    if (data.accessToken.length > 1) {
      navigate("shop/list");
    }
  }, [data]);

  async function submitLogin() {
    const user: UserLogin = {
      email,
      password,
    };
    try {
      await dispatch(getJwtTokens(user));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.modal}>
        <div className={styles.modal__my_form}>
          <input
            type="text"
            placeholder={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          {pending ? (
            <Spinner />
          ) : (
            <button
              onClick={submitLogin}
              disabled={email.length <= 0 || password.length <= 0}
            >
              Login
            </button>
          )}
        </div>
        <img
          className={styles.modal__login_image}
          src={"/img/login_image.jpeg"}
          alt="Login Image"
        />
      </div>
    </div>
  );
};

export default Login;
