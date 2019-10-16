import React from "react"
import FeedEngageItem from "./FeedEngageItem/FeedEngageItem"
import classes from "./FeedEngage.module.css"

const feedEngage = props => (

    <div className={classes.FeedEngage}>
        <div className={classes.FeedEngageLeft}>
            <FeedEngageItem type="like" 
                isLiked={props.isLiked} 
                liked={props.liked}/>
            <FeedEngageItem type="comment"/>
            <FeedEngageItem type="share"/>
        </div>
        <FeedEngageItem type="bookmark"
                isBookMarked={props.isBookMarked}
                bookMarked={props.bookMarked}/>
    </div>
)

export default feedEngage