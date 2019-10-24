import React from "react";
import Logo from "../../Logo/Logo";
import Search from "../Search/Search";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";

const toolbar = props => (
    <header className={classes.Header} onClick={props.hideTemporarilyShownElement}>
        <div className={classes.HeaderContainer}>
            <Logo logoClicked={props.logoClicked}/> 
            <Search 
                users={props.users}
                isSearching = {props.isSearching}
                searched = {props.searched} />
            <NavigationItems />
        </div>
    </header>
);

export default toolbar;
