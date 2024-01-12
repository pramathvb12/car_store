import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>AutoQuest:</h2>
          <p>  Your Journey to the Perfect Ride Starts Here </p>
        </Link>
      </header>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>
        <a href="https://github.com/pramathvb12" target="_blank">
          AutoQuest
        </a>
        Next.js courses | carbuyer Project &copy;
      </footer>
    </>
  );
};

export default Layout;
