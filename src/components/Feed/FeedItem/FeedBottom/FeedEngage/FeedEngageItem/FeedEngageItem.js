import React from "react"
import like from "../../../../../../images/likes.png"
import liked from "../../../../../../images/liked.png"
import comment from "../../../../../../images/comment.png"
import share from "../../../../../../images/share.png"
import bookmark from "../../../../../../images/bookmark.png"
import bookmarked from "../../../../../../images/bookmarked.png"
import classes from "./FeedEngageItem.module.css"

const feedEngageItem = props => {

    let imgSrc = "";
    switch(props.type) {
        case "like":
            imgSrc = <img src={ props.isLiked ? liked : like} className={classes.FeedEngageItem} alt="like" onClick={props.liked}></img>
            break;
        case "comment":
            imgSrc = <img src={comment} className={classes.FeedEngageItem} alt="comment"></img>
            break;
        case "share":
            imgSrc = <img src={share} className={classes.FeedEngageItem} alt="share"></img>
            break;
        case "bookmark":
            imgSrc = <img src={ props.isBookMarked ? bookmarked : bookmark} className={classes.FeedEngageItem} alt="bookmark" onClick={props.bookMarked}></img>
            break;
        default:
            break;
    }

    return (
        <div>
            {imgSrc}
        </div>
        )
}

export default feedEngageItem