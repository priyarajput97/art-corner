import React from "react";
import { posts } from "@/helper/mock";
import styles from "./post.module.css";
import { MdFavoriteBorder, MdBookmarkBorder } from "react-icons/md";
import { Username } from "@/app/components/Username";
import { Caption } from "@/app/components/Caption";

const Post = () => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postLeftContent}>
        <img src={posts[0]?.link} className={styles.postImg} />
        <div className={styles.iconsContainer}>
          <MdFavoriteBorder size={28} />
          <MdBookmarkBorder size={28} />
        </div>
      </div>
      <div className={styles.postRightContent}>
        <Username />
        <Caption />
      </div>
    </div>
  );
};

export default Post;
