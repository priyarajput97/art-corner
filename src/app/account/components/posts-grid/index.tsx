import { TABS } from "@/helper/constants";
import { posts } from "@/helper/mock";
import { SELECTED_TAB } from "@/helper/types";
import React from "react";
import { MdBookmark, MdFavorite } from "react-icons/md";
import styles from "./styles.module.css";

const PostsGrid = ({ selectedTab }: { selectedTab: SELECTED_TAB }) => {
  return (
    <div className={styles.postsContainer}>
      {posts?.map((post) => (
        <div key={post?.id} className={styles.postContainer}>
          <img src={post?.link} className={styles.post} />
          <div className={styles.likes}>
            {selectedTab === TABS.posts ? (
              <MdFavorite size={16} />
            ) : (
              <MdBookmark size={16} />
            )}
            <span className={styles.likeCount}>{post.likes}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsGrid;
