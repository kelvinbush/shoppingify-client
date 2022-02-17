import styles from "./auth.module.scss";

export default function Login() {
  return (
    <div className={styles.page}>
      <div className={styles.modal}>
        <div className={styles.modal__my_form}>
          <input type="text" placeholder={"email"} />
          <input type="password" placeholder={"password"} />
          <button>Login</button>
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
