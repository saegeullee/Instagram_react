import React from "react";
import WestagramLogo from "../../images/logo.png";
import classes from "./Logo.module.css";

const logo = props => (
    <img src={WestagramLogo} alt="" className={classes.Logo} onClick={props.logoClicked}></img>
);

export default logo;
