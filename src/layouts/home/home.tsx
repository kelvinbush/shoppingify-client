import styles from "./home.module.scss";
import Sidebar from "../sidebar/sidebar";
import MainContent from "../main-content/main_content";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <MainContent />
    </div>
  );
}
