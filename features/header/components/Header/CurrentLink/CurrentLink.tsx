"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./CurrentLink.module.css";

const CurrentLink = () => {
  // 現在のpathに応じて表示させたい文字とhrefを返す関数
  const setHeaderLinks = () => {
    const currentPath = usePathname();
    let currentWord = "";

    switch (currentPath) {
      case "/front":
        currentWord = "フロント用画面";
        break;
      case "/house":
        currentWord = "ハウス用画面";
        break;
    }
    return { currentPath, currentWord };
  };

  const { currentPath, currentWord } = setHeaderLinks();

  return (
    <div className={styles.container}>
      <Link href={currentPath} className={styles.link}>
        {currentWord}
      </Link>
    </div>
  );
};

export default CurrentLink;
