import styles from "./layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>React.js full course</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Develope by mehrshad with ❤</p>
      </footer>
    </>
  );
}

export default Layout;
