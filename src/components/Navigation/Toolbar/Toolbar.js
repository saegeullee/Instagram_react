import React from "react";
import Logo from "../../Logo/Logo";
import Search from "../Search/Search";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";

const toolbar = props => (
    <header className={classes.Header}>
        <div className={classes.HeaderContainer}>
            <Logo />
            <Search />
            <NavigationItems />
        </div>
    </header>
);

export default toolbar;
