import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { MdMoreVert } from "react-icons/md";
import styles from "./styles.module.css";

export const AccountActions = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.moreAction}>
      <div onClick={handleClick}>
        <MdMoreVert size={20} />
      </div>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem autoFocus={false}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
