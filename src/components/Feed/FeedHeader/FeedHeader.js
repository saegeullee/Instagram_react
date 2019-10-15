import React from "react"
import classes from "./FeedHeader.module.css"
import ProfileImg from "../../UI/ProfileImg/ProfileImg"
import ProfileName from "../../UI/ProfileName/ProfileName"
import FeedHeaderMenu from "../../../images/menu.png"

const feedHeader = props => (
    <div className={classes.FeedHeader}>
        <div className={classes.FeedHeaderProfile}>
            <ProfileImg />
            <ProfileName />
        </div>
        <img src={FeedHeaderMenu} alt="FeedHeaderMenu" className={classes.FeedHeaderMenu}></img>
    </div>
)

export default feedHeader