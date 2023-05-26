import React from "react";
import styles from "./styles.module.css";

const caption = `Check out my new post...\n.\n.\n.#acrylic #acrylic #acrylic #acrylic #acrylic #acrylic #acrylic #acrylic #acrylic #acrylic #acrylic #acrylic #acrylic`;

export const Caption = () => {
  return <div className={styles.caption}>{caption}</div>;
};
