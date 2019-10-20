import React from "react"
import classes from "./FeedHeader.module.scss"
import ProfileImg from "../../../UI/ProfileImg/ProfileImg"
import ProfileName from "../../../UI/ProfileName/ProfileName"
import FeedHeaderMenu from "../../../../images/menu.png"

const feedHeader = props => (
    <div className={classes.FeedHeader}>
        <div className={classes.FeedHeader__Profile}>
            <ProfileImg />
            <ProfileName />
        </div>
        <img src={FeedHeaderMenu} alt="FeedHeaderMenu" className={classes.FeedHeader__Menu}></img>
    </div>
)

export default feedHeader