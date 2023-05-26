import React from "react";
import styles from "./styles.module.css";

export const Button = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <div className={styles.shopButton} onClick={onClick}>
      {title}
    </div>
  );
};
