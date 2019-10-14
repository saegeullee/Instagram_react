import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
    <nav className={classes.UserNav}>
        <NavigationItem />
        <NavigationItem />
        <NavigationItem />
    </nav>
);

export default navigationItems;
