import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import classes from "./Sidenav.module.css";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NavLogo from "../Assets/logo.png";

const SideNav = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const { path } = useRouteMatch();
  return (
    <>
      <div className={classes.sideNav}>
        <img src={NavLogo} className={classes.navLogo} />
        <List className={classes.navList}>
          <NavLink activeClassName={classes.active} to={`${path}/search`}>
            <ListItem button className={classes.navBtn}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
          </NavLink>
          <NavLink
            activeClassName={classes.active}
            to={`${path}/saved-queries`}
          >
            <ListItem button className={classes.navBtn}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Saved Queries" />
            </ListItem>
          </NavLink>
        </List>
      </div>
    </>
  );
};

export default SideNav;
