import {
  Dialog,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";
import classes from "./Topnav.module.css";
import AccountMenu from "../Components/Profile";

const TopNav = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <div className={classes.topNav}>
        <div className={classes.profile}>
          <AccountMenu />
        </div>
      </div>
    </>
  );
};

export default TopNav;
