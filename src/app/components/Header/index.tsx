import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <section className={styles.headerContainer}>
      <span className={styles.brandName}>The Art Corner</span>
      {/* <input placeholder="Search" className={styles.searchBar} /> */}
      <div>
        <Link href="/account" className={styles.link}>
          Search
        </Link>
        <Link href="/account" className={styles.link}>
          Explore
        </Link>
        <Link href="/account" className={styles.link}>
          Shop
        </Link>
        <Link href="/account" className={styles.link}>
          My Account
        </Link>
      </div>
    </section>
  );
};
