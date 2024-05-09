"use client";

import React from "react";
import styles from "./CurrentLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CurrentLink = () => {
  // pathNameによって、表示される文とLinkのhrefを変更する関数

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

  // pathNameによって、表示される文とLinkのhrefを変更する関数
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
