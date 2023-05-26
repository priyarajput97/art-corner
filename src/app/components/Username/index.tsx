"use client";

import { posts } from "@/helper/mock";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./styles.module.css";

export const Username = ({ hideIcon = false }: { hideIcon?: boolean }) => {
  const router = useRouter();

  const navigateToUser = () => {
    router.push("/account");
  };
  return (
    <div className={styles.userInfo} onClick={navigateToUser}>
      {!hideIcon && <img src={posts[0]?.link} className={styles.userIcon} />}
      <span className={styles.username}>@thecraftcrave</span>
    </div>
  );
};
