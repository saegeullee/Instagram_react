import React from "react";
import WestagramLogo from "../../images/logo.PNG";
import classes from "./Logo.module.css";

const logo = props => (
    <img src={WestagramLogo} alt="" className={classes.Logo}></img>
);

export default logo;
