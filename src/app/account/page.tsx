"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import PostsGrid from "./components/posts-grid";
import { MdGridOn, MdOutlineShoppingCart } from "react-icons/md";
import { Username } from "../components/Username";
import { Caption } from "../components/Caption";
import { TABS } from "@/helper/constants";
import { SELECTED_TAB } from "@/helper/types";
import { AccountActions } from "./components/actions";

const Account = () => {
  const [selectedTab, setSelectedTab] = useState<SELECTED_TAB>(TABS.posts);
  const [open, setOpen] = useState<boolean>(false);

  const showMenu = () => {
    setOpen(true);
  };

  return (
    <main className={styles.container}>
      <div className={styles.userInfoContainer}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            className={styles.profileImg}
          />
          <Username hideIcon={true} />
        </div>
        <div className={styles.userDetailsContainer}>
          <div className={styles.usernameContainer}>
            <div className={styles.userFullname}>Priya Rajput</div>
            <AccountActions />
          </div>

          <div className={styles.userDetails}>
            <div className={styles.countContainer}>
              <div>10</div>
              <div>Posts</div>
            </div>
            <div className={styles.countContainer}>
              <div>2000</div>
              <div>Followers</div>
            </div>
            <div className={styles.countContainer}>
              <div>189</div>
              <div>Following</div>
            </div>
          </div>

          <Caption />
        </div>
      </div>
      <div className={styles.tabsContainer}>
        <div
          className={`${styles.tab} ${
            selectedTab === TABS.posts && styles.active
          }`}
          onClick={() => setSelectedTab(TABS.posts)}
        >
          <MdGridOn />
          <span>Posts</span>
        </div>
        <div
          className={`${styles.tab} ${
            selectedTab === TABS.shop && styles.active
          }`}
          onClick={() => setSelectedTab(TABS.shop)}
        >
          <MdOutlineShoppingCart />
          <span>Shop</span>
        </div>
      </div>
      <div className={styles.divider} />
      <PostsGrid selectedTab={selectedTab} />
    </main>
  );
};

export default Account;
