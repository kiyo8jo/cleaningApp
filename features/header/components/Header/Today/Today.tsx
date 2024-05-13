import styles from "./Today.module.css";

const Today = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return <div className={styles.container}> {`${month}/${day}`}</div>;
};

export default Today;
