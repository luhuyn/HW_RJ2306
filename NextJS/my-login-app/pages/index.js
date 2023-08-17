import styles from '../styles/Login.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <form className={styles.loginForm}>
        <div className={styles.inputField}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button className={styles.submitButton} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}