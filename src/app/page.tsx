import Link from "next/link";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.department_container}>
        <Link className={styles.link} href="/front">
          フロント
        </Link>
        <Link className={styles.link} href="/house">
          ハウス
        </Link>
      </div>
      <div className={styles.create_container}>
        <Link className={styles.link} href="/createTable">
          作成する
        </Link>
      </div>
    </div>
  );
};

export default page;
