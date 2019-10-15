import React from "react"
import FeedEngageItem from "./FeedEngageItem/FeedEngageItem"
import classes from "./FeedEngage.module.css"

const feedEngage = props => (

    <div className={classes.FeedEngage}>
        <div className={classes.FeedEngageLeft}>
            <FeedEngageItem type="like"/>
            <FeedEngageItem type="comment"/>
            <FeedEngageItem type="share"/>
        </div>
        <FeedEngageItem type="bookmark"/>
    </div>
)

export default feedEngage