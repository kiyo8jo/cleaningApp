import Today from "./Today/Today";
import HomeLink from "./HomeLink/HomeLink";
import CurrentLink from "./CurrentLink/CurrentLink";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header_container}>
      <Today />
      <CurrentLink />
      <HomeLink />
    </header>
  );
};

export default Header;
