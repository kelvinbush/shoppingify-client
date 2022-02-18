import styles from "./auth.module.scss";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { authSelector, getJwtTokens, UserLogin } from "../features/auth";
import { useEffect, useState } from "react";
import Spinner from "../components/spinner/spinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data, pending, error } = useAppSelector(authSelector);

  async function route() {
    await router.push("/shop/shop");
  }

  useEffect(() => {
    if (data.accessToken.length > 1) {
      route().then((r) => r);
    }
  });

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
}
