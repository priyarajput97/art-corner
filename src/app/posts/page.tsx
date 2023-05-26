import { posts } from "@/helper/mock";
import React from "react";
import {
  MdBookmarkBorder,
  MdChat,
  MdChatBubbleOutline,
  MdComment,
  MdFavoriteBorder,
  MdOutlineComment,
} from "react-icons/md";
import { Caption } from "../components/Caption";
import { Username } from "../components/Username";
import styles from "./posts.module.css";

const Posts = () => {
  return (
    <div className={styles.postsContainer}>
      {posts?.map((post) => (
        <div key={post?.id} className={styles.postContainer}>
          <img src={post?.link} className={styles.postImg} />

          <div className={styles.postContent}>
            <Username />
            <Caption />
            <div className={styles.iconsContainer}>
              <div className={styles.iconContainer}>
                <MdFavoriteBorder size={28} />
                <div className={styles.iconValue}>200</div>
              </div>
              <div className={styles.iconContainer}>
                <MdBookmarkBorder size={28} />
                <div className={styles.iconValue}>10</div>
              </div>
              <div className={styles.iconContainer}>
                <MdChatBubbleOutline size={26} />
                <div className={styles.iconValue}>13</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
