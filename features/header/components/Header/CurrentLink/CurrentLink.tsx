"use client";

import React from "react";
import styles from "./CurrentLink.module.css";
import Link from "next/link";
import { setHeaderLinks } from "@/utils/hooks";

const CurrentLink = () => {
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
