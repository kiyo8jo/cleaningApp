import Link from "next/link";
import styles from "./HomeLink.module.css";

const HomeLink = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.home_link}>
        Homeへ
      </Link>
    </div>
  );
};

export default HomeLink;
