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
            //onClick에서 특히 인자를 넘길 때 함수 호출하면 안되고 arrow funciton 으로 처리해야한다.
            imgSrc = <img src={ props.isLiked ? liked : like} className={classes.FeedEngageItem} alt="like" onClick={() => {props.liked(props.id)}}></img>
            break;
        case "comment":
            imgSrc = <img src={comment} className={classes.FeedEngageItem} alt="comment"></img>
            break;
        case "share":
            imgSrc = <img src={share} className={classes.FeedEngageItem} alt="share"></img>
            break;
        case "bookmark":
            imgSrc = <img src={ props.isBookMarked ? bookmarked : bookmark} className={classes.FeedEngageItem} alt="bookmark" onClick={() => {props.bookMarked(props.id)}}></img>
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