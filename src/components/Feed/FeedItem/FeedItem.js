import React from "react"
import FeedHeader from "./FeedHeader/FeedHeader"
import FeedMiddle from "./FeedMiddle/FeedMiddle"
import FeedBottom from "./FeedBottom/FeedBottom"
import classes from "./FeedItem.module.css"

const feedItem = props => (
    <div className={classes.FeedItem}>
        <FeedHeader />
        <FeedMiddle />
        <FeedBottom 
            isLiked={props.isLiked} 
            liked={props.liked}
            isBookMarked={props.isBookMarked}
            bookMarked={props.bookMarked}
            />
    </div>
)

export default feedItem