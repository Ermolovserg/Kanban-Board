import styles from "./Outline.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Outline = ({ children }) => {
  return (
    <div className={styles.Outline}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Outline;
