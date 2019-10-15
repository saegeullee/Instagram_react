import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
    <nav className={classes.UserNav}>
        <NavigationItem type="explore"/>
        <NavigationItem type="likes" />
        <NavigationItem type="user"/>
    </nav>
);

export default navigationItems;
